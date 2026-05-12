import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import StoriesPage from './pages/StoriesPage';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import { Home, Compass, ShoppingBag, User } from 'lucide-react';
import './App.css';

const TopNav = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="top-nav glass-card">
      <div className="nav-container">
        <Link to="/" className="logo gradient-text" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '2px' }}>
          KAHAANI
        </Link>
        <div className="nav-links">
          <Link to="/stories" className="nav-link">Stories</Link>
          <a href="/#artisans" className="nav-link">Artisans</a>
        </div>
        <div className="nav-actions">
          {currentUser ? (
            <div className="user-profile">
              <span style={{ fontSize: '0.9rem', marginRight: '1rem', color: 'var(--text-secondary)' }}>
                Hi, {currentUser.user_metadata?.name || currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Creator'}
              </span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/auth" className="nav-auth-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <User size={18} style={{ marginRight: '8px' }} />
              Sign In
            </Link>
          )}
          <Link to="/cart" className="cart-icon" style={{ marginLeft: '1.5rem' }}>
            <ShoppingBag size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

// Basic bottom navigation for mobile-first feel
const BottomNav = () => (
  <nav className="bottom-nav glass-card">
    <Link to="/" className="nav-item">
      <Home size={24} />
      <span>Home</span>
    </Link>
    <Link to="/stories" className="nav-item">
      <Compass size={24} />
      <span>Stories</span>
    </Link>
    <Link to="/cart" className="nav-item">
      <ShoppingBag size={24} />
      <span>Cart</span>
    </Link>
  </nav>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                background: 'rgba(20, 20, 20, 0.9)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              },
            }} 
          />
          <TopNav />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/profile/:artisanId" element={<ProfilePage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
