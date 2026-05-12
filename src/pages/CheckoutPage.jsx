import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = details, 2 = success

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="checkout-page container flex-center success-view animate-fade-in">
        <CheckCircle size={80} color="#10b981" className="success-icon" />
        <h1 className="gradient-text">Order Successful!</h1>
        <p>Your beautiful KAHAANI product is being prepared by the artisan.</p>
        <button className="btn-primary mt-2" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page container animate-fade-in">
      <h1 className="page-title text-center">Complete Your Purchase</h1>
      
      <div className="checkout-form-container glass-card">
        <form onSubmit={handlePlaceOrder} className="checkout-form">
          <div className="form-section">
            <h3>Shipping Details</h3>
            
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" required placeholder="+91 9876543210" />
            </div>
            
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea required rows="3" placeholder="123, Heritage Street, City..."></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className="payment-radio">
                <input type="radio" name="payment" value="upi" defaultChecked />
                <span>UPI ID</span>
              </label>
              <label className="payment-radio">
                <input type="radio" name="payment" value="card" />
                <span>Credit / Debit Card</span>
              </label>
              <label className="payment-radio">
                <input type="radio" name="payment" value="cod" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full submit-btn">
            Place Order (Fake)
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
