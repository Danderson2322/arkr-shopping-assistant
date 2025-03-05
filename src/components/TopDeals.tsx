import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';
import topDealsStyles from '../styles/TopDeals.module.css';
import { topDeals } from '../data/MockData';




const TopDeals = () => {
  
  return (
   <div>
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
    </div>
      );
    };

  export default TopDeals
      