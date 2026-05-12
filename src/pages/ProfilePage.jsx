import { useParams, Link } from 'react-router-dom';
import { BadgeCheck, MapPin, Scissors, Calendar, ShoppingCart } from 'lucide-react';
import './ProfilePage.css';

const PROFILES = {
  '1': {
    id: '1', name: 'Ramesh', craft: 'Block Printing', location: 'Jaipur, Rajasthan',
    experience: '12 Years', bio: 'Living in the heart of Rajasthan, Ramesh weaves stories through his blocks. Passed down through three generations, his craft uses natural indigo and organic cotton.',
    techniques: ['Hand Carving', 'Natural Dyeing', 'Solar Drying'], image: '/artisans 1.jpg',
    products: [
      { id: 'p1', name: 'Heritage Collection', price: '₹2,499', img: '/product 1.jpg' },
    ]
  },
  '2': {
    id: '2', name: 'Sita', craft: 'Terracotta Pottery', location: 'Bishnupur, West Bengal',
    experience: '15 Years', bio: 'Sita has been molding clay for 15 years, specializing in intricate Bankura horses. The earth from her village is considered sacred for this art.',
    techniques: ['Coiling', 'Pinch Pottery', 'Wood Firing'], image: '/artisan 2.jpg',
    products: [
      { id: 'p2', name: 'Artisan Decor Piece', price: '₹899', img: '/product 2.jpg' },
    ]
  },
  '3': {
    id: '3', name: 'Mohan', craft: 'Wood Carving', location: 'Saharanpur, UP',
    experience: '20 Years', bio: 'Mohan breathes life into sheesham wood, a tradition maintained in Saharanpur for over 200 years. Every cut tells a tale of devotion.',
    techniques: ['Relief Carving', 'Jali Work', 'Natural Polishing'], image: '/artisan3.jpg',
    products: [
      { id: 'p3', name: 'Handcrafted Marvel', price: '₹1,599', img: '/product3.webp' },
    ]
  },
  '4': {
    id: '4', name: 'Anjali', craft: 'Pattachitra Art', location: 'Puri, Odisha',
    experience: '8 Years', bio: 'Anjali paints mythological narratives on cloth, a deeply spiritual craft from Odisha. Her colors are derived directly from natural stones and shells.',
    techniques: ['Natural Color Making', 'Fine Brushwork', 'Canvas Prep'], image: '/artisan 4.jpg',
    products: [
      { id: 'p6', name: 'Krishna Leela Frame', price: '₹3,400', img: 'https://images.unsplash.com/photo-1605336118465-95059952ccba?q=80&w=600&auto=format&fit=crop' },
    ]
  }
};

const ProfilePage = () => {
  const { artisanId } = useParams();
  const profile = PROFILES[artisanId] || PROFILES['1'];

  return (
    <div className="profile-page animate-fade-in">
      {/* HEADER */}
      <div className="profile-header">
        <div className="profile-cover">
          <img src={profile.image} alt={profile.name} className="cover-img" />
          <div className="cover-overlay"></div>
        </div>
        
        <div className="profile-info-card glass-card">
          <div className="profile-avatar">
            <img src={profile.image} alt={profile.name} />
          </div>
          <div className="profile-title">
            <h1>{profile.name} <BadgeCheck className="verified-badge" size={24} /></h1>
            <p className="craft-tag"><Scissors size={14}/> {profile.craft}</p>
            <p className="location-tag"><MapPin size={14}/> {profile.location}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="profile-content-grid">
          
          {/* STORY & DETAILS */}
          <div className="profile-left-col">
            <section className="bio-section glass-card">
              <h2>The Story</h2>
              <p>{profile.bio}</p>
              
              <div className="details-tags">
                <div className="detail-tag">
                  <Calendar size={16} /> <span>{profile.experience} Experience</span>
                </div>
                {profile.techniques.map(tech => (
                  <div key={tech} className="detail-tag highlight-tag">
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* PRODUCTS (WHERE MONEY HAPPENS) */}
          <div className="profile-right-col">
            <h2 className="section-title gradient-text">Authentic Products</h2>
            <div className="shop-grid">
              {profile.products.map(product => (
                <div key={product.id} className="shop-card glass-card">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt={product.name} className="shop-img" />
                  </Link>
                  <div className="shop-info">
                    <Link to={`/product/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <div className="shop-footer">
                      <span className="shop-price">{product.price}</span>
                      <button className="btn-icon">
                        <ShoppingCart size={18} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
