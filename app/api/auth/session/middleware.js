export async function validateSession(request) {
    try {
        console.log('[Middleware] Request headers:', Object.fromEntries(request.headers));
        const authorization = request.headers.get('Authorization')?.replace('Bearer ', '');
        
        if (!authorization) {
            console.log('[Middleware] No authorization header found');
            return null;
        }

        console.log('[Middleware] Raw authorization:', authorization);
        
        try {
            const decodedString = atob(authorization);
            console.log('[Middleware] Decoded base64:', decodedString);
            
            const decodedURI = decodeURIComponent(decodedString);
            console.log('[Middleware] Decoded URI:', decodedURI);
            
            const decodedAuth = JSON.parse(decodedURI);
            console.log('[Middleware] Final parsed auth:', decodedAuth);

            if (!decodedAuth.username || !decodedAuth.nickname) {
                console.log('[Middleware] Missing required fields:', {
                    hasUsername: !!decodedAuth.username,
                    hasNickname: !!decodedAuth.nickname
                });
                return null;
            }

            return decodedAuth;
        } catch (error) {
            console.error('[Middleware] Parsing error:', {
                error: error.message,
                stack: error.stack
            });
            return null;
        }
    } catch (error) {
        console.error('[Middleware] Validation error:', {
            error: error.message,
            stack: error.stack
        });
        return null;
    }
}
