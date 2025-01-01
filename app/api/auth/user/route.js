import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const authorization = request.headers.get('Authorization');
        
        if (!authorization) {
            return NextResponse.json({ 
                isLoggedIn: false,
                message: '로그인이 필요합니다' 
            });
        }

        let userInfo;
        try {
            // Base64 디코딩 후 UTF-8 디코딩
            const decodedAuth = decodeURIComponent(escape(atob(authorization)));
            userInfo = JSON.parse(decodedAuth);
        } catch (error) {
            console.error('Auth decode error:', error);
            return NextResponse.json({ 
                isLoggedIn: false,
                message: '잘못된 인증 정보' 
            });
        }

        // 만료 시간 검증
        if (userInfo.expires && userInfo.expires < Date.now()) {
            return NextResponse.json({ 
                isLoggedIn: false,
                message: '세션이 만료되었습니다' 
            });
        }

        return NextResponse.json({ 
            isLoggedIn: true,
            username: userInfo.username,
            nickname: userInfo.nickname
        });
    } catch (error) {
        console.error('Auth error:', error);
        return NextResponse.json({ 
            isLoggedIn: false,
            message: '서버 오류가 발생했습니다' 
        }, { status: 500 });
    }
}
