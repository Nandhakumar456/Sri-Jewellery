import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * 20;
            containerRef.current.style.setProperty('--mouse-x', `${xPos}px`);
            containerRef.current.style.setProperty('--mouse-y', `${yPos}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" ref={containerRef}>
            {/* Cinematic Animated Video Background */}
            <div className="cinematic-bg">
                <div className="cinema-layer layer-1"></div>
                <div className="cinema-layer layer-2"></div>
                <div className="cinema-layer layer-3"></div>
                {/* Floating golden particles */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="gold-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${4 + Math.random() * 6}s`,
                        }}
                    />
                ))}
                {/* Light rays */}
                <div className="light-ray ray-1"></div>
                <div className="light-ray ray-2"></div>
                <div className="light-ray ray-3"></div>
            </div>

            {/* Overlay for readability */}
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <img src="/logo.png" alt="Sri Jewellery" className="hero-logo" />
                <h1 className="hero-title">
                    Where Elegance <br />
                    <span className="text-gradient-gold">Meets Eternity</span>
                </h1>
                <p className="hero-subtitle">
                    Discover our exclusive collection of fine gold &amp; silver jewelry, where traditional craftsmanship meets modern artistry.
                </p>
                <div className="hero-cta-group">
                    <button className="btn btn-primary" onClick={() => navigate('/gold')}>Gold Collection</button>
                    <button className="btn btn-secondary glass-panel" onClick={() => navigate('/silver')}>Silver Collection</button>
                </div>
            </div>

            <div className="hero-visuals">
                <div className="floating-item item-1 glass-panel">
                    <div className="item-glow"></div>
                    <div className="placeholder-image ring-icon">💍</div>
                    <div className="item-label">22k Gold</div>
                </div>
                <div className="floating-item item-2 glass-panel">
                    <div className="item-glow"></div>
                    <div className="placeholder-image necklace-icon">💎</div>
                    <div className="item-label">Diamonds</div>
                </div>
                <div className="floating-item item-3 glass-panel">
                    <div className="item-glow"></div>
                    <div className="placeholder-image earring-icon">✨</div>
                    <div className="item-label">Silver 925</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
