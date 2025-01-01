import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const db = (await connectDB).db('forum');
        const postId = request.nextUrl.searchParams.get('postId');
        
        console.log('API: Fetching comments for postId:', postId); // 디버깅 1

        if (!postId) {
            console.error('API: Missing postId parameter');
            return new Response(JSON.stringify({ error: 'Missing postId' }), {
                status: 400
            });
        }

        const comments = await db.collection('comment')
            .find({ postId: new ObjectId(postId) })
            .toArray();

        console.log('API: Found comments:', comments.length); // 디버깅 2

        // 댓글 데이터 유효성 검사 및 변환
        const processedComments = comments.map(comment => ({
            ...comment,
            _id: comment._id.toString(),
            postId: comment.postId.toString(),
            author: comment.author || null,
            content: comment.content || '',
            createdAt: comment.createdAt || new Date(),
            replies: (comment.replies || []).map(reply => ({
                ...reply,
                _id: reply._id.toString(),
                author: reply.author || null
            }))
        }));

        console.log('API: Processed comments:', processedComments.length); // 디버깅 3

        return new Response(JSON.stringify(processedComments), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error('API Error:', error); // 디버깅 4
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500
        });
    }
}
