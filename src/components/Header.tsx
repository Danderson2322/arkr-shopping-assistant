import React, { useState } from 'react';
import { Home, Bookmark, MessageCircle, Settings, Facebook, Instagram, Twitter } from 'lucide-react';
import layoutStyles from '../styles/Layout.module.css';
import compactStyles from '../styles/CompactLayout.module.css';

import logo from '../images/logo.png'; // Import the image


const Header = () => {
  
  return (

<div>
    {/* Header */}
<header className={layoutStyles.header}>


<div className={layoutStyles.logoContainer}>
<img src={logo} alt="Logo" className={layoutStyles.logo}/>

  ARKR
  </div>

</header>
</div>
      );
    };

  export default Header
      