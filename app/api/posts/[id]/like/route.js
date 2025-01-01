import { connectDB } from '../../../../util/database.js';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { validateSession } from '../../../auth/session/middleware.js';

export async function POST(request, { params }) {
    try {
        const user = await validateSession(request);
        console.log('[Like] User:', user);

        if (!user?.username) {
            return NextResponse.json({ 
                success: false,
                message: '로그인이 필요합니다' 
            }, { status: 401 });
        }

        const db = (await connectDB).db('forum');
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(params.id) 
        });

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        const likedBy = post.likedBy || [];
        const userIndex = likedBy.indexOf(user.username);

        if (userIndex === -1) {
            likedBy.push(user.username);
        } else {
            likedBy.splice(userIndex, 1);
        }

        await db.collection('posts').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { likedBy } }
        );

        return NextResponse.json({ 
            success: true,
            updatedLikedBy: likedBy,
            message: userIndex === -1 ? '좋아요!' : '좋아요 취소'
        });

    } catch (error) {
        console.error('Like error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const user = await validateSession(request);
        if (!user?.username) {
            return NextResponse.json({ 
                success: true,
                liked: false 
            });
        }

        const db = (await connectDB).db('forum');
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(params.id) 
        });

        if (!post) {
            return NextResponse.json({ 
                success: false,
                message: '게시글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        const liked = post.likedBy?.includes(user.username) || false;

        return NextResponse.json({ 
            success: true,
            liked 
        });
    } catch (error) {
        console.error('Get like status error:', error);
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}
