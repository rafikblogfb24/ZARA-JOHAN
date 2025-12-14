export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string; // Full content for the modal/AI analysis
  views?: number;
  comments?: number;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
  downloads?: number;
  favorites?: number;
}
