'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        router.push('/login');
    };

    const handleProfileClick = (username) => {
        router.push(`/user/${username}`);
        setShowProfileMenu(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link href="/" className="nav-link">홈</Link>
                <Link href="/list" className="nav-link">게시판</Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                        <Link href="/write" className="nav-link write-btn">글쓰기</Link>
                        <Link href="/profile" className="nav-link">프로필</Link>
                        <button onClick={handleLogout} className="nav-link">로그아웃</button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="nav-link">로그인</Link>
                        <Link href="/register" className="nav-link">회원가입</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
