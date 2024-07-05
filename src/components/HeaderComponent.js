// src/components/HeaderComponent.js
import React from 'react';
import { View } from '@adobe/react-spectrum';

const HeaderComponent = ({ userName }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <View>
        <h1>Hava Havai</h1>
      </View>
      <View>
        <img
          src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707901613/eewotdexfwnqkebav7uw.jpg"
          alt="Profile"
          style={{ borderRadius: '50%', width: '50px', height: '50px' }}
        />
      </View>
    </header>
  );
};

export default HeaderComponent;
