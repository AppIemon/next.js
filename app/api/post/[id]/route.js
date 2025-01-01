import { connectDB } from '../../../util/database';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request, { params }) {
    try {
        const { id } = await params;  // await params to fix the error
        
        const db = (await connectDB).db('forum');
        const post = await db.collection('posts').findOne({
            _id: new ObjectId(id)
        });

        if (!post) {
            return NextResponse.json(
                { message: '게시글을 찾을 수 없습니다.' }, 
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error('Get post error:', error);
        return NextResponse.json(
            { message: '게시글을 불러오는데 실패했습니다.' }, 
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const db = (await connectDB).db('forum');
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(params.id) 
        });

        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo || userInfo.nickname !== post.author) {
            return NextResponse.json({ message: '삭제 권한이 없습니다' }, { status: 403 });
        }

        await db.collection('posts').deleteOne({ _id: new ObjectId(params.id) });
        await db.collection('comments').deleteMany({ postId: params.id });

        return NextResponse.json({ message: '삭제 완료' });
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { title, content } = await request.json();
        const db = (await connectDB).db('forum');
        
        const post = await db.collection('posts').findOne({ 
            _id: new ObjectId(params.id) 
        });

        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo || userInfo.nickname !== post.author) {
            return NextResponse.json({ message: '수정 권한이 없습니다' }, { status: 403 });
        }

        await db.collection('posts').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { title, content, updatedAt: new Date() } }
        );

        return NextResponse.json({ message: '수정 완료' });
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}
