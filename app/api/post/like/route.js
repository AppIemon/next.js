import { connectDB } from '../../../util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    const username = cookies().get('user')?.value;
    if (!username) {
        return NextResponse.json({ message: '로그인이 필요합니다' }, { status: 401 });
    }

    try {
        const { postId } = await request.json();
        const db = (await connectDB).db('forum');

        // Find existing like
        const existingLike = await db.collection('likes').findOne({
            postId,
            username
        });

        if (existingLike) {
            // Unlike
            await db.collection('likes').deleteOne({ _id: existingLike._id });
            await db.collection('posts').updateOne(
                { _id: new ObjectId(postId) },
                { $inc: { likes: -1 } }
            );
            return NextResponse.json({ liked: false });
        } else {
            // Like
            await db.collection('likes').insertOne({
                postId,
                username,
                createdAt: new Date()
            });
            await db.collection('posts').updateOne(
                { _id: new ObjectId(postId) },
                { $inc: { likes: 1 } }
            );
            return NextResponse.json({ liked: true });
        }
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}

export async function GET(request) {
    const username = cookies().get('user')?.value;
    if (!username) {
        return NextResponse.json({ liked: false }, { status: 200 });
    }

    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');

    try {
        const db = (await connectDB).db('forum');
        const like = await db.collection('likes').findOne({
            postId,
            username
        });

        return NextResponse.json({ liked: !!like });
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}
