export default function UserProfileModal({ user, onClose }) {
    return (
        <div className="profile-modal-overlay" onClick={onClose}>
            <div className="profile-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="profile-info">
                    {user.profileImage && (
                        <div className="profile-image-container">
                            <img 
                                src={user.profileImage} 
                                alt={`${user.nickname}의 프로필`}
                                className="profile-image"
                            />
                        </div>
                    )}
                    <h3>{user.nickname}</h3>
                    <p className="status-message">{user.statusMessage || '상태 메시지가 없습니다.'}</p>
                </div>
            </div>
        </div>
    );
}
