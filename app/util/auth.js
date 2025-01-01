export const getUserFromLocalStorage = () => {
    if (typeof window === 'undefined') return null;
    
    try {
        const userInfo = localStorage.getItem('user');
        if (!userInfo) return null;
        
        const userData = JSON.parse(userInfo);
        if (!userData || typeof userData !== 'object') {
            localStorage.removeItem('user');
            return null;
        }
        
        return userData;
    } catch (error) {
        console.error('Local storage parsing error:', error);
        localStorage.removeItem('user');
        return null;
    }
};

export const isValidUserData = (userData) => {
    return userData && 
           typeof userData === 'object' && 
           typeof userData.nickname === 'string' &&
           userData.nickname.length > 0;
};
