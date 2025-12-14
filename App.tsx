import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PostGrid } from './components/PostGrid';
import { PostModal } from './components/PostModal';
import { AuthModal } from './components/AuthModal';
import { ProfilePage } from './components/ProfilePage';
import { Post, User } from './types';
import { Send, ArrowUp, ArrowUpDown, Filter } from 'lucide-react';

// Expanded Mock Data to simulate a full site with diverse categories
const MOCK_MODELS: Post[] = [
  {
    id: '1',
    title: 'onlyshams',
    excerpt: 'Exclusive content available now.',
    category: 'Model',
    author: 'onlyshams',
    date: 'Dec 13, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop',
    content: 'Full set available in the VIP section. Don\'t miss out on the latest drop.'
  },
  {
    id: '2',
    title: 'minki minna',
    excerpt: 'New photoshoot at the lounge.',
    category: 'Cosplay',
    author: 'minki minna',
    date: 'Dec 13, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    content: 'Check out the behind the scenes from my latest shoot.'
  },
  {
    id: '3',
    title: 'rachelfit_',
    excerpt: 'Fitness and fun combined.',
    category: 'Fitness',
    author: 'rachelfit_',
    date: 'Dec 13, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    content: 'Gym sets and flexible poses available now.'
  },
  {
    id: '4',
    title: 'babymahls',
    excerpt: 'Beach vibes forever.',
    category: 'Model',
    author: 'babymahls',
    date: 'Dec 13, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    content: 'Sun, sand, and much more waiting for you.'
  },
  {
    id: '5',
    title: 'lexy_panterra',
    excerpt: 'Dancing queen.',
    category: 'Dance',
    author: 'lexy',
    date: 'Dec 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop', 
    content: 'Dance videos and exclusive pics.'
  },
  {
    id: '6',
    title: 'sophia_rose',
    excerpt: 'Elegant and classy.',
    category: 'Fashion',
    author: 'sophia',
    date: 'Dec 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop', 
    content: 'Classy evening wear and lingerie sets.'
  },
  {
    id: '7',
    title: 'bella_dream',
    excerpt: 'Dreamy vibes.',
    category: 'Model',
    author: 'bella',
    date: 'Dec 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', 
    content: 'Welcome to my dream world.'
  },
  {
    id: '8',
    title: 'jade_wild',
    excerpt: 'Wild at heart.',
    category: 'Nature',
    author: 'jade',
    date: 'Dec 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop', 
    content: 'Outdoor shoots are my favorite.'
  },
  {
    id: '9',
    title: 'luna_star',
    excerpt: 'Cosplay and fun.',
    category: 'Cosplay',
    author: 'luna',
    date: 'Dec 11, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    content: 'New cosplay set explicitly for fans.'
  },
  {
    id: '10',
    title: 'ivy_aura',
    excerpt: 'Nature lover.',
    category: 'Nature',
    author: 'ivy',
    date: 'Dec 11, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop',
    content: 'Exploring the wild.'
  },
  {
    id: '11',
    title: 'scarlett_blue',
    excerpt: 'Urban style.',
    category: 'Fashion',
    author: 'scarlett',
    date: 'Dec 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
    content: 'City lights and late nights.'
  },
  {
    id: '12',
    title: 'amber_glow',
    excerpt: 'Golden hour shoots.',
    category: 'Photography',
    author: 'amber',
    date: 'Dec 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600&auto=format&fit=crop',
    content: 'Capturing the perfect light.'
  },
  {
    id: '13',
    title: 'ruby_red',
    excerpt: 'Bold and beautiful.',
    category: 'Fashion',
    author: 'ruby',
    date: 'Dec 09, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1534030347209-7147fd9e7f1a?q=80&w=600&auto=format&fit=crop',
    content: 'Red is my color.'
  },
  {
    id: '14',
    title: 'tech_guru',
    excerpt: 'Latest gadget review.',
    category: 'Tech',
    author: 'mkbhd_fan',
    date: 'Dec 09, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
    content: 'Reviewing the latest smartphone tech.'
  },
  {
    id: '15',
    title: 'game_master',
    excerpt: 'RPG walkthrough part 1.',
    category: 'Gaming',
    author: 'gamer_x',
    date: 'Dec 08, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
    content: 'Walkthrough of the new fantasy RPG.'
  }
];

