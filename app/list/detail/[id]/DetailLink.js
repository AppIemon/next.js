"use client";

import { useRouter } from 'next/navigation';

export default function DetailLink() {
    const router = useRouter();
    
    const handleClick = () => {
        try {
            router.push('/list');
        } catch (error) {
            console.error("네비게이션 오류:", error);
        }
    };

    return (
        <button onClick={handleClick} className="back-button-box">
            <p className="back-button-text">돌아가기</p>
        </button>
    );
}