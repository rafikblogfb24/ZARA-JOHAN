import React from 'react';
import { User, Post } from '../types';
import { Settings, Download, Heart, LogOut, Camera, Shield, Mail } from 'lucide-react';
import { PostGrid } from './PostGrid';

interface ProfilePageProps {
  user: User;
  savedPosts: Post[]; // Passing mock saved posts
  onLogout: () => void;
  onPostClick: (post: Post) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, savedPosts, onLogout, onPostClick }) => {
  return (
    <div className="container mx-auto px-4 lg:px-6 max-w-[1200px] animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Profile Header Card */}
      <div className="bg-[#1f2937] rounded-2xl overflow-hidden border border-gray-700 shadow-xl mb-8">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-900 via-[#131b2e] to-purple-900 relative">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <button className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
            <Settings size={20} />
          </button>
        </div>

        {/* Info Section */}
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row items-end -mt-16 mb-6 gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-[#1f2937] overflow-hidden bg-gray-800 shadow-lg">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-2 right-2 bg-primary text-white p-1.5 rounded-full hover:bg-pink-500 border border-[#1f2937] transition-colors">
                <Camera size={14} />
              </button>
            </div>

            {/* Text Info */}
            <div className="flex-1 mb-2">
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                {user.name}
                <Shield size={20} className="text-blue-400 fill-blue-400/20" />
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-400 mt-2 text-sm">
                 <span className="flex items-center gap-1.5">
                    <Mail size={14} /> {user.email}
                 </span>
                 <span>•</span>
                 <span>Member since {user.joinedDate}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-2 w-full md:w-auto">
              <button 
                onClick={onLogout}
                className="flex-1 md:flex-none items-center justify-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-lg font-medium transition-all"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-700/50 pt-6">
             <div className="bg-[#111827] p-4 rounded-xl border border-gray-700/50">
                <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Downloads</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2">
                    {user.downloads || 0}
                    <Download size={16} className="text-green-400" />
                </div>
             </div>
             <div className="bg-[#111827] p-4 rounded-xl border border-gray-700/50">
                <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Favorites</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2">
                    {user.favorites || 0}
                    <Heart size={16} className="text-pink-400" />
                </div>
             </div>
              <div className="bg-[#111827] p-4 rounded-xl border border-gray-700/50">
                <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Status</div>
                <div className="text-lg font-bold text-blue-400">
                    Pro Member
                </div>
             </div>
             <div className="bg-[#111827] p-4 rounded-xl border border-gray-700/50">
                <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Wallet</div>
                <div className="text-lg font-bold text-yellow-400">
                    0.00 Credits
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-primary pl-3">
            Favorites & History
        </h3>
        
        {savedPosts.length > 0 ? (
            <PostGrid posts={savedPosts} onPostClick={onPostClick} />
        ) : (
            <div className="text-center py-20 bg-[#1f2937] rounded-xl border border-gray-700 border-dashed">
                <p className="text-gray-400">No saved posts yet.</p>
            </div>
        )}
      </div>
    </div>
  );
};