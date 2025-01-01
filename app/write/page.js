'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../navbar'

export default function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const userInfo = localStorage.getItem('user');  // Changed from 'users' to 'user'
        
        if (!userInfo) {
            router.push('/login');
            return;
        }

        const parsed = JSON.parse(userInfo);
        if (parsed.expires && parsed.expires < Date.now()) {
            localStorage.removeItem('user');
            router.push('/login');
            return;
        }

        setIsLoading(false);
    }, []);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        
        const userInfo = JSON.parse(localStorage.getItem('user'));  // Changed from 'users' to 'user'
        formData.append('author', userInfo.nickname);
        
        files.forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('/api/post/write', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                router.push('/list');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            alert('게시물 작성 실패');
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="write-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="제목" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="내용" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="file-upload-section">
                        <label className="file-upload-label">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="file-input"
                            />
                            파일 첨부하기
                        </label>
                        <div className="file-list">
                            {files.map((file, index) => (
                                <div key={index} className="file-item">
                                    <span>
                                        {file.type.startsWith('image/') ? '🖼️' : '📎'} {file.name}
                                    </span>
                                    <button 
                                        type="button" 
                                        onClick={() => removeFile(index)}
                                        className="file-remove"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="write-submit-button">저장</button>
                </form>
            </div>
        </div>
    );
}