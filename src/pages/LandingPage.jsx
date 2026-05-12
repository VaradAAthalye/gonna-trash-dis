import { Link } from 'react-router-dom';
import { Play, ArrowRight, ShieldCheck, Heart, Users } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page animate-fade-in">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title gradient-text" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '4px' }}>KAHAANI</h1>
          <p className="tagline">हर कण की कहानी</p>
          <div className="hero-ctas">
            <Link to="/stories" className="btn-primary flex-center">
              <Play size={18} style={{ marginRight: '8px' }} /> Explore Stories
            </Link>
            <a href="#artisans" className="btn-outline">Discover Artisans</a>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES (PREVIEW STRIP) */}
      <section className="stories-strip-section container">
        <h2 className="section-title">Artisan Stories</h2>
        <div className="stories-strip">
          {[
            { id: '1', name: 'Ramesh', img: '/artisans 1.jpg' },
            { id: '2', name: 'Sita', img: '/artisan 2.jpg' },
            { id: '3', name: 'Mohan', img: '/artisan3.jpg' },
            { id: '4', name: 'Anjali', img: '/artisan 4.jpg' },
          ].map((artisan) => (
            <Link to="/stories" key={artisan.id} className="story-thumb-wrapper">
              <div className="story-thumb gradient-ring">
                <img 
                  src={artisan.img} 
                  alt={artisan.name} 
                  className="story-img"
                />
              </div>
              <span className="story-name">{artisan.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY KAHAANI */}
      <section className="why-kahani-section container">
        <h2 className="section-title text-center">Why KAHAANI?</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <Heart className="feature-icon" size={40} />
            <h3>Every product has a face</h3>
            <p>Connect with the human behind your purchase.</p>
          </div>
          <div className="feature-card glass-card">
            <Users className="feature-icon" size={40} />
            <h3>Direct from artisan</h3>
            <p>No middlemen. Fair prices for creators and buyers.</p>
          </div>
          <div className="feature-card glass-card">
            <ShieldCheck className="feature-icon" size={40} />
            <h3>Authenticity Guaranteed</h3>
            <p>Verified heritage crafts straight from the source.</p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTISANS */}
      <section id="artisans" className="featured-artisans-section container">
        <div className="section-header">
          <h2 className="section-title">Featured Artisans</h2>
          <Link to="/artisans" className="view-all">View All <ArrowRight size={16} /></Link>
        </div>
        <div className="artisans-grid">
          {[
            { id: '1', name: 'Ramesh', craft: 'Block Printing', location: 'Jaipur, RJ', img: '/artisans 1.jpg' },
            { id: '2', name: 'Sita', craft: 'Terracotta Pottery', location: 'Bishnupur, WB', img: '/artisan 2.jpg' },
            { id: '3', name: 'Mohan', craft: 'Wood Carving', location: 'Saharanpur, UP', img: '/artisan3.jpg' },
            { id: '4', name: 'Anjali', craft: 'Pattachitra Art', location: 'Puri, OD', img: '/artisan 4.jpg' },
          ].map((artisan) => (
            <Link to={`/profile/${artisan.id}`} key={artisan.id} className="artisan-card glass-card">
              <img src={artisan.img} alt={artisan.name} className="artisan-card-img" />
              <div className="artisan-card-info">
                <h3>{artisan.name}</h3>
                <p className="craft">{artisan.craft}</p>
                <p className="location">{artisan.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="trending-products-section container">
        <h2 className="section-title">Trending Products</h2>
        <div className="products-grid">
          {[
            { id: 'p1', name: 'Heritage Collection', price: '₹2,499', artisan: 'Ramesh', img: '/product 1.jpg' },
            { id: 'p2', name: 'Artisan Decor Piece', price: '₹899', artisan: 'Sita', img: '/product 2.jpg' },
            { id: 'p3', name: 'Handcrafted Marvel', price: '₹1,599', artisan: 'Mohan', img: '/product3.webp' },
          ].map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card glass-card">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <div className="product-header">
                  <h4>{product.name}</h4>
                  <span className="price">{product.price}</span>
                </div>
                <p className="product-artisan">by {product.artisan}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
