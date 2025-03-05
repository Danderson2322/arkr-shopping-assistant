import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';



const Socials = () => {
  
  return (

<div>
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
</div>
      );
    };

  export default Socials
      