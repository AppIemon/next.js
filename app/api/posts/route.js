import { connectDB } from '../../util/database';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = (await connectDB).db('forum');
        const posts = await db.collection('posts')
            .find()
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ 
            posts: posts,
            success: true 
        });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return NextResponse.json({ 
            success: false, 
            message: '게시글을 불러오는데 실패했습니다' 
        }, { 
            status: 500 
        });
    }
}
