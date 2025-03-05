import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import productCategoriesStyles from '../styles/ProductCategories.module.css';
import recentSavesStyles from '../styles/RecentSaves.module.css';
import topDealsStyles from '../styles/TopDeals.module.css';
import popularFriendsStyles from '../styles/PopularFriends.module.css';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState<'home' | 'bookmark' | 'messages' | 'settings'>('home');
  
    const getIconClass = (tabName: string) => {
      return `${layoutStyles['nav-icon']} ${
        activeTab === tabName ? 'text-blue-500' : 'text-[#dddddd]'
      }`;
    };
  
    return (
      <nav className={layoutStyles.navigation}>
        <Home 
          className={getIconClass('home')} 
          size={30} 
          onClick={() => setActiveTab('home')}
        />
        <Bookmark 
          className={getIconClass('bookmark')} 
          size={30} 
          onClick={() => setActiveTab('bookmark')}
        />
        <MessageCircle 
          className={getIconClass('messages')} 
          size={30} 
          onClick={() => setActiveTab('messages')}
        />
        <Settings 
          className={getIconClass('settings')} 
          size={30} 
          onClick={() => setActiveTab('settings')}
        />
      </nav>
    );
  };
  
  export default Navbar