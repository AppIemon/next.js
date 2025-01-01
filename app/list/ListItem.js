'use client'

import { useRouter } from 'next/navigation';
import '../globals.css';

export default function ListItem({ item }) {
  const router = useRouter();

  return (
    <div className="list-item">
      <div className="list-item-header">
        <h4>{item.title}</h4>
        <div className="list-item-meta">
          <span className="author">✍️ {item.author || '익명'}</span>
          <span className="date">
            {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}
          </span>
        </div>
      </div>
      <p>{item.content}</p>
      <div className="item-stats">
        <span>👁️ {item.views || 0}</span>
        <span>❤️ {item.likes || 0}</span>
      </div>
      {item.image && (
        <img 
          src={`data:image/jpeg;base64,${item.image}`}
          alt="게시글 이미지"
          style={{ maxWidth: '200px' }}
        />
      )}
      <button 
        onClick={() => router.push(`list/detail/${item._id}`)} 
        className="detail-button"
      >
        자세히 보기
      </button>
    </div>
  );
}
