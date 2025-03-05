import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';



const Navbar = () => {
  
  return (

<div>
    {/* Navbar */}
{/* Navigation Bar */}
<nav className={layoutStyles.navigation}>
        <Home 
          className={`${layoutStyles['nav-icon']} text-[#dddddd]`} 
          size={30} 
        />
        <Bookmark 
          className={`${layoutStyles['nav-icon']} text-[#ff8533]`} 
          size={30} 
        />
        <MessageCircle 
          className={`${layoutStyles['nav-icon']} text-[#0d0d0d]`} 
          size={30} 
        />
        <Settings 
          className={`${layoutStyles['nav-icon']} text-gray-600`} 
          size={30} 
        />
      </nav>
</div>
      );
    };

  export default Navbar
      