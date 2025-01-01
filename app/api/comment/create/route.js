import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { id, content, parentId, author } = await request.json();
        
        if (!content || !id) {
            return NextResponse.json({ 
                message: '필수 데이터가 누락되었습니다'
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        const comment = {
            content,
            postId: new ObjectId(id),
            author: {
                _id: author._id,
                nickname: author.nickname
            },
            createdAt: new Date(),
            parentId: parentId || null,
            isDeleted: false,
            replies: []
        };

        const result = await db.collection('comment').insertOne(comment);

        if (!result.acknowledged) {
            throw new Error('댓글 저장에 실패했습니다');
        }

        return NextResponse.json({ message: '댓글이 작성되었습니다' });
    } catch (error) {
        console.error('Comment creation error:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
