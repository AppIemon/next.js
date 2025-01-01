'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/users');
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error('사용자 목록 로딩 실패:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="users-container">
                <h2>사용자 목록</h2>
                <div className="users-grid">
                    {users.map(user => (
                        <div 
                            key={user.username} 
                            className="user-card"
                            onClick={() => router.push(`/user/${user.username}`)}
                        >
                            <div className="user-image">
                                {user.profileImage ? (
                                    <img 
                                        src={`data:image/jpeg;base64,${user.profileImage}`}
                                        alt={user.nickname}
                                    />
                                ) : (
                                    <div className="default-profile">
                                        {user.nickname[0]}
                                    </div>
                                )}
                            </div>
                            <div className="user-info">
                                <h3>{user.nickname}</h3>
                                <p>{user.statusMessage || '상태 메시지가 없습니다'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
