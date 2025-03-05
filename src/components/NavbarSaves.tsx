import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const NavbarSaves = () => {


  const [activeIcon, setActiveIcon] = useState<string>('bookmark');


  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };
  
  return (

<div>
    {/* Navbar */}
{/* Navigation Bar */}
{/* <nav className={layoutStyles.navigation}>
        <Home 
          className={`${layoutStyles['nav-icon-selected']} text-[#dddddd]`} 
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
      </nav> */}

<nav className={layoutStyles.navigation}>
      {/* Home icon, linking to the root route ("/") */}
      <Link to="/" onClick={() => handleIconClick('home')}>
        <Home
          className={`${layoutStyles['nav-icon']} ${activeIcon === 'home' ? layoutStyles['nav-icon-selected'] : 'text-[#dddddd]'}`}
          size={30}
        />
      </Link>

      {/* Bookmark icon, linking to the saved route ("/saved") */}
      <Link to="/saved" onClick={() => handleIconClick('bookmark')}>
        <Bookmark
          className={`${layoutStyles['nav-icon']} ${activeIcon === 'bookmark' ? layoutStyles['nav-icon-selected'] : 'text-[#ff8533]'}`}
          size={30}
        />
      </Link>

      {/* MessageCircle icon, linking to a messages route ("/messages") */}
      <Link to="/messages" onClick={() => handleIconClick('message')}>
        <MessageCircle
          className={`${layoutStyles['nav-icon']} ${activeIcon === 'message' ? layoutStyles['nav-icon-selected'] : 'text-[#0d0d0d]'}`}
          size={30}
        />
      </Link>

      {/* Settings icon, linking to settings route ("/settings") */}
      <Link to="/settings" onClick={() => handleIconClick('settings')}>
        <Settings
          className={`${layoutStyles['nav-icon']} ${activeIcon === 'settings' ? layoutStyles['nav-icon-selected'] : 'text-gray-600'}`}
          size={30}
        />
      </Link>
    </nav>
</div>
      );
    };

  export default NavbarSaves
      