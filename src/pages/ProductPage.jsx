import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, CreditCard, Award, PlayCircle } from 'lucide-react';
import './ProductPage.css';

const MOCK_PRODUCT = {
  id: 'p1',
  name: 'Heritage Collection',
  price: '₹2,499',
  description: 'A beautiful masterpiece handcrafted with precision. This item tells the story of traditional craftsmanship from its origins. Made with 100% authentic materials, perfect for your collection.',
  images: [
    '/product 1.jpg',
    '/product 2.jpg'
  ],
  artisan: {
    id: '1',
    name: 'Ramesh',
    location: 'Jaipur',
    experience: '12 years experience'
  }
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCT; // mock data

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-page container animate-fade-in">
      <div className="product-grid">
        
        {/* Images */}
        <div className="product-gallery">
          <img src={product.images[0]} alt={product.name} className="main-image glass-card" />
        </div>

        {/* Details */}
        <div className="product-details">
          <h1 className="product-title gradient-text">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          
          <Link to={`/profile/${product.artisan.id}`} className="artisan-credit">
            Handmade by <span>{product.artisan.name}</span>
          </Link>

          <p className="product-description">{product.description}</p>

          {/* Identity Section (USP) */}
          <div className="identity-section glass-card">
            <h3 className="section-subtitle"><Award size={20} className="icon-gold"/> The Maker's Mark</h3>
            <ul className="maker-details">
              <li><strong>Made by:</strong> {product.artisan.name} ({product.artisan.location})</li>
              <li><strong>Craftsmanship:</strong> {product.artisan.experience}</li>
            </ul>
            <Link to="/stories" className="btn-outline view-story-btn">
              <PlayCircle size={18} /> View Artisan's Story
            </Link>
          </div>

          <div className="action-buttons">
            <button className="btn-outline btn-large" onClick={handleAddToCart}>
              <ShoppingBag size={20} /> Add to Cart
            </button>
            <button className="btn-primary btn-large" onClick={() => navigate('/checkout')}>
              <CreditCard size={20} /> Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
