'use client'

import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            console.log('Submitting login form:', formData);  // 디버깅
            const result = await login(formData);
            
            if (result.success) {
                router.push('/');
                router.refresh();
            } else {
                setError(result.error || '로그인에 실패했습니다');
            }
        } catch (error) {
            setError('로그인 처리 중 오류가 발생했습니다');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>로그인</h2>
                {error && <div className="error-message">{error}</div>}
                <input 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="사용자 이름 또는 닉네임" 
                    required 
                />
                <input 
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호" 
                    required 
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}
