'use client'

export default function CommentForm({ postId, parentId = null }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userInfo = localStorage.getItem('user');
        const userData = JSON.parse(userInfo);
        if (!userData) {
            alert('로그인이 필요합니다');
            return;
        }

        const formData = new FormData(e.target);
        const content = formData.get('content');

        try {
            const response = await fetch('/api/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: postId,
                    content: content,
                    parentId: parentId,
                    author: userData._id  // Pass user ID from localStorage
                })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || '댓글 작성에 실패했습니다');
            }

            e.target.reset();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea name="content" required></textarea>
            <button type="submit">댓글 작성</button>
        </form>
    );
}
