'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../navbar';

export default function Edit() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (!id) return;
                const response = await fetch(`/api/post/${id}`);
                if (!response.ok) {
                    throw new Error('게시물을 가져오는데 실패했습니다');
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('데이터가 없습니다');
                }
                setTitle(data.title);
                setContent(data.content);
            } catch (error) {
                alert(error.message);
                router.push('/list');
            }
        };
        fetchPost();
    }, [id, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 입력해주세요.');
            return;
        }

        try {
            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                alert('로그인이 필요합니다');
                return;
            }

            let userData;
            try {
                userData = JSON.parse(userInfo);
            } catch (error) {
                console.error('사용자 정보 파싱 오류:', error);
                alert('로그인 정보가 올바르지 않습니다. 다시 로그인해주세요.');
                return;
            }

            // 인증 토큰 생성
            const encodedAuth = btoa(JSON.stringify(userData));

            // PUT 요청으로 게시글 업데이트
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': encodedAuth
                },
                body: JSON.stringify({
                    title: title.trim(),
                    content: content.trim()
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || '게시글 수정에 실패했습니다');
            }

            alert('글이 성공적으로 수정되었습니다!');
            router.push(`/list/detail/${id}`);
        } catch (error) {
            console.error('Edit error:', error);
            alert(error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <p className="write-title">글 수정 페이지</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="write-input"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="write-input"
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" className="write-submit-button">
                    <p className="write-submit-text">제출</p>
                </button>
            </form>
        </div>
    );
}