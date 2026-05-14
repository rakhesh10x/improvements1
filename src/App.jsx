import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIPage from './pages/AIPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<AIPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
