'use client'

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileMenu({ user, onClose }) {
    const [statusMessage, setStatusMessage] = useState(user?.statusMessage || '');
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const menuRef = useRef();
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

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
                setIsEditing(false);
                onClose();
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
                    setProfileImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        } catch (error) {
            alert('이미지 업로드 실패');
        }
    };

    const handleLogout = () => {
        fetch('/api/auth/logout', { method: 'POST' })
            .then(() => {
                localStorage.removeItem('user');
                router.push('/login');
                router.refresh();
            })
            .catch(error => {
                console.error('로그아웃 실패:', error);
            });
    };

    const handleViewProfile = () => {
        router.push(`/user/${user.username}`);
        onClose();
    };

    return (
        <div className="profile-menu" ref={menuRef}>
            <div className="profile-header">
                <div className="profile-image-container">
                    {profileImage || user.profileImage ? (
                        <img 
                            src={profileImage || `data:image/jpeg;base64,${user.profileImage}`}
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
                <h3 className="profile-title">{user.nickname}님의 프로필</h3>
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
                            <button 
                                className="save-btn"
                                onClick={handleStatusUpdate}
                            >
                                저장
                            </button>
                            <button 
                                className="cancel-btn"
                                onClick={() => setIsEditing(false)}
                            >
                                취소
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="status-display">
                        <p className="status-text">
                            {statusMessage || '상태 메시지가 없습니다'}
                        </p>
                        <button 
                            className="edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            수정
                        </button>
                    </div>
                )}
                <button 
                    className="profile-view-btn"
                    onClick={handleViewProfile}
                >
                    프로필 보기
                </button>
            </div>
            <div className="profile-footer">
                <button 
                    onClick={handleLogout} 
                    className="logout-btn"
                >
                    로그아웃
                </button>
            </div>
        </div>
    );
}
