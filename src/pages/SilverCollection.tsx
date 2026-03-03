import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { silverProducts } from '../data/products';

const SilverCollection = () => {
    const [sortBy, setSortBy] = useState('featured');
    const [filterCategory, setFilterCategory] = useState('All');

    const categories = ['All', ...new Set(silverProducts.map(p => p.category))];

    const filtered = filterCategory === 'All'
        ? silverProducts
        : silverProducts.filter(p => p.category === filterCategory);

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'low') return a.price - b.price;
        if (sortBy === 'high') return b.price - a.price;
        return 0;
    });

    return (
        <div className="collection-page container">
            <div className="collection-header">
                <div>
                    <h1 className="section-title">Silver Jewellery</h1>
                    <p className="section-subtitle">Elegant 92.5 sterling silver for every occasion</p>
                </div>
            </div>

            <div className="category-chips">
                {categories.map(cat => (
                    <button key={cat} className={`chip ${filterCategory === cat ? 'active' : ''}`} onClick={() => setFilterCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="filter-sort-bar">
                <button className="filter-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /></svg>
                    Filters
                </button>
                <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="featured">Sort by: Featured</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
                <span className="result-count">{sorted.length} Products</span>
            </div>

            <div className="product-grid">
                {sorted.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default SilverCollection;
