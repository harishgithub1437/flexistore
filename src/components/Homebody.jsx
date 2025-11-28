import React from 'react'
import webimgflexi from "../assets/Webimageflexistore.png"
import "../styles/Homebody.css"

function Homebody() {
  return (
    <div>
      <section className="business-model-section" id="models" style={{backgroundColor: "#fafafa"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="section-title text-start   ">
                <h3 className="fw-bold my-4">One Platform for <span className="gradiant-texts"> All Business
                    Models</span></h3>
                <p className="text-muted fs-6 ">
                  FlexiStore is a comprehensive e-commerce solution that seamlessly integrates B2B, B2C, and
                  B2B2C business models on a single platform.
                </p>
              </div>

              {/* Mobile horizontal slider - EXACTLY LIKE YOUR EXAMPLE */}
              <div className="d-block d-md-none">
                <div className="row flex-nowrap overflow-auto pb-3">
                  <div className="col-9">
                    <div className="fs-card h-100 ">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-building"></i>
                          </div>
                          <h6 className="mb-0 fw-bold">B2B Commerce</h6>
                        </div>
                        <p className="text-muted mb-0">Wholesale ordering, tiered pricing, and approval workflows for business buyers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="fs-card h-100 ">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-user"></i>
                          </div>
                          <h6 className="mb-0 fw-bold">B2C Commerce</h6>
                        </div>
                        <p className="text-muted mb-0">Intuitive shopping experience with personalization for retail customers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="fs-card h-100 ">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-users"></i>
                          </div>
                          <h6 className="mb-0 fw-bold ms-3">B2B2C Commerce</h6>
                        </div>
                        <p className="text-muted mb-0">Unified platform allowing businesses to sell to both other businesses and end consumers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop layout */}
              <div className="d-none d-md-block">
                <div className="row gx-3 gy-3 align-items-stretch">
                  <div className="col-md-6">
                    <div className="fs-card h-100">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-building"></i>
                          </div>
                          <h6 className="mb-0 fw-bold ms-3">B2B Commerce</h6>
                        </div>
                        <p className="text-muted">Wholesale ordering, tiered pricing, and approval workflows for business buyers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fs-card h-100">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-user"></i>
                          </div>
                          <h6 className="mb-0 fw-bold ms-3">B2C Commerce</h6>
                        </div>
                        <p className="text-muted">Intuitive shopping experience with personalization for retail customers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="fs-card">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-box-model me-3">
                            <i className="fa-solid fa-users"></i>
                          </div>
                          <h6 className="mb-0 fw-bold">B2B2C Commerce</h6>
                        </div>
                        <p className="text-muted">Unified platform allowing businesses to sell to both other businesses and end consumers with tailored experiences for each.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="platform-bg mx-auto text-center rounded-4">
                <img src={webimgflexi} className="img-fluid mx-auto" width="500px" alt="hero-image" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homebody