import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';
import productCategoriesStyles from '../styles/ProductCategories.module.css';
import { productCategories } from '../data/mockData';




const ProductCategories: React.FC () => {
  
  

  return (
   

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
            <br></br>
            <span className="text-sm text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
      );
    };

  export default ProductCategories
      