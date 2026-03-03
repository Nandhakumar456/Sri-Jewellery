import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product, quantity } = location.state || {};
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => { setIsSubmitting(false); setIsSuccess(true); }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="booking-page container success-view">
                <div className="success-card">
                    <div className="success-check">✓</div>
                    <h1>Booking Confirmed!</h1>
                    <p>Thank you for choosing Sri Jewellery. Our team will contact you shortly to finalize your order for <strong>{product?.name || 'your jewellery'}</strong>.</p>
                    <button className="pd-book-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page container">
            <div className="breadcrumb">
                <span onClick={() => navigate('/')}>Home</span> / <span className="current">Secure Booking</span>
            </div>

            <div className="booking-layout">
                <div className="booking-form-section">
                    <h2 className="section-title">Complete Your Booking</h2>
                    <p className="section-subtitle" style={{ marginBottom: '30px' }}>Securely reserve your handcrafted jewellery</p>

                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name *</label>
                            <input type="text" required placeholder="Enter your full name" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" required placeholder="you@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" required placeholder="+91 98765 43210" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea rows={3} placeholder="Enter your full delivery address"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Special Requests</label>
                            <textarea rows={3} placeholder="Ring size, engraving, custom requirements..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                        </button>
                    </form>
                </div>

                <div className="order-summary-section">
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-product">
                            {product?.image
                                ? <img src={product.image} alt={product.name} className="summary-img" />
                                : <span className="summary-icon">💎</span>
                            }
                            <div className="summary-info">
                                <h4>{product?.name || 'Jewellery Item'}</h4>
                                <p>Qty: {quantity || 1} • {product?.purity || '22Kt'}</p>
                            </div>
                            <span className="summary-price">₹{(product?.price || 0).toLocaleString('en-IN')}</span>
                        </div>
                        <div className="summary-rows">
                            <div className="summary-row"><span>Subtotal</span><span>₹{(product?.price || 0).toLocaleString('en-IN')}</span></div>
                            <div className="summary-row"><span>Shipping</span><span className="free-tag">FREE</span></div>
                            <div className="summary-row total"><span>Total</span><span>₹{(product?.price || 0).toLocaleString('en-IN')}</span></div>
                        </div>
                        <p className="summary-note">🔒 Secure booking. Payment details will be confirmed by our team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
