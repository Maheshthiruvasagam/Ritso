import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FashionHomepage from './components/FashionHomepage';
import ShopPage from './components/SHOP';
import FeaturesPage from './components/FEATURES';
import ContactPage from './components/CONTACT';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FashionHomepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;