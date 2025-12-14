import React from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import { Post } from '../types';

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  // Function to handle clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#111827] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Column: Image */}
        <div className="w-full md:w-[45%] bg-gray-900 relative h-[400px] md:h-auto">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center bg-[#0f1522]">
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-3 flex items-center flex-wrap gap-3">
            <span className="text-2xl">🎀 🎀</span> 
            {post.title} 
            <span className="text-2xl">🎀 🎀</span>
          </h2>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 font-medium">
            <Calendar size={16} />
            <span>Added {post.date}</span>
          </div>

          {/* Static File Info (Matching Screenshot) */}
          <div className="mb-8">
            <p className="text-gray-200 font-medium text-lg flex items-center flex-wrap gap-2">
              7 GB+ 
              <span className="text-green-400">❇️ ❇️</span>
              <span className="text-yellow-400">🌈 🌈</span>
              MEGA LINK
              <span className="text-yellow-400">🌈 🌈</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 w-full">
            <button className="w-full bg-[#ffff00] hover:bg-yellow-300 text-black font-bold text-base py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-yellow-900/20">
              <ExternalLink size={20} />
              Open Link 1
            </button>

            <button className="w-full bg-[#1e293b] hover:bg-[#2d3b4e] text-blue-400 border border-blue-900/30 font-bold text-base py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <ExternalLink size={20} />
              Open Link 2
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};