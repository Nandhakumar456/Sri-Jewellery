import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login/register
        navigate('/');
    };

    return (
        <div className="login-page">
            {/* Background particles */}
            <div className="login-particles">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="login-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 6}s`,
                            fontSize: `${1.2 + Math.random() * 1.5}rem`,
                            opacity: 0.1 + Math.random() * 0.15,
                        }}
                    >
                        {['💍', '💎', '✨', '⭐', '🌟'][i % 5]}
                    </div>
                ))}
            </div>

            <div className="login-container">
                <div className="login-left">
                    <img src="/logo.png" alt="Sri Jewellery" className="login-logo" />
                    <h1>Welcome to<br />Sri Jewellery</h1>
                    <p>Your trusted destination for fine gold & silver jewellery since generations.</p>
                    <div className="login-features">
                        <div className="login-feature">🏅 BIS Hallmarked Gold</div>
                        <div className="login-feature">🚚 Free Pan-India Delivery</div>
                        <div className="login-feature">🔄 Easy 15-Day Returns</div>
                    </div>
                </div>

                <div className="login-right">
                    <div className="login-card">
                        <div className="login-tabs">
                            <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
                            <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Register</button>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your full name" value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="you@example.com" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            {!isLogin && (
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 99424 17666" value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="••••••••" value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                            </div>

                            {isLogin && (
                                <div className="form-extras">
                                    <label className="remember-me">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <a href="#" className="forgot-link">Forgot Password?</a>
                                </div>
                            )}

                            <button type="submit" className="login-submit-btn">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>

                            <div className="login-divider"><span>or</span></div>

                            <button type="button" className="social-btn google-btn">
                                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                Continue with Google
                            </button>
                        </form>

                        <p className="login-footer-text">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? 'Register' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
