import React from 'react';
import { Post } from '../types';

interface PostGridProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export const PostGrid: React.FC<PostGridProps> = ({ posts, onPostClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group cursor-pointer flex flex-col"
          onClick={() => onPostClick(post)}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-3 bg-surface">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:opacity-90"
              loading="lazy"
            />
          </div>
          
          {/* Info */}
          <div className="flex flex-col px-1">
            <h3 className="text-[15px] font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-pink-400 text-xs">🎀 🎀</span>
              {post.title}
              <span className="text-pink-400 text-xs">🎀 🎀</span>
            </h3>
            <span className="text-xs text-gray-400">
              {post.date}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};