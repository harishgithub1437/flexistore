import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";
import ContactModel from "./ContactModel";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  /**
   * When clicked from any page:
   * - If already on home ("/") -> scroll directly
   * - Otherwise navigate to "/" and pass state { scrollTo: sectionId }
   */
  const handleScrollToSection = (sectionId) => {
    closeMenu();

    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        // scroll with offset for fixed navbar (adjust -80 if your header height differs)
        const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // navigate to home and attach state telling home which section to scroll to
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <header className="sticky-header py-3">
        <div className="container position-relative">
          <div className="d-flex justify-content-between align-items-center position-relative">

            {/* Logo */}
            <div>
              <Link className="navbar-brand" to="/" onClick={closeMenu}>
                <img src={logo} alt="logo" className="img-fluid" width="180px" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle align-items-center">
              <nav className="d-flex align-items-center navigation-desk me-4">
                <button onClick={() => handleScrollToSection("advantage")} className="text-decoration-none mx-3 btn btn-link p-0">Why Flexi Store</button>
                <button onClick={() => handleScrollToSection("features")} className="text-decoration-none mx-3 btn btn-link p-0">Features</button>
                <button onClick={() => handleScrollToSection("case")} className="text-decoration-none mx-3 btn btn-link p-0">Case Study</button>

                <Link to="/about" className="text-decoration-none mx-3">About Us</Link>
                <Link to="/ContactUs" className="text-decoration-none mx-3">Contact Us</Link>
              </nav>
            </div>

            {/* Desktop CTA Button */}
            <div className="d-none d-md-block">
              <button
                className="btn btn-primary btn-hover"
                data-bs-toggle="modal"
                data-bs-target="#demoFormModal"
              >
                Book a Free Strategy Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="d-md-none ms-auto">
              <button
                className="navbar-toggler border-0 bg-transparent p-2"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
              >
                <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} fs-4`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`d-md-none mobile-menu ${isMenuOpen ? "mobile-menu-show" : ""}`}>
            <nav className="d-flex flex-column py-3 mobile-nav">
              <div className="container">
                <div className="d-flex flex-column gap-2">
                  <button 
                    onClick={() => handleScrollToSection("advantage")} 
                    className="text-decoration-none text-start w-100 p-3 mobile-nav-link btn btn-link"
                  >
                    Why Flexi Store
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("features")} 
                    className="text-decoration-none text-start w-100 p-3 mobile-nav-link btn btn-link"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("case")} 
                    className="text-decoration-none text-start w-100 p-3 mobile-nav-link btn btn-link"
                  >
                    Case Study
                  </button>
                  <Link 
                    to="/about" 
                    className="text-decoration-none text-start w-100 p-3 mobile-nav-link btn-link" 
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/ContactUs" 
                    className="text-decoration-none text-start w-100 p-3 mobile-nav-link btn-link" 
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </div>
                
                <div className="mt-3 px-3">
                  <button
                    className="btn btn-primary btn-hover w-100 py-2"
                    data-bs-toggle="modal"
                    data-bs-target="#demoFormModal"
                    onClick={closeMenu}
                  >
                    Book a Free Strategy Call
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <ContactModel />
    </>
  );
}

export default Navbar;
