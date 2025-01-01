import { connectDB } from '../../../util/database.js';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password, nickname } = body;

        if (!username || !password || !nickname) {
            return NextResponse.json({ message: '모든 필드를 입력해주세요' }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        
        // 사용자 중복 체크
        const existingUser = await db.collection('users').findOne({ username });
        if (existingUser) {
            return NextResponse.json({ message: '이미 존재하는 사용자입니다' }, { status: 400 });
        }

        // 비밀번호 해시화 (saltRounds = 10)
        const hashedPassword = await bcrypt.hash(String(password), 10);
        console.log('Password hashing:', {
            originalLength: password?.length,
            hashedLength: hashedPassword?.length
        });

        // 새 사용자 생성
        await db.collection('users').insertOne({
            username,
            password: hashedPassword,  // 해시된 비밀번호 저장
            nickname,
            createdAt: new Date()
        });

        return NextResponse.json({ message: '회원가입 성공' }, { status: 200 });
    } catch (error) {
        console.error('Signup error:', error);
        if (error instanceof SyntaxError) {
            return NextResponse.json({ message: '잘못된 요청 형식입니다' }, { status: 400 });
        }
        return NextResponse.json({ message: '서버 오류가 발생했습니다' }, { status: 500 });
    }
}
