// src/components/NavbarComponent.js
import React from 'react';
import { View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import './NavbarComponent.css'; // Import your CSS file for Navbar styling

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <View paddingY="size-200">
        <Link to="/services/airport">Airport</Link>
      </View>
    </nav>
  );
};

export default NavbarComponent;
