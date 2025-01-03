'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../navbar';
import FileSection from '../../list/detail/[id]/FileSection';  // FileSection import 추가
import { getUserFromLocalStorage, isValidUserData } from '@/app/util/auth';

export default function Edit() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');  // 게시글 작성자 상태 추가
    const [existingData, setExistingData] = useState(null);  // 추가된 state
    const [files, setFiles] = useState([]);  // files 상태 추가
    const router = useRouter();
    const { id } = useParams();

    useEffect(() => {
        const userData = getUserFromLocalStorage();
        if (!userData) {
            router.push('/login');
            return;
        }

        const fetchPost = async () => {
            try {
                if (!id) return;
                const response = await fetch(`/api/posts/${id}`);  // 경로 수정
                if (!response.ok) {
                    throw new Error('게시물을 가져오는데 실패했습니다');
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('데이터가 없습니다');
                }
                setTitle(data.title);
                setContent(data.content);
                setPostAuthor(data.author);  // 작성자 정보 저장
                setExistingData(data);  // 전체 데이터 저장
            } catch (error) {
                alert(error.message);
                router.push('/list');
            }
        };
        fetchPost();
    }, [id, router]);

    const handleFilesChange = (newFiles) => {
        setFiles(newFiles);  // FileSection에서 파일 변경사항 업데이트
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 입력해주세요');
            return;
        }

        try {
            const response = await fetch('/api/post/edit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id,
                    title: title.trim(),
                    content: content.trim(),
                    author: postAuthor,
                    files: files  // 현재 files 상태 사용
                })
            });

            const result = await response.json();
            
            if (!response.ok) {  // 응답 상태 체크 로직 개선
                throw new Error(result.message || '수정에 실패했습니다');
            }

            alert('수정이 완료되었습니다');
            router.push(`/list/detail/${id}`);
            router.refresh();
            
        } catch (error) {
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
                <textarea
                    className="write-input"
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                />
                <FileSection 
                    postId={id} 
                    isEditMode={true}
                    currentUser={getUserFromLocalStorage()}
                    postAuthor={postAuthor}
                    onFilesChange={handleFilesChange}  // 콜백 추가
                />
                <button type="submit" className="write-submit-button">
                    <p className="write-submit-text">제출</p>
                </button>
            </form>
        </div>
    );
}