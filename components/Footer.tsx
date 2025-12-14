import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <span className="text-2xl font-black tracking-tighter text-white font-heading mb-6 block">
              GIGA<span className="text-brand-500">FANS</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your daily source for the latest in technology, gaming culture, and entertainment news. We bring you closer to the content you love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Write for Us</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Gaming News</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Tech Reviews</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Movies & TV</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Videos</a></li>
            </ul>
          </div>

          {/* Newsletter (Footer version) */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Don't miss out on the latest updates.</p>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Email address" 
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 pl-9 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
                    />
                </div>
                <button className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold py-2 rounded transition-colors">
                    Subscribe
                </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 GigaFans Clone. All rights reserved.</p>
            <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};
