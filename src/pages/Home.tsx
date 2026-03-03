import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { goldProducts, silverProducts } from '../data/products';
import './Home.css';

// Featured products
const featured = [
    goldProducts[0], goldProducts[15], silverProducts[0], goldProducts[30],
    goldProducts[45], goldProducts[2], silverProducts[15], goldProducts[80],
];

// Hero slides
const heroSlides = [
    {
        title: 'Bridal Collection 2026',
        subtitle: 'Begin your forever with timeless elegance. Explore our exquisite bridal jewellery curated for your special day.',
        cta: 'Explore Bridal',
        ctaLink: '/gold',
        gradient: 'linear-gradient(135deg, #2d0a1a 0%, #5c1232 40%, #8b1a3a 100%)',
        accent: '💍',
    },
    {
        title: 'Pure Gold, Pure Trust',
        subtitle: 'Discover BIS Hallmarked 22Kt & 24Kt gold jewellery. Tradition meets modern craftsmanship.',
        cta: 'Shop Gold',
        ctaLink: '/gold',
        gradient: 'linear-gradient(135deg, #1a1005 0%, #3d2a0a 40%, #6b4f1a 100%)',
        accent: '✨',
    },
    {
        title: 'Silver Elegance',
        subtitle: 'Premium 925 Sterling Silver collection — from contemporary designs to traditional masterpieces.',
        cta: 'Shop Silver',
        ctaLink: '/silver',
        gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 40%, #2a2a5c 100%)',
        accent: '💎',
    },
];

