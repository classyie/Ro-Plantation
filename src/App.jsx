import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Catalogue from './pages/Catalogue';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-[#EFF6FF] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetails />} /> {/* Product Details */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
