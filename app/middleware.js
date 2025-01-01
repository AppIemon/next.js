import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
    // 요청 URL 경로
    const path = request.nextUrl.pathname;

    // 보호된 경로 설정 (여기서는 '/write'와 '/edit' 경로)
    const isProtected = [
        '/write',
        '/edit',
    ].some(prefix => path.startsWith(prefix));

    // 경로가 보호된 경로인 경우
    if (isProtected) {
        // JWT 토큰을 가져옴
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET // 비밀키 설정
        });

        // 토큰이 없는 경우 로그인 페이지로 리다이렉트
        if (!token) {
            const url = new URL('/login', request.url);
            url.searchParams.set('callbackUrl', path); // 원래 경로를 'callbackUrl'로 설정
            return NextResponse.redirect(url); // 로그인 페이지로 리다이렉트
        }
    }

    // 인증된 경우, 요청을 계속 진행
    return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
    matcher: ['/write/:path*', '/edit/:path*'] // '/write'와 '/edit' 경로에만 미들웨어 적용
};