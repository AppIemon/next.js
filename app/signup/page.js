'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar';

export default function SignUp() {
    // 회원가입 폼 상태 관리
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const router = useRouter();

    // 회원가입 폼 제출 처리
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // API 요청
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password, nickname }),
                headers: { 'Content-Type': 'application/json' },
            });
            
            // 응답 처리
            if (res.ok) {
                alert('회원가입 성공!');
                router.push('/login');
            } else {
                const data = await res.json();
                alert(data.message);
            }
        } catch (error) {
            alert('회원가입 중 오류가 발생했습니다');
        }
    };

    // 회원가입 폼 렌더링
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} className="auth-form">
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
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
