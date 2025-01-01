import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    // 보호된 경로 설정
    const isProtected = [
        '/write',
        '/edit',
    ].some(prefix => path.startsWith(prefix));

    if (isProtected) {
        const token = await getToken({ 
            req: request,
            secret: process.env.NEXTAUTH_SECRET
        });

        if (!token) {
            const url = new URL('/login', request.url);
            url.searchParams.set('callbackUrl', path);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/write/:path*', '/edit/:path*']
};
