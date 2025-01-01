'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// AuthContext를 생성하고 export
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 로그인 상태 체크
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    setUser(userData);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                localStorage.removeItem('user');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (credentials) => {
        try {
            console.log('Attempting login...');
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
                cache: 'no-store'
            });

            const data = await res.json();
            
            if (!res.ok) {
                return { 
                    success: false, 
                    error: data.message || '로그인에 실패했습니다' 
                };
            }

            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Login successful');
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { 
                success: false, 
                error: '로그인 처리 중 오류가 발생했습니다' 
            };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = async (profileData) => {
        try {
            if (!user?._id) return false;

            const res = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user._id,
                    profileData
                })
            });

            if (res.ok) {
                const updatedUser = { ...user, ...profileData };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Profile update failed:', error);
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            login, 
            logout,
            updateProfile,
            isAuthenticated: !!user,
            isLoading: loading
        }}>
            {children}
        </AuthContext.Provider>
    );
}
