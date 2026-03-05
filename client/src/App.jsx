import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { auth, setToken, getToken } from './api';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophers from './pages/Philosophers';
import PhilosopherDetail from './pages/PhilosopherDetail';
import Concepts from './pages/Concepts';
import ConceptDetail from './pages/ConceptDetail';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Compare from './pages/Compare';
import Stats from './pages/Stats';
import ChatBox from './components/ChatBox';
import ScrollToTop from './components/ScrollToTop';
import PrivacyBanner from './components/PrivacyBanner';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  // Handle OAuth redirect with JWT token
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      // Store token from OAuth redirect
      setToken(token);
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname || '/');
    }

    // Fetch user from stored token
    auth.me().then(({ user: u }) => {
      setUser(u || null);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    auth.logout();
    setUser(null);
  };

  return (
    <div className="app-root">
      <a href="#main-content" className="skip-link">Chuyển đến nội dung chính</a>
      <Layout user={user} loading={loading} onLogout={handleLogout} />
      <main id="main-content" className="app-main">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/triet-gia" element={<Philosophers />} />
          <Route path="/triet-gia/:slug" element={<PhilosopherDetail user={user} />} />
          <Route path="/khai-niem" element={<Concepts />} />
          <Route path="/khai-niem/:slug" element={<ConceptDetail user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/trac-nghiem" element={<Quiz />} />
          <Route path="/so-sanh" element={<Compare />} />
          <Route path="/thong-ke" element={<Stats />} />
        </Routes>
      </main>
      <Footer />
      <ChatBox user={user} />
      <ScrollToTop />
      <PrivacyBanner />
    </div>
  );
}

export default App;
