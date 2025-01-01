import { connectDB } from '../../../util/database';
import { NextResponse } from 'next/server';

export async function PUT(request) {
    try {
        const { username, statusMessage } = await request.json();
        const db = (await connectDB).db('forum');

        await db.collection('users').updateOne(
            { username },
            { $set: { statusMessage } }
        );

        return NextResponse.json({ message: '상태 메시지가 업데이트되었습니다' });
    } catch (error) {
        return NextResponse.json(
            { message: '서버 오류가 발생했습니다' }, 
            { status: 500 }
        );
    }
}
