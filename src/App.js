// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent from './components/NavbarComponent';
import AirportService from './services/AirportService';
import './App.css'; // Import your main CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <HeaderComponent userName="Your Name" />
        <div className="content-container">
          <NavbarComponent />
          <main className="main-content">
            <Routes>
              <Route path="/services/airport" element={<AirportService />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
