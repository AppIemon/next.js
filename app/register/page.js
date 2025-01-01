'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar';

export default function Register() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/session');
                const session = await res.json();
                
                if (session.user) {
                    router.replace('/list');
                    return;
                }
            } catch (error) {
                console.error('Session check error:', error);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const validateForm = () => {
        if (!username.trim() || !password.trim() || !nickname.trim()) {
            setError('모든 필드를 입력해주세요');
            return false;
        }
        if (username.length < 4 || username.length > 20) {
            setError('아이디는 4자 이상 20자 이하여야 합니다');
            return false;
        }
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
            setError('아이디는 영문자와 숫자만 사용 가능합니다');
            return false;
        }
        if (password.length < 6 || password.length > 20) {
            setError('비밀번호는 6자 이상 20자 이하여야 합니다');
            return false;
        }
        if (nickname.length < 2 || nickname.length > 10) {
            setError('닉네임은 2자 이상 10자 이하여야 합니다');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, nickname })
            });

            const data = await res.json();

            if (res.ok) {
                alert('회원가입이 완료되었습니다.');
                router.push('/login');
            } else {
                setError(data.message || '회원가입에 실패했습니다');
            }
        } catch (error) {
            setError('서버 오류가 발생했습니다');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} className="auth-form">
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '처리중...' : '회원가입'}
                </button>
            </form>
        </div>
    );
}
