// 필요한 모듈과 유틸리티 import
import { connectDB } from '../../util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { validateSession } from '../auth/session/middleware';

// 댓글 생성을 위한 POST 요청 처리
export async function POST(request) {
    console.log('POST /api/comment - Started');
    try {
        // 사용자 인증 확인
        const user = await validateSession(request);
        
        if (!user?.nickname) {
            console.log(user);
            return NextResponse.json({ 
                success: false,
                message: '로그인이 필요합니다' 
            }, { status: 401 });
        }

        // 요청 본문에서 필요한 데이터 추출 및 유효성 검사
        const body = await request.json();
        console.log('Request body:', body);
        const { text, postId, parentId } = body;

        // 댓글 내용이 비어있는지 확인
        if (!text?.trim()) {
            console.log('Empty comment text');
            return NextResponse.json({ 
                success: false,
                message: '댓글 내용을 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        console.log('Connected to database');
        
        // 게시글 존재 여부 확인
        try {
            console.log('Checking post existence:', postId);
            const post = await db.collection('posts').findOne({ 
                _id: new ObjectId(postId) 
            });
            console.log('Post found:', !!post);

            if (!post) {
                return NextResponse.json({ 
                    success: false,
                    message: '게시글을 찾을 수 없습니다' 
                }, { status: 404 });
            }
        } catch (error) {
            console.error('Post lookup error:', error);
            return NextResponse.json({ 
                success: false,
                message: '잘못된 게시글 ID입니다' 
            }, { status: 400 });
        }

        // 답글인 경우 부모 댓글 확인
        if (parentId) {
            try {
                const parentComment = await db.collection('comments').findOne({ 
                    _id: new ObjectId(parentId) 
                });
                if (!parentComment) {
                    return NextResponse.json({ 
                        success: false,
                        message: '원본 댓글을 찾을 수 없습니다' 
                    }, { status: 404 });
                }
            } catch (error) {
                return NextResponse.json({ 
                    success: false,
                    message: '잘못된 댓글 ID입니다' 
                }, { status: 400 });
            }
        }

        // 새 댓글 객체 생성
        const comment = {
            text: text.trim(),
            postId: postId,
            parentId: parentId || null,  // 최상위 댓글은 null
            author: {
                username: user.username,
                nickname: user.nickname
            },
            createdAt: new Date()
        };

        // 댓글을 데이터베이스에 저장
        const result = await db.collection('comments').insertOne(comment);

        return NextResponse.json({ 
            success: true,
            message: '댓글이 작성되었습니다',
            comment: { ...comment, _id: result.insertedId }
        });

    } catch (error) {
        console.error('POST comment error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다',
            error: error.toString()
        }, { status: 500 });
    }
}

// 댓글 조회를 위한 GET 요청 처리
export async function GET(request) {
    console.log('GET /api/comment - Started');
    
    // URL에서 postId 파라미터 추출
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');
    console.log('Requested postId:', postId);

    // postId 유효성 검사
    if (!postId) {
        console.log('No postId provided');
        return NextResponse.json({ 
            success: false,
            message: '게시글 ID가 필요합니다' 
        }, { status: 400 });
    }

    try {
        // 데이터베이스 연결 및 댓글 조회
        const db = (await connectDB).db('forum');
        console.log('Database connected');

        // 게시글에 해당하는 댓글들을 시간순으로 조회
        const comments = await db.collection('comments')
            .find({ postId })
            .sort({ createdAt: 1 })
            .toArray();
        
        console.log(`Found ${comments.length} comments`);
        console.log('Comments:', comments);

        return NextResponse.json({ 
            success: true,
            comments 
        });
    } catch (error) {
        console.error('GET comments error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다',
            error: error.toString()
        }, { status: 500 });
    }
}
