import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
    id: string | number;
    name: string;
    price: number;
    originalPrice: number;
    category: string;
    image: string;
    tag?: string;
    purity?: string;
}

// Generate a unique visual style for each product based on its ID
function getImageVariation(id: string | number): React.CSSProperties {
    const idStr = String(id);
    // Create a simple hash from the id string
    let hash = 0;
    for (let i = 0; i < idStr.length; i++) {
        hash = ((hash << 5) - hash) + idStr.charCodeAt(i);
        hash |= 0;
    }
    const absHash = Math.abs(hash);

    // Vary hue slightly (0-30 degrees), brightness (95-115%), contrast (95-110%), saturation (90-120%)
    const hue = (absHash % 35);
    const brightness = 95 + (absHash % 20);
    const contrast = 95 + ((absHash >> 3) % 15);
    const saturate = 90 + ((absHash >> 5) % 30);

    // Vary crop position (different part of image shown)
    const posX = 30 + ((absHash >> 2) % 40); // 30%-70%
    const posY = 30 + ((absHash >> 4) % 40); // 30%-70%

    // Slight scale variation to show different "zoom" level
    const scale = 1.0 + ((absHash % 15) / 100); // 1.0 - 1.15

    return {
        filter: `hue-rotate(${hue}deg) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`,
        objectPosition: `${posX}% ${posY}%`,
        transform: `scale(${scale})`,
    };
}

const ProductCard = ({ id, name, price, originalPrice, category, image, tag, purity }: ProductCardProps) => {
    const navigate = useNavigate();
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    const imgStyle = getImageVariation(id);

    return (
        <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
            <div className="card-image-wrap">
                <img
                    src={image}
                    alt={name}
                    className="card-product-img"
                    loading="lazy"
                    style={imgStyle}
                />
                {tag && <span className="card-tag">{tag}</span>}
                <div className="card-top-actions">
                    <button className="wishlist-btn" onClick={(e) => { e.stopPropagation(); }}>♡</button>
                </div>
            </div>
            <div className="card-details">
                <p className="card-category">{category} {purity && `• ${purity}`}</p>
                <h3 className="card-title">{name}</h3>
                <div className="card-pricing">
                    <span className="current-price">₹{price.toLocaleString('en-IN')}</span>
                    <span className="original-price">₹{originalPrice.toLocaleString('en-IN')}</span>
                    {discount > 0 && <span className="discount-badge">{discount}% Off</span>}
                </div>
            </div>
            <div className="card-quick-actions">
                <button className="quick-action-btn" onClick={(e) => { e.stopPropagation(); navigate(`/product/${id}`); }}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
