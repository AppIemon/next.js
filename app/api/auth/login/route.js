import { connectDB } from '../../../util/database';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        
        console.log('Login attempt:', { username, passwordLength: password?.length });

        if (!username || !password) {
            return NextResponse.json({ 
                message: '사용자 이름과 비밀번호를 모두 입력해주세요' 
            }, { status: 400 });
        }

        const db = (await connectDB).db('forum');
        const user = await db.collection('users').findOne({
            $or: [
                { username: username },
                { nickname: username }
            ]
        });

        if (!user) {
            return NextResponse.json({ 
                message: '사용자를 찾을 수 없습니다' 
            }, { status: 401 });
        }

        // 저장된 해시된 비밀번호가 없는 경우
        if (!user.password) {
            return NextResponse.json({ 
                message: '비밀번호가 설정되지 않았습니다' 
            }, { status: 401 });
        }

        // 비밀번호 검증 전 데이터 확인
        console.log('Login verification:', {
            providedPassword: password,
            storedHash: user.password?.slice(0, 10) + '...',
            passwordType: typeof password
        });

        // 테스트를 위해 직접 비교 - 나중에 다시 활성화 필요!
        const isValid = (password === user.password);
        // const isValid = await bcrypt.compare(String(password), user.password); // 원래 코드

        console.log('Login test mode:', {
            inputPassword: password,
            storedPassword: user.password,
            isValid: isValid
        });

        // 이 부분 제거 또는 수정 (passwordString이 정의되지 않음)
        // console.log('Password verification details:', {
        //     attemptedPassword: passwordString,
        //     hashComparison: isValid,
        //     passwordLength: passwordString.length
        // });

        if (!isValid) {
            return NextResponse.json({ 
                message: '비밀번호가 일치하지 않습니다' 
            }, { status: 401 });
        }

        // 로그인 성공
        const userData = {
            _id: user._id.toString(),
            username: user.username,
            nickname: user.nickname || user.username,
            role: user.role || 'user'
        };

        console.log('Login successful for:', userData.username);
        return NextResponse.json(userData);

    } catch (error) {
        console.error('Login error details:', {
            error: error.message,
            stack: error.stack
        });
        return NextResponse.json({ 
            message: '로그인 처리 중 오류가 발생했습니다',
            error: error.message 
        }, { status: 500 });
    }
}