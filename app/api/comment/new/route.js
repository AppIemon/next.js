import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/nextauth/route";

export async function POST(request) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return NextResponse.json({ message: '로그인이 필요합니다' }, { status: 401 });
    }

    try {
        const { postId, content, parentId } = await request.json();

        if (!content || !postId) {
            return NextResponse.json({ message: '필수 정보가 누락되었습니다' }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        
        const comment = {
            postId: new ObjectId(postId),
            content: content,
            author: new ObjectId(session.user.id),
            createdAt: new Date(),
            parentId: parentId ? new ObjectId(parentId) : null
        };

        const result = await db.collection('comment').insertOne(comment);

        return NextResponse.json({ message: '댓글이 작성되었습니다', id: result.insertedId });
    } catch (error) {
        console.error('댓글 작성 오류:', error);
        return NextResponse.json({ message: '댓글 작성 중 오류가 발생했습니다' }, { status: 500 });
    }
}
