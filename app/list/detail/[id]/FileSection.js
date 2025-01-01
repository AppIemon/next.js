'use client'

import { useState, useEffect } from 'react';

export default function FileSection({ postId, isEditMode = false, currentUser, postAuthor, onFilesChange }) {
    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const maxFileSize = 5 * 1024 * 1024; // 5MB per file

    useEffect(() => {
        fetchFiles();
    }, [postId]);

    const fetchFiles = async () => {
        try {
            const res = await fetch(`/api/files/${postId}`);
            if (res.ok) {
                const data = await res.json();
                setFiles(data);
                if (isEditMode && onFilesChange) {
                    onFilesChange(data);
                }
            }
        } catch (error) {
            console.error('파일 목록 로딩 실패:', error);
        }
    };

    const handleFilesUpload = async (e) => {
        const selectedFiles = Array.from(e.target.files);
        
        // 파일 크기 검증
        for (let file of selectedFiles) {
            if (file.size > maxFileSize) {
                alert(`${file.name}의 크기가 5MB를 초과합니다.`);
                return;
            }
        }

        setIsUploading(true);
        
        try {
            for (let file of selectedFiles) {
                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch(`/api/files/${postId}`, {
                    method: 'POST',
                    body: formData
                });

                if (!res.ok) {
                    throw new Error(`파일 업로드 실패: ${file.name}`);
                }
            }
            
            fetchFiles();
        } catch (error) {
            console.error('파일 업로드 실패:', error);
            alert('파일 업로드 중 오류가 발생했습니다.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleFileDownload = (filepath, filename) => {
        try {
            const fullUrl = `${window.location.origin}${filepath}`;
            console.log('Download URL:', fullUrl); // 디버깅용
            
            const link = document.createElement('a');
            link.href = fullUrl;
            link.download = filename || 'download';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download error:', error);
            alert('파일 다운로드 중 오류가 발생했습니다.');
        }
    };

    const handleFileDelete = async (fileId) => {
        if (!window.confirm('파일을 삭제하시겠습니까?')) return;
        
        try {
            const res = await fetch(`/api/files/${fileId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchFiles(); // 파일 목록 새로고침
            } else {
                throw new Error('파일 삭제 실패');
            }
        } catch (error) {
            console.error('파일 삭제 오류:', error);
            alert('파일 삭제 중 오류가 발생했습니다.');
        }
    };

    const canModifyFiles = isEditMode || currentUser?.nickname === postAuthor;

    return (
        <div className="files-section">
            <div className="files-header" onClick={() => setIsExpanded(!isExpanded)}>
                <h3>
                    첨부 파일 ({files.length})
                    <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
                </h3>
            </div>
            
            {isExpanded && (
                <>
                    {canModifyFiles && (
                        <div className="file-upload-section">
                            <label className="file-upload-label">
                                파일 첨부하기
                                <input
                                    type="file"
                                    onChange={handleFilesUpload}
                                    className="hidden"
                                    multiple
                                    accept="*/*"
                                />
                            </label>
                            <p className="file-info">* 파일당 최대 5MB</p>
                            {isUploading && <p>업로드 중...</p>}
                        </div>
                    )}
                    
                    {files.length > 0 ? (
                        <div className="file-grid">
                            {files.map((file, index) => (
                                <div key={index} className="file-download-item">
                                    <span className="file-name" title={file.filename}>
                                        {file.filename}
                                    </span>
                                    <span className="file-size">
                                        {(file.size / 1024).toFixed(1)}KB
                                    </span>
                                    <button 
                                        className="file-download"
                                        onClick={() => handleFileDownload(file.filepath, file.filename)}
                                    >
                                        다운로드
                                    </button>
                                    {canModifyFiles && (
                                        <button 
                                            className="file-delete"
                                            onClick={() => handleFileDelete(file._id)}
                                        >
                                            삭제
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-files">첨부된 파일이 없습니다</p>
                    )}
                </>
            )}
        </div>
    );
}
