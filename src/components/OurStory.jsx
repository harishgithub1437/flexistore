import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OurStory.css"

const OurStory = () => {
  return (
    <section className="our-story-section py-5">
      <div className="container section-title text-start text-center">
        <h2 className="fw-bold m-4">
          Our <span className="gradiant-texts">Story</span>
        </h2>
        <p className="text-muted mb-5 fs-5">
          Born from frustration with existing solutions, FlexiStore was created
          to solve real problems faced by businesses every day.
        </p>

        <div className="row text-start">
          {/* Left Column */}
          <div className="col-md-6">
            <h4 className="fw-bold text-danger mb-4">The Problem We Saw</h4>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                Shopify Limitations
              </h5>
              <p className="text-muted ms-4  f16">
                Businesses were trapped by rigid templates, expensive apps, and
                monthly fees that added up quickly. Customization required
                expensive developers.
              </p>
            </div>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                WordPress Complexity
              </h5>
              <p className="text-muted ms-4 f16">
                While flexible, WordPress required constant maintenance,
                security updates, and technical expertise that most business
                owners didn't have.
              </p>
            </div>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                Agency Dependency
              </h5>
              <p className="text-muted ms-4 f16">
                Businesses were forced to rely on expensive agencies for simple
                changes, creating bottlenecks and ongoing costs.
              </p>
            </div>

            <div className="story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                One-Size-Fits-All
              </h5>
              <p className="text-muted ms-4 f16">
                Existing platforms forced businesses to adapt to their
                limitations rather than providing solutions that fit unique
                business needs.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <h4 className="fw-bold text-success mb-4">Our Solution</h4>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                True Customization
              </h5>
              <p className="text-muted ms-4 f16">
                Every FlexiStore platform is built from scratch to match your
                exact business requirements—no templates, no compromises.
              </p>
            </div>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                All-Inclusive Pricing
              </h5>
              <p className="text-muted ms-4 f16">
                One transparent price covers everything: development, hosting,
                maintenance, and support. No hidden fees or surprise costs.
              </p>
            </div>

            <div className="mb-4 story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                Ongoing Partnership
              </h5>
              <p className="text-muted ms-4 f16">
                We don't just build and disappear. Our team becomes your
                long-term technology partner, handling updates and improvements.
              </p>
            </div>

            <div className="story-item">
              <h5 className="fw-bold">
                <span className="story-bullet me-2"><span className="dot"></span></span>
                Business-First Approach
              </h5>
              <p className="text-muted ms-4 f16">
                Every feature and decision is made with your business goals in
                mind, not technical limitations or platform restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