// Categories
const categories = [
    { name: 'Necklaces', icon: '📿', desc: 'Heritage & Modern', link: '/gold', bg: 'linear-gradient(135deg, #fff5e6, #ffe8c8)' },
    { name: 'Rings', icon: '💍', desc: 'Engagement & Daily', link: '/gold', bg: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' },
    { name: 'Earrings', icon: '✨', desc: 'Studs & Jhumkas', link: '/gold', bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' },
    { name: 'Bangles', icon: '⭕', desc: 'Bridal & Everyday', link: '/gold', bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' },
    { name: 'Chains', icon: '⛓️', desc: 'Men & Women', link: '/gold', bg: 'linear-gradient(135deg, #fff3e0, #ffe0b2)' },
    { name: 'Pendants', icon: '💎', desc: 'Religious & Fashion', link: '/gold', bg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)' },
    { name: 'Bracelets', icon: '🌟', desc: 'Gold & Silver', link: '/silver', bg: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)' },
    { name: 'Anklets', icon: '🦶', desc: 'Traditional Silver', link: '/silver', bg: 'linear-gradient(135deg, #fce4ec, #f48fb1)' },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Auto slide
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    // Scroll to top button
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="home-page">
            {/* ========== HERO CAROUSEL ========== */}
            <section className="hero-carousel">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ background: slide.gradient }}
                    >
                        {/* Animated particles */}
                        <div className="slide-particles">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="sparkle-particle"
                                    style={{
                                        left: `${5 + Math.random() * 90}%`,
                                        top: `${10 + Math.random() * 80}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${3 + Math.random() * 4}s`,
                                        fontSize: `${0.8 + Math.random() * 1.2}rem`,
                                        opacity: 0.15 + Math.random() * 0.2,
                                    }}
                                >{slide.accent}</div>
                            ))}
                        </div>

                        <div className="hero-slide-content container">
                            <div className="slide-text">
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <Link to={slide.ctaLink} className="btn-gold slide-cta">
                                    {slide.cta}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel dots */}
                <div className="carousel-dots">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Carousel arrows */}
                <button className="carousel-arrow prev" onClick={() => setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="carousel-arrow next" onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
            </section>

            {/* ========== SHOP BY CATEGORY ========== */}
            <section className="category-section">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Explore our curated collections of fine jewellery</p>
                    </div>
                    <div className="category-grid">
                        {categories.map(cat => (
                            <Link to={cat.link} key={cat.name} className="category-card" style={{ background: cat.bg }}>
                                <div className="cat-card-icon">{cat.icon}</div>
                                <div className="cat-card-info">
                                    <h3 className="cat-card-name">{cat.name}</h3>
                                    <span className="cat-card-desc">{cat.desc}</span>
                                </div>
                                <svg className="cat-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== BRIDAL COLLECTION BANNER ========== */}
            <section className="bridal-banner">
                <div className="bridal-overlay"></div>
                <div className="bridal-content container">
                    <span className="bridal-tag">Exclusive Collection</span>
                    <h2 className="bridal-title">Bridal Jewellery</h2>
                    <p className="bridal-desc">Make your special day extraordinary with our handcrafted bridal sets — from temple necklaces to grand harams, every piece tells your story.</p>
                    <Link to="/gold" className="btn-gold">
                        Explore Bridal Collection
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>

            {/* ========== TRENDING NOW ========== */}
            <section className="trending-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Trending Now</h2>
                            <p className="section-subtitle">Most loved pieces by our customers</p>
                        </div>
                        <Link to="/gold" className="view-all-link">
                            View All
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <div className="product-grid">
                        {featured.map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== DIAMOND SHOWCASE ========== */}
            <section className="diamond-showcase">
                <div className="container">
                    <div className="diamond-split">
                        <div className="diamond-text">
                            <span className="diamond-tag">Premium Collection</span>
                            <h2 className="diamond-title">Diamond Jewellery</h2>
                            <p className="diamond-desc">Crafted for those who wear their brilliance with pride. IGI & GIA certified diamonds set in 18Kt & 22Kt gold — where fire meets finesse.</p>
                            <div className="diamond-features">
                                <div className="diamond-feature">
                                    <span className="feature-icon">🔬</span>
                                    <div>
                                        <strong>Certified</strong>
                                        <span>IGI & GIA</span>
                                    </div>
                                </div>
                                <div className="diamond-feature">
                                    <span className="feature-icon">💎</span>
                                    <div>
                                        <strong>Conflict Free</strong>
                                        <span>Ethically Sourced</span>
                                    </div>
                                </div>
                                <div className="diamond-feature">
                                    <span className="feature-icon">🛡️</span>
                                    <div>
                                        <strong>Lifetime Warranty</strong>
                                        <span>Free Maintenance</span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/gold" className="btn-primary">
                                Shop Diamonds
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                        <div className="diamond-visual">
                            <div className="diamond-glow"></div>
                            <div className="diamond-emoji">💎</div>
                            <div className="diamond-ring">💍</div>
                            <div className="diamond-sparkle">✨</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TRUST STRIP ========== */}
            <section className="trust-strip">
                <div className="container">
                    <div className="trust-items">
                        <div className="trust-item">
                            <div className="trust-icon-wrap">🏅</div>
                            <div>
                                <strong>BIS Hallmarked</strong>
                                <p>100% Certified Gold</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon-wrap">🚚</div>
                            <div>
                                <strong>Insured Shipping</strong>
                                <p>Free on orders above ₹10,000</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon-wrap">🔄</div>
                            <div>
                                <strong>Easy Returns</strong>
                                <p>15-day return policy</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon-wrap">💎</div>
                            <div>
                                <strong>Certified Diamonds</strong>
                                <p>IGI & GIA Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== NEWSLETTER ========== */}
            <section className="newsletter-section">
                <div className="container">
                    <div className="newsletter-inner">
                        <div className="newsletter-text">
                            <h3>Stay Updated</h3>
                            <p>Get exclusive offers, new collection updates, and gold rate alerts straight to your inbox.</p>
                        </div>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                            <button type="submit" className="btn-gold newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ========== FLOATING BUTTONS ========== */}
            <div className="floating-actions">
                <a href="https://wa.me/919942417666" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp-btn" title="Chat on WhatsApp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
                <a href="tel:+919942417666" className="float-btn call-btn" title="Call us">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </a>
                {showScrollTop && (
                    <button className="float-btn scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
