import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYoupage'; // Add this import
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    // keep your basename if you need it for deployment
    <Router basename="/flexistore.in">
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          {/* single canonical home route */}
          <Route path="/" element={<Home />} />

          {/* other pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/thank-you" element={<ThankYou />} /> {/* Add this route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;