import { connectDB } from '../../../util/database';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const { username, password, nickname } = await request.json();

        if (!username || !password || !nickname) {
            return NextResponse.json({ 
                message: '모든 필드를 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        
        // 기존 사용자 확인
        const existingUser = await db.collection('users').findOne({ 
            $or: [
                { username: username },
                { nickname: nickname }
            ]
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return NextResponse.json({ message: '이미 사용 중인 아이디입니다' }, { status: 400 });
            }
            if (existingUser.nickname === nickname) {
                return NextResponse.json({ message: '이미 사용 중인 닉네임입니다' }, { status: 400 });
            }
        }

        // 테스트를 위해 해시 비활성화 - 나중에 다시 활성화 필요!
        const hashedPassword = password; // 임시로 plain password 저장
        // const hashedPassword = await bcrypt.hash(String(password), 10); // 원래 코드

        console.log('Registration test mode:', {
            password: hashedPassword
        });

        // 사용자 생성
        const result = await db.collection('users').insertOne({
            username,
            password: hashedPassword,  // 해시된 비밀번호 저장
            nickname,
            createdAt: new Date(),
            statusMessage: '',
            profileImage: ''
        });

        return NextResponse.json({ 
            message: '회원가입이 완료되었습니다',
            userId: result.insertedId
        }, { status: 201 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ 
            message: '서버 오류가 발생했습니다',
            error: error.message 
        }, { status: 500 });
    }
}
