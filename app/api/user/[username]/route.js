import { connectDB } from '../../../util/database.js';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const db = (await connectDB).db('forum');
        const user = await db.collection('users').findOne(
            { username: params.username },
            { projection: { password: 0 } }
        );

        if (!user) {
            return NextResponse.json(
                { message: '사용자를 찾을 수 없습니다' }, 
                { status: 404 }
            );
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json(
            { message: '서버 오류가 발생했습니다' }, 
            { status: 500 }
        );
    }
}
