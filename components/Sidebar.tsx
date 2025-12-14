import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-8">
      {/* Newsletter Widget */}
      <div className="bg-brand-900 p-6 rounded-xl text-white relative overflow-hidden">
        <div className="relative z-10">
            <h4 className="font-bold text-lg mb-2">Subscribe to Newsletter</h4>
            <p className="text-brand-100 text-sm mb-4">Get the latest gaming and tech news delivered to your inbox.</p>
            <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-brand-200 focus:outline-none focus:border-white mb-2"
            />
            <button className="w-full bg-white text-brand-900 font-bold text-sm py-2 rounded hover:bg-brand-50 transition-colors">
                Subscribe
            </button>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-800 rounded-full opacity-50 z-0"></div>
      </div>
    </aside>
  );
};