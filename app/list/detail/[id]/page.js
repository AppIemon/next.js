'use client'

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../../../navbar';
import Comment from './Comment';

const API_BASE = '/api/posts';  // API 기본 경로 상수 추가

export default function Detail() {
    const { id } = useParams(); // URL에서 게시글 ID를 가져옵니다.
    const [post, setPost] = useState(null); // 게시글 데이터를 저장할 상태 변수입니다.
    const [user, setUser] = useState(null); // 사용자 정보를 저장할 상태 변수입니다.
    const [likedBy, setLikedBy] = useState([]); // 좋아요한 사용자 목록을 저장할 상태 변수입니다.
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 저장할 상태 변수입니다.
    const [error, setError] = useState(null); // 에러 메시지를 저장할 상태 변수입니다.
    const router = useRouter(); // 라우터 객체를 가져옵니다.

    // 에러 로깅 유틸리티 함수 개선
    const logError = (type, error, details = {}) => {
        if (process.env.NODE_ENV === 'development') {
            const errorInfo = {
                type,
                message: error?.message || '알 수 없는 오류',
                name: error?.name || 'Error',
                stack: error?.stack,
                details: {
                    ...details,
                    url: window?.location?.href,
                    timestamp: new Date().toISOString(),
                    postId: id
                }
            };

            // 개발 환경에서만 전체 에러 정보 출력
            console.group(`[Error: ${type}]`);
            console.error('Error Details:', errorInfo);
            console.error('Original Error:', error);
            console.groupEnd();

            return errorInfo;
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            const authToken = localStorage.getItem('authToken'); // 로컬 스토리지에서 인증 토큰을 가져옵니다.
            if (authToken) {
                try {
                    const res = await fetch('/api/auth/validate', {
                        headers: {
                            'Authorization': `Bearer ${authToken}` // 인증 토큰을 헤더에 포함하여 요청을 보냅니다.
                        }
                    });
                    const data = await res.json();
                    if (data.isValid) {
                        setUser(data.user); // 유효한 토큰이면 사용자 정보를 설정합니다.
                    } else {
                        localStorage.removeItem('authToken'); // 유효하지 않은 토큰이면 토큰을 제거합니다.
                        setUser(null); // 사용자 정보를 초기화합니다.
                    }
                } catch (error) {
                    logError('Auth', error);
                    localStorage.removeItem('authToken'); // 에러가 발생하면 토큰을 제거합니다.
                    setUser(null); // 사용자 정보를 초기화합니다.
                }
            }
        };

        checkAuth(); // 인증 확인 함수를 호출합니다.
        if (!id) return; // ID가 없으면 함수를 종료합니다.

        const loadData = async () => {
            setIsLoading(true); // 로딩 상태를 true로 설정합니다.
            setError(null); // 에러 상태를 초기화합니다.
            try {
                await Promise.all([
                    fetchPost(), // 게시글 데이터를 가져오는 함수입니다.
                    updateViews() // 조회수를 업데이트하는 함수입니다.
                ]);
                const userInfo = localStorage.getItem('user'); // 로컬 스토리지에서 사용자 정보를 가져옵니다.
                if (userInfo) setUser(JSON.parse(userInfo)); // 사용자 정보를 설정합니다.
            } catch (error) {
                logError('LoadData', error);
                setError('게시글을 불러오는데 실패했습니다.'); // 에러 메시지를 설정합니다.
            } finally {
                setIsLoading(false); // 로딩 상태를 false로 설정합니다.
            }
        };

        loadData(); // 데이터 로딩 함수를 호출합니다.
    }, [id]); // ID가 변경될 때마다 useEffect 훅이 실행됩니다.

    const fetchPost = async () => {
        try {
            const res = await fetch(`/api/posts/${id}`);
            // if (!res.ok) {
            //     const errorData = await res.json();
            //     throw new Error(errorData.message || '게시글을 불러오는데 실패했습니다.');
            // }
            const data = await res.json();
            setPost(data);
            setLikedBy(data.likedBy || []);
        } catch (error) {
            logError('FetchPost', error);
            setError(error.message || '게시글을 불러오는데 실패했습니다.');
        }
    };

    const updateViews = async () => {
        try {
            const res = await fetch(`${API_BASE}/${id}/view`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ postId: id })
            });

            if (res.ok) {
                setPost(prevPost => ({
                    ...prevPost,
                    views: prevPost.views + 1
                }));
            } else {
                const errorData = await res.json();
                logError('Views', new Error(errorData.message || '조회수 업데이트 실패'));
            }
        } catch (error) {
            logError('Views', error);
        }
    };

    const handleLike = async () => {
        try {
            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                alert('로그인이 필요합니다');
                router.push('/login');
                return;
            }

            const parsedUser = JSON.parse(userInfo);
            const encodedAuth = btoa(unescape(encodeURIComponent(JSON.stringify(parsedUser))));

            const res = await fetch(`/api/posts/${id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': encodedAuth
                }
            });

            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    setLikedBy(data.updatedLikedBy);
                }
            } else {
                const data = await res.json();
                alert(data.message);
            }
        } catch (error) {
            logError('Like', error);
            alert('좋아요 처리 중 오류가 발생했습니다.');
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            const authToken = localStorage.getItem('authToken');
            if (!authToken) {
                alert('로그인이 필요합니다');
                router.push('/login');
                return;
            }

            const res = await fetch(`${API_BASE}/${id}`, {  // URL 경로 수정
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (res.ok) {
                router.push('/list');
            } else {
                const data = await res.json();
                alert(data.message || '삭제 중 오류가 발생했습니다');
            }
        } catch (error) {
            logError('Delete', error);
            alert('삭제 중 오류가 발생했습니다');
        }
    };

    if (error) return <div className="error-message">{error}</div>;
    if (isLoading) return <div className="loading">로딩중...</div>;
    if (!post) return <div className="not-found">게시글을 찾을 수 없습니다.</div>;

    return (
        <div>
            <Navbar />
            <div className="detail-container">
                {error && (
                    <div className="error-banner" role="alert">
                        <p>{error}</p>
                        <button onClick={() => window.location.reload()}>
                            다시 시도
                        </button>
                    </div>
                )}
                <h1>{post.title}</h1>
                <p>작성자: {post.author}</p>
                <div className="post-stats">
                    <span>👁️ {post.views || 0}</span>
                    <button 
                        onClick={handleLike}
                        className={`like-button ${user && likedBy.includes(user.nickname) ? 'liked' : ''}`}
                    >
                        ❤️ {likedBy.length}
                    </button>
                </div>
                <p>{post.content}</p>
                {post.image && (
                    <img 
                        src={`data:image/jpeg;base64,${post.image}`}
                        alt="게시글 이미지"
                        style={{ maxWidth: '100%' }}
                    />
                )}
                {user && user.nickname === post.author && (
                    <div className="post-actions">
                        <button onClick={() => router.push(`/edit/${id}`)}>수정</button>
                        <button onClick={handleDelete}>삭제</button>
                    </div>
                )}
                <Comment postId={id} postAuthor={post.author} />
            </div>
        </div>
    );
}