import React from 'react';
import './Showcase.css';

const products = [
    { id: 1, name: 'The Celestial Necklace', price: '$4,200', category: 'Necklaces', image: '✨' },
    { id: 2, name: 'Aura Diamond Ring', price: '$2,800', category: 'Rings', image: '💍' },
    { id: 3, name: 'Nova Gold Earrings', price: '$1,500', category: 'Earrings', image: '💎' },
    { id: 4, name: 'Eclipse Bracelet', price: '$3,100', category: 'Bracelets', image: '🌟' },
];

const Showcase: React.FC = () => {
    return (
        <section className="showcase" id="collections">
            <div className="showcase-header">
                <h2 className="section-title">
                    Curated <span className="text-gradient-gold">Masterpieces</span>
                </h2>
                <p className="section-subtitle">A glimpse into our finest creations.</p>
            </div>

            <div className="bento-grid">
                {products.map((product, index) => (
                    <div key={product.id} className={`bento-item item-${index} glass-panel`}>
                        <div className="product-image-container">
                            <div className="placeholder-product-img">{product.image}</div>
                        </div>
                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                        <div className="hover-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
