'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth';
import Link from 'next/link';
import UserProfileModal from '../../../../components/UserProfileModal';

export default function Comment({ postId, postAuthor }) {
    const { user } = useAuth();
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [replyForms, setReplyForms] = useState({})
    const [expandedComments, setExpandedComments] = useState({})
    const [selectedUser, setSelectedUser] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const processComments = (comments) => {
        const commentMap = {};
        const rootComments = [];

        comments.forEach(comment => {
            commentMap[comment._id] = { ...comment, replies: [] };
        });

        comments.forEach(comment => {
            if (comment.parentId) {
                const parent = commentMap[comment.parentId];
                if (parent) {
                    parent.replies.push(commentMap[comment._id]);
                }
            } else {
                rootComments.push(commentMap[comment._id]);
            }
        });

        return rootComments;
    };

    const fetchComments = async () => {
        try {
            console.log('Fetching comments for postId:', postId); // 디버깅 1
            const res = await fetch(`/api/comment/get?postId=${postId}`, {
                method: 'GET',
                cache: 'no-store'
            });
            
            console.log('API Response status:', res.status); // 디버깅 2
            
            if (res.ok) {
                const data = await res.json();
                console.log('Raw comment data:', data); // 디버깅 3
                
                if (!data || !Array.isArray(data)) {
                    console.error('Invalid data format:', data);
                    setComments([]);
                    return;
                }

                const processedComments = processComments(data);
                console.log('Processed comments:', processedComments); // 디버깅 5
                setComments(processedComments);
            } else {
                throw new Error(`댓글 로딩 실패: ${res.status}`);
            }
        } catch (error) {
            console.error('댓글 로딩 상세 오류:', error);
            setComments([]);
        }
    };

    useEffect(() => {
        console.log('Comment component mounted with postId:', postId); // 디버깅 7
        if (postId) {
            fetchComments();
        }
    }, [postId])

    const handleSubmit = async (e, parentId = null) => {
        e.preventDefault();

        try {
            // 답글 단계 확인
            if (parentId) {
                const parentComment = findCommentById(comments, parentId);
                const level = getCommentLevel(parentComment);
                if (level >= 15) {
                    alert('더 이상 답글을 작성할 수 없습니다 (최대 15단계)');
                    return;
                }
            }

            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                alert('로그인이 필요합니다');
                return;
            }

            let userData;
            try {
                userData = typeof userInfo === 'string' ? JSON.parse(userInfo) : userInfo;
            } catch (error) {
                console.error('Invalid user data:', error);
                alert('로그인 정보가 올바르지 않습니다. 다시 로그인해주세요.');
                localStorage.removeItem('user');
                return;
            }

            if (!newComment.trim()) {
                alert('댓글 내용을 입력해주세요');
                return;
            }

            const res = await fetch('/api/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: postId,
                    content: newComment,
                    parentId: parentId,
                    author: {
                        _id: userData._id,
                        nickname: userData.nickname
                    }
                })
            });

            if (res.ok) {
                setNewComment('');
                await fetchComments();
            } else {
                const data = await res.json();
                alert(data.message || '댓글 작성 중 오류가 발생했습니다');
            }
        } catch (error) {
            console.error('댓글 작성 오류:', error);
            alert('댓글 작성 중 오류가 발생했습니다');
        }
    };

    // 댓글의 level을 찾는 함수
    const getCommentLevel = (comment, level = 0) => {
        if (!comment.parentId) return level;
        const parentComment = findCommentById(comments, comment.parentId);
        return parentComment ? getCommentLevel(parentComment, level + 1) : level;
    };

    // ID로 댓글을 찾는 함수
    const findCommentById = (comments, id) => {
        for (let comment of comments) {
            if (comment._id === id) return comment;
            if (comment.replies) {
                const found = findCommentById(comment.replies, id);
                if (found) return found;
            }
        }
        return null;
    };

    const handleDelete = async (commentId) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                alert('로그인이 필요합니다');
                return;
            }

            const userData = JSON.parse(userInfo);
            const res = await fetch(`/api/comment/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'X-Author-Id': userData._id
                }
            });

            if (res.ok) {
                await fetchComments();
            } else {
                const data = await res.json();
                throw new Error(data.message);
            }
        } catch (error) {
            alert(error.message || '삭제 중 오류가 발생했습니다');
        }
    };

    const handleEdit = async (commentId, text) => {
        try {
            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                alert('로그인이 필요합니다');
                return;
            }

            const userData = JSON.parse(userInfo);
            const res = await fetch(`/api/comment/${commentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Author-Id': userData._id
                },
                body: JSON.stringify({
                    text,
                    authorId: userData._id
                })
            });

            if (res.ok) {
                await fetchComments();
            } else {
                const data = await res.json();
                throw new Error(data.message);
            }
        } catch (error) {
            alert(error.message || '수정 중 오류가 발생했습니다');
        }
    };

    const handleUserClick = async (userId) => {
        try {
            const res = await fetch(`/api/user/${userId}`);
            if (res.ok) {
                const userData = await res.json();
                setSelectedUser(userData);
                setShowProfileModal(true);
            }
        } catch (error) {
            console.error('사용자 정보 로딩 실패:', error);
        }
    };

    const toggleReplyForm = (commentId) => {
        setReplyForms(prev => ({
            ...prev,
            [commentId]: !prev[commentId]
        }));
    };

    const toggleReplies = (commentId) => {
        setExpandedComments(prev => ({
            ...prev,
            [commentId]: !prev[commentId]
        }));
    };

    const renderComments = (comments, level = 0) => {
        console.log('Rendering comments:', { level, commentsCount: comments?.length }); // 디버깅 6
        
        if (!Array.isArray(comments)) {
            console.error('Comments is not an array:', comments);
            return null;
        }
        
        return comments.map(comment => {
            if (!comment) return null;
            
            const authorNickname = comment.author?.nickname || '알 수 없음';
            const authorId = comment.author?._id;
            const isAuthor = user?.nickname === authorNickname;
            const isPostAuthor = postAuthor === authorNickname;
            const hasReplies = comment.replies && comment.replies.length > 0;
            const canReply = level < 20;  // 20단계 미만일 때만 답글 작성 가능

            return (
                <div key={comment._id} 
                    className={`comment-item level-${level}`} 
                    style={{ 
                        marginLeft: `${level * 5}px`,  // 들여쓰기 간격 5px로 조정
                        backgroundColor: level === 0 ? '#fff3e0' : '#fffde7',
                        borderLeft: level > 0 ? '3px solid #ffd54f' : 'none',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}>
                    <div className="comment-content">
                        <div className="comment-header">
                            <a
                                onClick={() => handleUserClick(authorId)}
                                className="comment-author-link"
                                style={{ cursor: 'pointer' }}
                            >
                                {authorNickname}
                                {isPostAuthor && <span className="author-badge">작성자</span>}
                            </a>
                            <span className="comment-date">
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="comment-text">
                            {comment.isDeleted ? (
                                <span className="deleted-comment">삭제된 댓글입니다</span>
                            ) : (
                                comment.content
                            )}
                        </p>
                        <div className="comment-footer">
                            {!comment.isDeleted && (
                                <>
                                    {canReply ? (
                                        <button onClick={() => toggleReplyForm(comment._id)} className="reply-btn">
                                            답글달기
                                        </button>
                                    ) : (
                                        <span className="max-level-notice">최대 답글 단계에 도달했습니다</span>
                                    )}
                                    {hasReplies && (
                                        <button 
                                            onClick={() => toggleReplies(comment._id)}
                                            className="toggle-replies-btn"
                                        >
                                            {expandedComments[comment._id] ? '답글 접기' : `답글 보기(${comment.replies.length})`}
                                        </button>
                                    )}
                                    {isAuthor && (
                                        <div className="comment-actions">
                                            <button onClick={() => {
                                                const newText = prompt('댓글을 수정하세요', comment.content);
                                                if (newText && newText !== comment.content) {
                                                    handleEdit(comment._id, newText);
                                                }
                                            }} className="edit-btn">수정</button>
                                            <button onClick={() => handleDelete(comment._id)} 
                                                className="delete-btn">삭제</button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {replyForms[comment._id] && (
                        <form className="reply-form" onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(e, comment._id);
                            toggleReplyForm(comment._id);
                        }}>
                            <textarea 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="답글을 작성하세요"
                            />
                            <div className="reply-actions">
                                <button type="submit">답글 작성</button>
                                <button type="button" className="cancel-button" 
                                    onClick={() => toggleReplyForm(comment._id)}>
                                    취소
                                </button>
                            </div>
                        </form>
                    )}

                    {hasReplies && expandedComments[comment._id] && (
                        <div className="replies">
                            {renderComments(comment.replies, level + 1)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className="comment-section">
            <h3 className="comment-title">댓글 ({comments?.length || 0})</h3>
            <form onSubmit={(e) => handleSubmit(e)} className="comment-form">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 작성하세요"
                    className="comment-textarea"
                />
                <button type="submit" className="comment-button">댓글 작성</button>
            </form>
            <div className="comment-list">
                {Array.isArray(comments) && comments.length > 0 ? (
                    renderComments(comments)
                ) : (
                    <p>댓글이 없습니다. (총 {comments?.length || 0}개)</p>
                )}
            </div>
            {showProfileModal && selectedUser && (
                <UserProfileModal 
                    user={selectedUser}
                    onClose={() => {
                        setShowProfileModal(false);
                        setSelectedUser(null);
                    }}
                />
            )}
        </div>
    )
}