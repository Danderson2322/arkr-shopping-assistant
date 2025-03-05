// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import SocialLinks from '../components/layout/SocialLinks';

import ProductCategories from '../components/ProductCategories';
import RecentSaves from '../components/RecentSaves';
import TopDeals from '../components/TopDeals';
import PopularAmongstFriends from '../components/PopularAmongstFriends';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F5F2D5] text-[#0d0d0d] pb-16">
      {/* <Header /> */}
      
<div className ={`${compactStyles['scroll-container']} `}>
        <ProductCategories />
        {/* <RecentSaves />
        <TopDeals />
        <PopularAmongstFriends /> */}
      </div>
      
      {/* <SocialLinks />
      <Navigation /> */}
    </div>
  );
};

export default HomePage;