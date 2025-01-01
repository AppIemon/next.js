export function getAuthToken(authHeader) {
    if (!authHeader) return null;
    
    if (authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }
    return authHeader;
}

export async function validateAuth(request) {
    const authHeader = request.headers.get('Authorization');
    const token = getAuthToken(authHeader);

    if (!token) {
        return { isValid: false, message: '로그인이 필요합니다' };
    }

    try {
        const decoded = decodeURIComponent(escape(atob(token)));
        const userData = JSON.parse(decoded);

        if (userData.expires < Date.now()) {
            return { isValid: false, message: '세션이 만료되었습니다' };
        }

        return { isValid: true, user: userData };
    } catch (error) {
        console.error('Auth validation error:', error);
        return { isValid: false, message: '유효하지 않은 인증 정보입니다' };
    }
}