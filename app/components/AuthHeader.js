export function createAuthHeader(session) {
    if (!session?.user?.username) return null;
    const userInfo = {
        username: session.user.username,
        nickname: session.user.nickname,
        id: session.user.id
    };
    const userString = JSON.stringify(userInfo);
    return btoa(unescape(encodeURIComponent(userString)));
}

export function getAuthHeaders(session) {
    const authHeader = createAuthHeader(session);
    return authHeader ? {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
    } : {
        'Content-Type': 'application/json'
    };
}
