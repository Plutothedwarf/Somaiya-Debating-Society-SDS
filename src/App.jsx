import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import MotionTicker from './components/MotionTicker';
import Footer from './components/Footer';

// Pages
import Home    from './pages/Home';
import About   from './pages/About';
import Team    from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Events    from './pages/Events';
import Resources from './pages/Resources';
import JoinUs    from './pages/JoinUs';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      
      {/* Dynamic architectural border frame around the entire screen */}
      <div className="site-border-frame site-border-frame-top" />
      <div className="site-border-frame site-border-frame-bottom" />
      <div className="site-border-frame site-border-frame-left" />
      <div className="site-border-frame site-border-frame-right" />

      <MotionTicker />
      <Navbar />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/team"      element={<Team />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/events"    element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join"      element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
