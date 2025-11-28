import React, { useEffect } from "react";
import Typed from "typed.js"; 
import heroImg from "../assets/Herosecimg.png";
import "../styles/Herosection.css"

function Herosection() {
  useEffect(() => {
    const typed = new Typed("#typewriter", {
      strings: ["B2B Platform", "B2C Platform", "B2B2C Platform", "Mobile App"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SECTION */}
          <div className="col-md-6 col-bg-image position-relative text-center text-md-start">
            <h1 className="display-5 fw-bold mb-4">
              Flexible Enterprise <br className="d-none d-md-block" />
              <span>Grade Ecommerce</span> Platform.
            </h1>

            <div className="lead fw-bold mb-4">
              Build whitelabelled <span id="typewriter" className="text"></span>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn btn-primary px-4 btn-hover"
                data-bs-toggle="modal"
                data-bs-target="#demoFormModal"
              >
                <i className="fas fa-phone me-2"></i>Schedule a Free Call
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-md-6 pt-4 pt-md-0 bg-design d-md-block d-none">
            <img
              src={heroImg}
              className="img-fluid"
              alt="hero-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
