import React from 'react'
import "../styles/MissionSec.css"

function MissionSec() {
  return (
    <div>
         <section className="py-5 text-center bg-white extra-padding">
     <div className="container">
        {/* Heading */}
        <h1 className="fw-bold mb-3 fs-1">
          Revolutionizing{" "}
          <span className='gradiant-texts'>E-Commerce</span> for Everyone
        </h1>

        {/* Subheading */}
        <p className="text-muted mb-5 fs-5 subtitle">
          We're on a mission to democratize e-commerce by providing powerful,
          affordable, and truly <br /> customizable platforms that grow with your
          business.
        </p>

        {/* Stats Row */}
        <div className="row justify-content-center text-center pt-4">
          <div className="col-6 col-md-3 mb-4">
            <h2 className="fw-bold fs-42px" style={{ color: "var(--primary-color)" }}>
              500+
            </h2>
            <p className="text-muted">Businesses Served</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h2 className="fw-bold fs-42px" style={{ color: "var(--primary-color)" }}>
              99.9%
            </h2>
            <p className="text-muted">Uptime Guarantee</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h2 className="fw-bold fs-42px" style={{ color: "var(--primary-color)" }}>
              24/7
            </h2>
            <p className="text-muted ">Support Available</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h2 className="fw-bold fs-42px" style={{ color: "var(--primary-color)" }}>
              5+
            </h2>
            <p className="text-muted">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default MissionSec