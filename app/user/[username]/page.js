'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../navbar';

export default function UserProfile() {
    const [userInfo, setUserInfo] = useState(null);
    const { username } = useParams();

    useEffect(() => {
        fetchUserInfo();
    }, [username]);

    const fetchUserInfo = async () => {
        try {
            const res = await fetch(`/api/user/${username}`);
            if (res.ok) {
                const data = await res.json();
                setUserInfo(data);
            }
        } catch (error) {
            console.error('사용자 정보 로딩 실패');
        }
    };

    if (!userInfo) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="user-profile-container">
                <h2>{userInfo.nickname}님의 프로필</h2>
                <div className="user-status-message">
                    <p>{userInfo.statusMessage || '상태 메시지가 없습니다'}</p>
                </div>
            </div>
        </div>
    );
}
