import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import productCategoriesStyles from '../styles/ProductCategories.module.css';
import recentSavesStyles from '../styles/RecentSaves.module.css';
import topDealsStyles from '../styles/TopDeals.module.css';
import popularFriendsStyles from '../styles/PopularFriends.module.css';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';



const HomePage = () => {
  const productCategories = [
    { name: 'Electronics', icon: '📱', color: 'bg-[#e62e00]' },
    { name: 'Fashion', icon: '👗', color: 'bg-[#ff8533]' },
    { name: 'Home', icon: '🏠', color: 'bg-[#0d0d0d]' },
    { name: 'Beauty', icon: '💄', color: 'bg-[#F5F2D5]' },
    { name: 'Sports', icon: '⚽', color: 'bg-[#e62e00]' },
    { name: 'Books', icon: '📚', color: 'bg-[#ff8533]' }
  ];

  const recentSaves = [
    { 
      id: 1, 
      name: 'Wireless Earbuds', 
      price: 79.99, 
      image: '/api/placeholder/150/150',
      brand: 'TechGear'
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 199.99, 
      image: '/api/placeholder/150/150',
      brand: 'FitTech'
    },
    { 
      id: 3, 
      name: 'Portable Speaker', 
      price: 129.99, 
      image: '/api/placeholder/150/150',
      brand: 'SoundWave'
    }, 
    { 
        id: 4, 
        name: 'Frank`s Mom', 
        price: 9.99, 
        image: '/api/placeholder/150/150',
        brand: 'Mommy'
      }, 
  ];

  const topDeals = [
    { 
      id: 1, 
      name: 'Bluetooth Headphones', 
      originalPrice: 149.99,
      discountPrice: 99.99, 
      image: '/api/placeholder/150/150',
      discountPercentage: 33
    },
    { 
      id: 2, 
      name: 'Smartwatch Pro', 
      originalPrice: 249.99,
      discountPrice: 179.99, 
      image: '/api/placeholder/150/150',
      discountPercentage: 28
    }
  ];

  const popularAmongstFriends = [
    { 
      id: 1, 
      name: 'Vintage Leather Jacket', 
      price: 249.99, 
      image: '/api/placeholder/150/150',
      friendsWhoLiked: 42
    },
    { 
      id: 2, 
      name: 'Ergonomic Office Chair', 
      price: 299.99, 
      image: '/api/placeholder/150/150',
      friendsWhoLiked: 35
    }, { 
        id: 3, 
        name: 'Also Franks Mom', 
        price: .99, 
        image: '/api/placeholder/150/150',
        friendsWhoLiked: 99
      }
  ];

  return (
    <div className="relative min-h-screen bg-[#F5F2D5] text-[#0d0d0d] pb-16">
    {/* Header */}
    <header className={layoutStyles.header}>
        <div className={layoutStyles.logo}>ARKR</div>
        <div className={layoutStyles['header-actions']}>
          <span className={layoutStyles['header-action']}>Search</span>
          <span className={layoutStyles['header-action']}>Cart</span>
        </div>
      </header>

{/* Scrollable Content Container */}
<div className="overflow-y-auto pb-24">
    {/* Product Categories */}
    <section className={`${compactStyles['compact-section']} p-4`}>
      <h2 className={`
        text-xl font-semibold mb-4 text-[#e62e00] 
        ${compactStyles['blocky-title']}
      `}>
        Product Categories
      </h2>
      <div className={`
        ${productCategoriesStyles['categories-container']} 
        ${compactStyles['compact-container']}
      `}>
        {productCategories.map((category, index) => (
          <div 
            key={index} 
            className={`
              ${productCategoriesStyles['category-item']} 
              ${compactStyles['compact-item']}
              ${category.color}
            `}
          >
            <span className="text-3xl mb-2">{category.icon}</span>
            <span className="text-sm text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Recent Saves */}
    <section className={`${compactStyles['compact-section']} p-4`}>
      <h2 className={`
        text-xl font-semibold mb-4 text-[#ff8533] 
        ${compactStyles['blocky-title']}
      `}>
        Your Recent Saves
      </h2>
      <div className={`
        ${recentSavesStyles['saves-container']} 
        ${compactStyles['compact-container']}
      `}>
        {recentSaves.map((item) => (
          <div 
            key={item.id} 
            className={`
              ${recentSavesStyles['save-item']} 
              ${compactStyles['compact-item']}
            `}
          >
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className={recentSavesStyles['save-image']}
              />
              <div className={recentSavesStyles['save-badge']}>
                Save
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mt-1">{item.name}</h3>
    <p className="text-xs text-gray-500 mt-0.5">{item.brand}</p>
    <p className="text-sm text-[#ff8533] font-bold mt-1">${item.price}</p>

          </div>
        ))}
      </div>
    </section>

    {/* Top Deals */}
    <section className={`${compactStyles['compact-section']} p-4`}>
      <h2 className={`
        text-xl font-semibold mb-4 text-[#e62e00] 
        ${compactStyles['blocky-title']}
      `}>
        Top Deals
      </h2>
      <div className={`
        ${topDealsStyles['deals-container']} 
        ${compactStyles['compact-container']}
      `}>
        {topDeals.map((deal) => (
          <div 
            key={deal.id} 
            className={`
              ${topDealsStyles['deal-item']} 
              ${compactStyles['compact-item']}
            `}
          >
            <div className="relative mr-4">
              <img 
                src={deal.image} 
                alt={deal.name} 
                className={topDealsStyles['deal-image']}
              />
              <div className={topDealsStyles['deal-badge']}>
                Deal
              </div>
            </div>
            <div className={topDealsStyles['deal-details']}>
              <h3 className="text-sm font-medium">{deal.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <p className={topDealsStyles['original-price']}>${deal.originalPrice}</p>
                <p className={topDealsStyles['discount-price']}>${deal.discountPrice}</p>
                <span className={topDealsStyles['discount-tag']}>
                  {deal.discountPercentage}% OFF
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  {/* Popular Amongst Friends */}
  <section className={`${compactStyles['compact-section']} p-4`}>
    <h2 className={`
      text-xl font-semibold mb-4 text-[#ff8533] 
      ${compactStyles['blocky-title']}
    `}>
      Popular Amongst Friends
    </h2>
    <div className={`
      ${popularFriendsStyles['popular-container']} 
      ${compactStyles['compact-container']}
    `}>
      {popularAmongstFriends.map((item) => (
        <div 
          key={item.id} 
          className={`
            ${popularFriendsStyles['popular-item']} 
            ${compactStyles['compact-item']}
          `}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className={popularFriendsStyles['popular-image']}
          />
          <div className={popularFriendsStyles['popular-details']}>
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="text-[#e62e00] font-bold">${item.price}</p>
            <p className="text-xs text-gray-500 mt-1">
              {item.friendsWhoLiked} friends like this
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

          {/* Social Links */}
          <section className={layoutStyles['social-links']}>
        <Facebook 
          className={`${layoutStyles['social-icon']} text-[#e62e00]`} 
          size={32} 
        />
        <Instagram 
          className={`${layoutStyles['social-icon']} text-[#ff8533]`} 
          size={32} 
        />
        <Twitter 
          className={`${layoutStyles['social-icon']} text-[#0d0d0d]`} 
          size={32} 
        />
        <span 
          className={`${layoutStyles['social-icon']} text-[#0d0d0d] font-bold`}
        >
          TikTok
        </span>
      </section>

      <div className="h-100"></div>


</div>
      {/* Navigation Bar */}
      <nav className={layoutStyles.navigation}>
        <Home 
          className={`${layoutStyles['nav-icon']} text-[#e62e00]`} 
          size={24} 
        />
        <Bookmark 
          className={`${layoutStyles['nav-icon']} text-[#ff8533]`} 
          size={24} 
        />
        <MessageCircle 
          className={`${layoutStyles['nav-icon']} text-[#0d0d0d]`} 
          size={24} 
        />
        <Settings 
          className={`${layoutStyles['nav-icon']} text-gray-600`} 
          size={24} 
        />
      </nav>
    </div>
  );
};

export default HomePage;