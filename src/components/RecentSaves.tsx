import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';
import recentSavesStyles from '../styles/RecentSaves.module.css';
import { recentSaves } from '../data/MockData';




const RecentSaves = () => {
  
  return (
   <div>
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
    </div>
      );
    };

  export default RecentSaves
      