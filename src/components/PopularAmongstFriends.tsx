import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';
import popularFriendsStyles from '../styles/PopularFriends.module.css';
import { popularAmongstFriends } from '../data/MockData';




const Popular = () => {
  
  return (
   <div>
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
    </div>
      );
    };

  export default Popular
      