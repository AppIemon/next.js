import { connectDB } from '../../../util/database';

import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { validateAuth } from '../../auth/middleware';

export async function PUT(request, { params }) {
    try {
        const validation = await validateAuth(request);
        if (!validation.isValid) {
            return NextResponse.json({ 
                success: false,
                message: validation.message 
            }, { status: 401 });
        }

        const { text } = await request.json();
        if (!text?.trim()) {
            return NextResponse.json({ 
                success: false,
                message: '댓글 내용을 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        const comment = await db.collection('comments').findOne({ 
            _id: new ObjectId(params.id) 
        });

        if (!comment) {
            return NextResponse.json({ 
                success: false,
                message: '댓글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        if (comment.author?.username !== validation.user.username) {
            return NextResponse.json({ 
                success: false,
                message: '수정 권한이 없습니다' 
            }, { status: 403 });
        }

        await db.collection('comments').updateOne(
            { _id: new ObjectId(params.id) },
            { 
                $set: {
                    text: text.trim(),
                    updatedAt: new Date(),
                    isEdited: true
                }
            }
        );

        return NextResponse.json({ 
            success: true,
            message: '댓글이 수정되었습니다' 
        });
    } catch (error) {
        console.error('Update comment error:', {
            error: error.message,
            commentId: params.id,
            requestMethod: 'PUT',
            validation: validation || 'Not available',
            stack: error.stack
        });
        
        return NextResponse.json({ 
            success: false,
            message: '서버 오류가 발생했습니다',
            debug: {
                errorMessage: error.message,
                commentId: params.id,
                endpoint: '/api/comment/[id]',
                method: 'PUT',
                timestamp: new Date().toISOString()
            }
        }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const validation = await validateAuth(request);
        if (!validation.isValid) {
            return NextResponse.json({ 
                success: false,
                message: validation.message 
            }, { status: 401 });
        }

        const db = (await connectDB).db('forum');
        const comment = await db.collection('comments').findOne({ 
            _id: new ObjectId(params.id) 
        });

        if (!comment) {
            return NextResponse.json({ 
                success: false,
                message: '댓글을 찾을 수 없습니다' 
            }, { status: 404 });
        }

        if (comment.author?.username !== validation.user.username) {
            return NextResponse.json({ 
                success: false,
                message: '삭제 권한이 없습니다' 
            }, { status: 403 });
        }

        // 대상 댓글이 부모 댓글인 경우 모든 답글도 함께 삭제
        if (!comment.parentId) {
            await db.collection('comments').deleteMany({
                $or: [
                    { _id: new ObjectId(params.id) },
                    { parentId: params.id }
                ]
            });
        } else {
            // 답글인 경우 해당 답글만 삭제
            await db.collection('comments').deleteOne({
                _id: new ObjectId(params.id)
            });
        }

        return NextResponse.json({ 
            success: true,
            message: '댓글이 삭제되었습니다' 
        });
    } catch (error) {
        console.error('Delete comment error:', {
            error: error.message,
            commentId: params.id,
            requestMethod: 'DELETE',
            validation: validation || 'Not available',
            stack: error.stack
        });

        if (error.message.includes('ObjectId')) {
            return NextResponse.json({ 
                success: false,
                message: '잘못된 댓글 ID입니다',
                debug: {
                    errorMessage: error.message,
                    commentId: params.id,
                    endpoint: '/api/comment/[id]',
                    method: 'DELETE',
                    timestamp: new Date().toISOString()
                }
            }, { status: 400 });
        }

        return NextResponse.json({ 
            success: false,
            message: '댓글 삭제 중 오류가 발생했습니다',
            debug: {
                errorMessage: error.message,
                commentId: params.id,
                endpoint: '/api/comment/[id]',
                method: 'DELETE',
                timestamp: new Date().toISOString()
            }
        }, { status: 500 });
    }
}
