import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const db = (await connectDB).db('forum');
        const data = await request.json();

        if (!data.id || !data.title || !data.content) {
            return NextResponse.json({
                success: false,
                message: '필수 필드가 누락되었습니다'
            }, { status: 400 });
        }

        const objectId = new ObjectId(data.id);

        const updateData = {
            title: data.title,
            content: data.content,
            updatedAt: new Date().toISOString(),
        };

        // files 데이터가 있는 경우에만 업데이트
        if (data.files) {
            updateData.files = Array.isArray(data.files) ? data.files : [];
        }

        // MongoDB 데이터 업데이트
        const result = await db.collection('posts').updateOne(
            { _id: objectId },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({
                success: false,
                message: '게시글을 찾을 수 없습니다'
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: '게시글이 수정되었습니다'
        });

    } catch (error) {
        console.error('Edit error:', error);
        if (error.message.includes('ObjectId')) {
            return NextResponse.json({
                success: false,
                message: '잘못된 게시글 ID입니다'
            }, { status: 400 });
        }
        return NextResponse.json({
            success: false,
            message: '서버 에러가 발생했습니다'
        }, { status: 500 });
    }
}
