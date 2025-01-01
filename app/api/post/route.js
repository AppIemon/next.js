import { connectDB } from '../../util/database.js';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { validateSession } from '../auth/session/middleware.js';

export async function POST(request) {
    try {
        const user = await validateSession(request);
        console.log('[POST] User:', user);

        if (!user?.username) {
            return NextResponse.json({ 
                success: false,
                message: '로그인이 필요합니다' 
            }, { status: 401 });
        }

        const { title, content, imageUrl } = await request.json();
        
        if (!title?.trim() || !content?.trim()) {
            return NextResponse.json({ 
                success: false,
                message: '제목과 내용을 모두 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        
        await db.collection('posts').insertOne({
            title: title.trim(),
            content: content.trim(),
            imageUrl,
            author: {
                username: user.username,
                nickname: user.nickname
            },
            createdAt: new Date(),
            likedBy: []
        });

        return NextResponse.json({ 
            success: true,
            message: '글 작성이 완료되었습니다' 
        });
    } catch (error) {
        console.error('Create post error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const db = (await connectDB).db('forum');
        const posts = await db.collection('posts')
            .find()
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ 
            success: true,
            posts 
        });
    } catch (error) {
        console.error('Get posts error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const user = await validateSession(request);
        if (!user?.username) {
            return NextResponse.json({ 
                success: false,
                message: '로그인이 필요합니다' 
            }, { status: 401 });
        }

        const { id, title, content } = await request.json();
        const db = (await connectDB).db('forum');
        
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(id) 
        });

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시물을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        if (post.author?.username !== user.username) {
            return NextResponse.json({ 
                success: false,
                message: '수정 권한이 없습니다' 
            }, { status: 403 });
        }

        await db.collection('posts').updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: { 
                    title, 
                    content, 
                    updatedAt: new Date() 
                } 
            }
        );

        return NextResponse.json({ 
            success: true,
            message: '수정이 완료되었습니다' 
        });
    } catch (error) {
        console.error('Update post error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}
