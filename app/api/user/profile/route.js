import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// 프로필 정보 조회
export async function GET(request) {
    try {
        const userId = request.nextUrl.searchParams.get('userId');
        if (!userId) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        const user = await db.collection('users').findOne(
            { _id: new ObjectId(userId) },
            { projection: { password: 0 } }
        );

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// 프로필 정보 업데이트
export async function PUT(request) {
    try {
        const { userId, profileData } = await request.json();
        if (!userId || !profileData) {
            return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            { 
                $set: {
                    statusMessage: profileData.statusMessage,
                    profileImage: profileData.profileImage,
                    updatedAt: new Date()
                }
            }
        );

        if (!result.modifiedCount) {
            return NextResponse.json({ message: 'Update failed' }, { status: 400 });
        }

        return NextResponse.json({ message: 'Profile updated' });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
