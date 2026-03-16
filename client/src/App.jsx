import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import { auth, setToken, getToken, stats as statsApi } from './api';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Tự động cuộn lên đầu trang + track pageview khi đổi route
function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Track page view (fire-and-forget)
    statsApi.track(pathname);
  }, [pathname]);
  return null;
}

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Philosophers = lazy(() => import('./pages/Philosophers'));
const PhilosopherDetail = lazy(() => import('./pages/PhilosopherDetail'));
const Concepts = lazy(() => import('./pages/Concepts'));
const ConceptDetail = lazy(() => import('./pages/ConceptDetail'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Quiz = lazy(() => import('./pages/Quiz'));
const Compare = lazy(() => import('./pages/Compare'));
const Stats = lazy(() => import('./pages/Stats'));
const Lessons = lazy(() => import('./pages/Lessons'));
const LessonDetail = lazy(() => import('./pages/LessonDetail'));
const LessonQuiz = lazy(() => import('./pages/LessonQuiz'));
const ChatBox = lazy(() => import('./components/ChatBox'));
const PrivacyBanner = lazy(() => import('./components/PrivacyBanner'));

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
      <ScrollToTopOnNav />
      <a href="#main-content" className="skip-link">Chuyển đến nội dung chính</a>
      <Layout user={user} loading={loading} onLogout={handleLogout} />
      <main id="main-content" className="app-main">
        <Suspense fallback={<div className="loading-wrap"><div className="loading-spinner" aria-label="Đang tải" /><span className="loading-text">Đang tải...</span></div>}>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/triet-gia" element={<Philosophers />} />
            <Route path="/triet-gia/:slug" element={<PhilosopherDetail user={user} />} />
            <Route path="/khai-niem" element={<Concepts />} />
            <Route path="/khai-niem/:slug" element={<ConceptDetail user={user} />} />
            <Route path="/bai-hoc" element={<Lessons />} />
            <Route path="/bai-hoc/:slug" element={<LessonDetail />} />
            <Route path="/bai-hoc/:slug/quiz" element={<LessonQuiz />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/trac-nghiem" element={<Quiz />} />
            <Route path="/so-sanh" element={<Compare />} />
            <Route path="/thong-ke" element={<Stats />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatBox user={user} />
      </Suspense>
      <ScrollToTop />
      <Suspense fallback={null}>
        <PrivacyBanner />
      </Suspense>
    </div>
  );
}

export default App;
