'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        if (!userInfo) {
            router.replace('/login');
            return;
        }
        const userData = JSON.parse(userInfo);
        setUser(userData);
        setStatusMessage(userData.statusMessage || '');
    }, []);

    const handleStatusUpdate = async () => {
        try {
            const res = await fetch('/api/user/status', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: user.username,
                    statusMessage 
                })
            });

            if (res.ok) {
                const updatedUser = { ...user, statusMessage };
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setUser(updatedUser);
                setIsEditing(false);
            } else {
                const data = await res.json();
                alert(data.message);
            }
        } catch (error) {
            alert('상태 메시지 업데이트 실패');
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);
        formData.append('username', user.username);

        try {
            const res = await fetch('/api/user/profile-image', {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const updatedUser = { 
                        ...user, 
                        profileImage: reader.result.split(',')[1] 
                    };
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    setUser(updatedUser);
                };
                reader.readAsDataURL(file);
            }
        } catch (error) {
            alert('이미지 업로드 실패');
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-image-container">
                        {user.profileImage ? (
                            <img 
                                src={`data:image/jpeg;base64,${user.profileImage}`}
                                alt={user.nickname}
                                className="profile-image"
                            />
                        ) : (
                            <div className="default-profile">{user.nickname[0]}</div>
                        )}
                        <label className="image-upload-label">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            사진 변경
                        </label>
                    </div>
                    <h2>{user.nickname}님의 프로필</h2>
                </div>
                <div className="profile-content">
                    {isEditing ? (
                        <div className="status-edit">
                            <input
                                type="text"
                                value={statusMessage}
                                onChange={(e) => setStatusMessage(e.target.value)}
                                placeholder="상태 메시지를 입력하세요"
                                maxLength={50}
                            />
                            <div className="status-actions">
                                <button onClick={handleStatusUpdate} className="save-btn">
                                    저장
                                </button>
                                <button onClick={() => setIsEditing(false)} className="cancel-btn">
                                    취소
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="status-display">
                            <p className="status-text">
                                {statusMessage || '상태 메시지가 없습니다'}
                            </p>
                            <button onClick={() => setIsEditing(true)} className="edit-btn">
                                수정
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
