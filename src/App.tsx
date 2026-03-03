import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import GoldCollection from './pages/GoldCollection';
import SilverCollection from './pages/SilverCollection';
import ProductDetails from './pages/ProductDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <>
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gold" element={<GoldCollection />} />
                  <Route path="/silver" element={<SilverCollection />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/booking" element={<Booking />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
