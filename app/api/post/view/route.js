import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const db = (await connectDB).db('forum');
        const data = await request.json();
        
        if (!data.postId) {
            return NextResponse.json({ message: '게시글 ID가 필요합니다' }, { status: 400 });
        }

        // 게시글 존재 여부 먼저 확인
        const post = await db.collection('posts').findOne(
            { _id: new ObjectId(data.postId) }
        );

        if (!post) {
            return NextResponse.json({ message: '게시글을 찾을 수 없습니다' }, { status: 404 });
        }

        // 조회수 업데이트
        const result = await db.collection('posts').updateOne(
            { _id: new ObjectId(data.postId) },
            { $set: { views: (post.views || 0) + 1 } }
        );

        return NextResponse.json({ 
            success: true,
            views: (post.views || 0) + 1
        });
    } catch (error) {
        console.error('View update error:', error);
        return NextResponse.json({ message: '조회수 업데이트 실패' }, { status: 500 });
    }
}
