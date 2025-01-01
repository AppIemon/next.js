import { connectDB } from '../../../util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { validateAuth } from '../../auth/middleware';

export async function PUT(request, { params }) {
    try {
        // 사용자 인증 확인
        const validation = await validateAuth(request);
        if (!validation.isValid) {
            return NextResponse.json({ 
                success: false,
                message: '인증이 필요합니다' 
            }, { status: 401 });
        }

        const { title, content } = await request.json();

        // 입력값 검증
        if (!title?.trim() || !content?.trim()) {
            return NextResponse.json({ 
                success: false,
                message: '제목과 내용을 모두 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        
        // 게시글 존재 여부와 작성자 확인
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(params.id) 
        });

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        // 작성자 본인인지 확인
        if (post.author !== validation.user.nickname) {
            return NextResponse.json({ 
                success: false,
                message: '수정 권한이 없습니다' 
            }, { status: 403 });
        }

        // 게시글 업데이트
        const result = await db.collection('posts').updateOne(
            { _id: new ObjectId(params.id) },
            { 
                $set: {
                    title: title.trim(),
                    content: content.trim(),
                    updatedAt: new Date()
                }
            }
        );

        // 파일 정보는 그대로 유지됨 (files 컬렉션은 변경하지 않음)
        
        if (result.matchedCount === 0) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        return NextResponse.json({ 
            success: true,
            message: '게시글이 수정되었습니다' 
        });

    } catch (error) {
        console.error('Update post error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const user = await validateSession(request);
        if (!user?.username) {
            return NextResponse.json({ 
                success: false,
                message: '로그인이 필요합니다' 
            }, { status: 401 });
        }

        if (!params.id) {
            return NextResponse.json({ 
                success: false,
                message: '게시글 ID가 필요합니다' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        let post;
        try {
            post = await db.collection('posts').findOne({ 
                _id: new ObjectId(params.id) 
            });
        } catch (error) {
            return NextResponse.json({ 
                success: false,
                message: '잘못된 게시글 ID입니다' 
            }, { status: 400 });
        }

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        if (post.author?.username !== user.username) {
            return NextResponse.json({ 
                success: false,
                message: '삭제 권한이 없습니다' 
            }, { status: 403 });
        }

        // 게시글 삭제 전에 관련 파일 정보 삭제
        await db.collection('files').deleteMany({ postId: params.id });

        await db.collection('posts').deleteOne({ _id: new ObjectId(params.id) });
        await db.collection('comments').deleteMany({ postId: params.id });

        return NextResponse.json({ 
            success: true,
            message: '게시글이 삭제되었습니다' 
        });
    } catch (error) {
        console.error('Delete post error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const db = (await connectDB).db('forum');
        const post = await db.collection('posts').findOne({ _id: new ObjectId(params.id) });

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error('Fetch post error:', {
            error: error.message,
            postId: params.id,
            requestMethod: 'GET',
            stack: error.stack
        });

        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다',
            debug: {
                errorMessage: error.message,
                postId: params.id,
                endpoint: '/api/posts/[id]',
                method: 'GET',
                timestamp: new Date().toISOString()
            }
        }, { status: 500 });
    }
}

export async function POST(request, { params }) {
    try {
        const db = (await connectDB).db('forum');
        const result = await db.collection('posts').updateOne(
            { _id: new ObjectId(params.id) },
            { $inc: { views: 1 } }
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ 
                success: false,
                message: '조회수 업데이트 실패' 
            }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true,
            message: '조회수가 업데이트되었습니다' 
        });
    } catch (error) {
        console.error('Update views error:', {
            error: error.message,
            postId: params.id,
            requestMethod: 'POST',
            stack: error.stack
        });

        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다',
            debug: {
                errorMessage: error.message,
                postId: params.id,
                endpoint: '/api/posts/[id]/view',
                method: 'POST',
                timestamp: new Date().toISOString()
            }
        }, { status: 500 });
    }
}
