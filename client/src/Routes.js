// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MacBookPage from './MacBookPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/macbooks" element={<MacBookPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
