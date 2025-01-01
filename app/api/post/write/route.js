import { connectDB } from '../../../util/database.js';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const title = formData.get('title');
        const content = formData.get('content');
        const author = formData.get('author');
        const files = formData.getAll('files');

        const fileDataArray = await Promise.all(files.map(async file => {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            return {
                name: file.name,
                type: file.type,
                data: buffer.toString('base64'),
                size: file.size
            };
        }));

        const db = (await connectDB).db('forum');
        await db.collection('posts').insertOne({
            title,
            content,
            author,
            files: fileDataArray,
            createdAt: new Date()
        });

        return NextResponse.json({ message: '게시물이 작성되었습니다' });
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}