export default function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'profile'>('home');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load user from local storage on init
  useEffect(() => {
    const savedUser = localStorage.getItem('gigaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('gigaUser', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('gigaUser');
    setCurrentView('home');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(MOCK_MODELS.map(post => post.category)))];

  // Filtering and Sorting Logic
  const getProcessedPosts = () => {
    let filtered = MOCK_MODELS;

    // Filter by Category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort
    return filtered.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const visiblePosts = getProcessedPosts();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-white">
      <Header 
        user={user} 
        onLoginClick={() => setIsAuthModalOpen(true)}
        onProfileClick={() => setCurrentView('profile')}
        onLogoClick={() => setCurrentView('home')}
      />
      
      {/* Main Content */}
      <main className="flex-grow pt-[90px] pb-24">
        {currentView === 'home' ? (
             <div className="container mx-auto px-4 lg:px-6 max-w-[1600px] animate-in fade-in duration-500">
                
                {/* Filters and Controls */}
                <div className="flex flex-col space-y-4 mb-8">
                  
                  {/* Category Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                     <div className="flex items-center text-gray-400 mr-2 flex-shrink-0">
                        <Filter size={16} className="mr-1" />
                        <span className="text-sm font-medium">Filters:</span>
                     </div>
                     {categories.map((cat) => (
                       <button
                         key={cat}
                         onClick={() => setSelectedCategory(cat)}
                         className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                           selectedCategory === cat 
                             ? 'bg-primary text-white shadow-lg shadow-pink-500/20' 
                             : 'bg-[#1f2937] text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                         }`}
                       >
                         {cat}
                       </button>
                     ))}
                  </div>

                  {/* Header & Sort Row */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-800 pb-4">
                       <h2 className="text-xl font-bold text-white border-l-4 border-primary pl-3 flex items-center gap-2">
                          {selectedCategory === 'All' ? 'Latest Updates' : `${selectedCategory} Posts`}
                          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md font-normal">
                            {visiblePosts.length}
                          </span>
                       </h2>
                       
                       <div className="flex items-center gap-3 w-full md:w-auto">
                          <div className="relative w-full md:w-auto">
                              <select 
                                  value={sortBy}
                                  onChange={(e) => setSortBy(e.target.value as any)}
                                  className="w-full md:w-48 appearance-none bg-[#1f2937] border border-gray-700 hover:border-gray-600 text-white text-sm rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all cursor-pointer"
                              >
                                  <option value="newest">Newest First</option>
                                  <option value="oldest">Oldest First</option>
                                  <option value="title">Name (A-Z)</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                  <ArrowUpDown size={14} />
                              </div>
                          </div>
                       </div>
                  </div>
                </div>

                {visiblePosts.length > 0 ? (
                  <PostGrid posts={visiblePosts} onPostClick={setSelectedPost} />
                ) : (
                  <div className="text-center py-20 bg-[#1f2937]/50 rounded-xl border border-gray-800 border-dashed">
                    <p className="text-gray-400 text-lg">No posts found in this category.</p>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className="mt-4 text-primary hover:underline"
                    >
                      View all posts
                    </button>
                  </div>
                )}
             </div>
        ) : (
            user ? (
                <ProfilePage 
                    user={user} 
                    savedPosts={MOCK_MODELS.slice(0, 4)} 
                    onLogout={handleLogout}
                    onPostClick={setSelectedPost}
                />
            ) : (
                // Fallback if user logs out while on profile page
                <div className="text-center pt-20">
                    <p>Redirecting...</p> 
                    {(() => setCurrentView('home'))()}
                </div>
            )
        )}
      </main>

      {/* Floating Bottom Bar (Only on Home) */}
      {currentView === 'home' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <div className="bg-[#1f2937] border border-gray-700 rounded-lg shadow-2xl flex items-center divide-x divide-gray-700 overflow-hidden">
                <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-gray-200 hover:bg-gray-700 hover:text-white transition-colors">
                    <span>Join:</span>
                    <span className="flex items-center gap-1">
                        Telegram <Send size={14} className="rotate-[-45deg]" />
                    </span>
                </button>
                <button 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-gray-200 hover:bg-gray-700 hover:text-white transition-colors"
                >
                    Top <ArrowUp size={14} />
                </button>
            </div>
        </div>
      )}

      {/* Modals */}
      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}