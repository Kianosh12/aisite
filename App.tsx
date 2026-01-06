import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Wrapper component to conditionally render Layout
const AppContent: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-dark-bg min-h-screen text-gray-100 font-sans selection:bg-brand-500/30 selection:text-white flex flex-col">
      {!isAuthPage && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;