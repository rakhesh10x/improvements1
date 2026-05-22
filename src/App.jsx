import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIPage from './pages/AIPage';
import ProductPage from './pages/ProductPage';
import SpacePage from './pages/SpacePage';
import ModelsPage from './pages/ModelsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<AIPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/try" element={<SpacePage />} />
      <Route path="/models" element={<ModelsPage />} />
    </Routes>
  );
};

export default App;
