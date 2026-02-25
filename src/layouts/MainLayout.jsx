// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout() {
  return (
    <div className="app-wrapper">  {/* optional class for styling */}
      <Header />
      
      <main className="content" id="content">
        <Outlet />   {/* ← yahan se page content aa jayega */}
      </main>
      
      <Footer />
    </div>
  );
}