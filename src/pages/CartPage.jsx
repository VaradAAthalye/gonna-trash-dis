import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import './CartPage.css';

const MOCK_CART = [
  {
    id: 'p1',
    name: 'Heritage Collection',
    price: 2499,
    quantity: 1,
    artisan: 'Ramesh',
    img: '/product 1.jpg'
  }
];

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(MOCK_CART);

  const updateQuantity = (id, delta) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQ = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQ };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page container flex-center empty-cart animate-fade-in">
        <h2>Your Cart is Empty</h2>
        <p>Discover beautiful handcrafted products by authentic artisans.</p>
        <Link to="/" className="btn-primary mt-2">Explore KAHAANI</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container animate-fade-in">
      <h1 className="page-title">Your Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item glass-card">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="artisan-name">by {item.artisan}</p>
                <div className="price">₹{item.price.toLocaleString()}</div>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16}/></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16}/></button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary glass-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="gradient-text">₹{total.toLocaleString()}</span>
          </div>

          <button 
            className="btn-primary w-full checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout <ArrowRight size={18} style={{marginLeft: '8px'}} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
