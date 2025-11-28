import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WhoWeAre.css"

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section py-5 extra-p  ">
      <div className="container ">
        <div className="row align-items-center bubble-bg-left bubble-host">
          {/* Left Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="fw-bold my-4 fs-1 text-center text-lg-start">
              Who <span className="gradiant-texts ">We Are</span>
            </h2>
            <p className="text-muted mb-4 fs-5 text-center text-lg-start">
              FlexiStore is a team of passionate technologists, designers, and
              business strategists who believe that every business deserves
              access to world-class e-commerce technology—regardless of size or
              budget.
            </p>

            <div className="vision-mission-box py-4 pe-4 rounded-3 position-relative ">
              <div className="vision-item mb-4">
                <h5 className="fw-bold">
                  <i className="fa-solid fa-eye me-3"></i>
                  Our Vision
                </h5>
                <p className="text-muted margin-sp">
                  To become the go-to platform for businesses seeking complete
                  control over their e-commerce destiny, free from the
                  limitations of generic solutions.
                </p>
              </div>

              <div className="mission-item">
                <h5 className="fw-bold">
                 <i className="fa-solid fa-circle-check me-3"></i>
                  Our Mission
                </h5>
                <p className="text-muted margin-sp ">
                  To empower businesses with custom e-commerce platforms that
                  are powerful, affordable, and designed to scale—eliminating
                  the need for expensive agencies or complex technical
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="features-card bg-white shadow-sm p-4 rounded-4">
              <div className="row text-center">
                <div className="col-6 mb-4">
                  <div className="icon-circle mb-3 mx-auto text-white ">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h6 className="fw-bold">Lightning Fast</h6>
                  <p className="text-muted">
                    Optimized for speed and performance
                  </p>
                </div>

                <div className="col-6 mb-4">
                  <div className="icon-circle mb-3 mx-auto text-white">
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                  <h6 className="fw-bold">Secure</h6>
                  <p className="text-muted">
                    Enterprise-grade security built-in
                  </p>
                </div>

                <div className="col-6">
                  <div className="icon-circle mb-3 mx-auto text-white">
                    <i className="fa-solid fa-people-line"></i>
                  </div>
                  <h6 className="fw-bold">Customer-First</h6>
                  <p className="text-muted">
                    Built with your success in mind
                  </p>
                </div>

                <div className="col-6">
                  <div className="icon-circle mb-3 mx-auto text-white">
                   <i className="fa-solid fa-arrow-trend-up"></i>
                  </div>
                  <h6 className="fw-bold">Scalable</h6>
                  <p className="text-muted">
                    Grows with your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
