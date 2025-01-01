import { connectDB } from '../../../util/database';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const image = formData.get('image');
        const username = formData.get('username');

        if (!image || !username) {
            return NextResponse.json({ message: '이미지와 사용자 정보가 필요합니다' }, { status: 400 });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = buffer.toString('base64');

        const db = (await connectDB).db('forum');
        await db.collection('users').updateOne(
            { username },
            { $set: { profileImage: base64Image } }
        );

        return NextResponse.json({ message: '프로필 이미지가 업데이트되었습니다' });
    } catch (error) {
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}
