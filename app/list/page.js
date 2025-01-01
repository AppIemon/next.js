'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ListItem from './ListItem';
import Navbar from '../navbar';

export default function List() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const userInfo = localStorage.getItem('user');
            if (!userInfo) {
                router.push('/login');
                return;
            }

            const res = await fetch('/api/posts', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });
            
            if (!res.ok) {
                throw new Error('Failed to fetch posts');
            }
            
            const data = await res.json();
            setPosts(data.posts || []);
        } catch (error) {
            console.error("데이터 로딩 오류:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div className="loading">
        로딩중...
    </div>;

    return (
        <div>
            <Navbar />
            <div className="list-bg">
                {posts.map((item) => (
                    <ListItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}
