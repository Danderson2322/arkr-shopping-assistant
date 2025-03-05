// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navbar';
import SocialLinks from '../components/Socials';

import ProductCategories from '../components/ProductCategories';
import RecentSaves from '../components/RecentSaves';
import TopDeals from '../components/TopDeals';
import PopularAmongstFriends from '../components/PopularAmongstFriends';


import productCategoriesStyles from '../styles/ProductCategories.module.css';
import recentSavesStyles from '../styles/RecentSaves.module.css';
import topDealsStyles from '../styles/TopDeals.module.css';
import popularFriendsStyles from '../styles/PopularFriends.module.css';
// import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F5F2D5] text-[#0d0d0d] pb-16">
      <Header />
      
<div className ={`${compactStyles['scroll-container']} `}>
        <ProductCategories />
        <RecentSaves />
        <TopDeals />
        <PopularAmongstFriends />
      </div>
      
      <SocialLinks />
      <Navigation />
    </div>
  );
};

export default HomePage;