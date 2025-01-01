import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { postId } = await request.json();
        const db = (await connectDB).db('forum');
        
        await db.collection('posts').updateOne(
            { _id: new ObjectId(postId) },
            { $inc: { views: 1 } }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('View update error:', error);
        return NextResponse.json(
            { message: '조회수 업데이트 실패' },
            { status: 500 }
        );
    }
}
