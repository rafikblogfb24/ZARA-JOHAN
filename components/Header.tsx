import React, { useState } from 'react';
import { Search, Menu, X, User as UserIcon } from 'lucide-react';
import { MenuItem, User } from '../types';

interface HeaderProps {
  user: User | null;
  onLoginClick: () => void;
  onProfileClick: () => void;
  onLogoClick: () => void;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Latest Drops Only', href: '#' },
  { label: 'Tags', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'DMCA', href: '#' },
  { label: 'Report', href: '#' },
];

export const Header: React.FC<HeaderProps> = ({ user, onLoginClick, onProfileClick, onLogoClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header border-b border-gray-800 h-[70px] flex items-center shadow-lg">
      <div className="container mx-auto px-6 w-full max-w-[1600px]">
        <div className="flex items-center justify-between">
          
          {/* Left Section: Logo & Menu */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <button onClick={onLogoClick} className="flex items-center gap-1 group focus:outline-none">
              <span className="text-2xl font-bold tracking-tight text-white">
                Gi<span className="text-primary">g</span>aFans
              </span>
              <span className="text-primary transform rotate-12 group-hover:rotate-45 transition-transform text-xl">🌶️</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section: Search & User */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search models..."
                className="w-full bg-[#1e293b] text-white border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all"
              />
            </div>

            {/* User Account Button (Desktop) */}
            <div className="hidden md:block">
              {user ? (
                <button 
                  onClick={onProfileClick}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-[#1e293b] hover:bg-[#2d3b4e] border border-gray-700 transition-all"
                >
                   <img src={user.avatar} alt="Profile" className="w-7 h-7 rounded-full object-cover" />
                   <span className="text-sm font-medium text-gray-200 max-w-[100px] truncate">{user.name}</span>
                </button>
              ) : (
                <button 
                  onClick={onLoginClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-pink-500 text-white text-sm font-bold transition-colors"
                >
                  <UserIcon size={16} />
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-header border-b border-gray-800 shadow-xl z-50">
          <nav className="flex flex-col p-4 space-y-4">
             {/* Mobile User Section */}
            <div className="pb-4 border-b border-gray-800 mb-2">
                {user ? (
                    <button 
                        onClick={() => { onProfileClick(); setIsMobileMenuOpen(false); }}
                        className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-800"
                    >
                         <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full" />
                         <div className="text-left">
                            <div className="text-white font-bold">{user.name}</div>
                            <div className="text-gray-400 text-xs">View Profile</div>
                         </div>
                    </button>
                ) : (
                    <button 
                         onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
                         className="w-full bg-primary hover:bg-pink-500 text-white font-bold py-2 rounded-lg"
                    >
                        Login / Register
                    </button>
                )}
            </div>

            <div className="relative mb-2">
               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search models..."
                className="w-full bg-[#1e293b] text-white border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none"
              />
            </div>
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 font-medium text-base hover:text-white px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};