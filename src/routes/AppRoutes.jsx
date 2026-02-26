// src/routes/AppRoutes.jsx (jo tune pehle banaya tha)
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';  // ← import kar
import ProductDetail from '../components/ProductDetail.jsx';
import Home from '../Pages/Home.jsx';
// import Category from '../pages/Category.jsx';
import Cart from '../components/Cart.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>   {/* ← sabko yeh layout wrap karega */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/categories" element={<Category />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* aur jo bhi pages hain sab yahan daal */}
      </Route>
    </Routes>
  );
}