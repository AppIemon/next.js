import { connectDB } from '@/util/database';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const db = (await connectDB).db('forum');
        const files = await db.collection('files')
            .find({ postId: params.postId })
            .toArray();

        return NextResponse.json(files);
    } catch (error) {
        return NextResponse.json(
            { error: "파일 목록을 가져오는 중 오류가 발생했습니다." }, 
            { status: 500 }
        );
    }
}
