import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = id ? getProductById(id) : null;
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="product-details-page container">
                <p>Product not found. <button onClick={() => navigate('/gold')}>Browse Collection</button></p>
            </div>
        );
    }

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="product-details-page container">
            <div className="breadcrumb">
                <span onClick={() => navigate('/')}>Home</span> / <span onClick={() => navigate(product.purity?.includes('Silver') ? '/silver' : '/gold')}>{product.purity?.includes('Silver') ? 'Silver' : 'Gold'} Jewellery</span> / <span className="current">{product.name}</span>
            </div>

            <div className="pd-grid">
                <div className="pd-image-section">
                    <div className="pd-main-image">
                        <img src={product.image} alt={product.name} className="pd-product-img" />
                    </div>
                </div>

                <div className="pd-info-section">
                    <span className="pd-category">{product.category} • {product.purity}</span>
                    <h1 className="pd-title">{product.name}</h1>

                    <div className="pd-pricing">
                        <span className="pd-price">₹{product.price.toLocaleString('en-IN')}</span>
                        <span className="pd-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        {discount > 0 && <span className="pd-discount">{discount}% Off</span>}
                    </div>

                    <p className="pd-tax-note">Inclusive of all taxes</p>

                    <div className="pd-description">
                        <h3>Product Details</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="pd-specs">
                        <div className="spec-row"><span>Metal</span><span>{product.purity?.includes('Silver') ? 'Silver' : 'Gold'}</span></div>
                        <div className="spec-row"><span>Purity</span><span>{product.purity}</span></div>
                        <div className="spec-row"><span>Certification</span><span>BIS Hallmarked</span></div>
                    </div>

                    <div className="pd-actions">
                        <div className="pd-qty">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className="pd-book-btn" onClick={() => navigate('/booking', { state: { product, quantity } })}>
                            Book Now
                        </button>
                        <button className="pd-wishlist-btn">♡ Wishlist</button>
                    </div>

                    <div className="pd-trust">
                        <span>🏅 BIS Hallmarked</span>
                        <span>🚚 Free Delivery</span>
                        <span>🔄 15-Day Returns</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
