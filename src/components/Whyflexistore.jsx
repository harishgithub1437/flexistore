import React, { useEffect } from "react";
import "../styles/Whyflexistore.css";

function Whyflexistore() {
  useEffect(() => {
    // Add your script logic here (exact same code)
    window.toggleExtra = function (button) {
      const column = button.closest(".col-md-6");
      const wrapper = column.querySelector(".extra-content-wrapper");
      const content = wrapper.querySelector(".extra-content");
      const icon = button.querySelector("i");

      const isOpen = wrapper.classList.contains("open");

      if (isOpen) {
        // Hide with animation
        wrapper.classList.remove("open");
        setTimeout(() => {
          content.classList.add("d-none");
        }, 400); // Match transition time
        button.firstChild.textContent = "Read More ";
        icon.classList.replace("fa-angle-up", "fa-angle-down");
      } else {
        // Show with animation
        content.classList.remove("d-none");
        requestAnimationFrame(() => {
          wrapper.classList.add("open");
        });
        button.firstChild.textContent = "Read Less ";
        icon.classList.replace("fa-angle-down", "fa-angle-up");
      }
    };
  }, []);

  return (
    <section className="py-5 bg-white" id="advantage">
      <div className="container">
        <div className="section-title">
          <h2 className="my-4">
            Flexi Store <span className="gradiant-texts"> Advantage</span>
          </h2>
          <p className="subtitle">
            FlexiStore delivers unique benefits for both manufacturers and retailers
          </p>
        </div>

        <div className="row g-4">
          {/* ====== Manufacturers ====== */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-4">
              <div className="icon-box me-3">
                <i className="fa-solid fa-industry"></i>
              </div>
              <h5 className="mb-0 fw-bold">For Manufacturers</h5>
            </div>

            <ul className="custom-feature-list ps-0">
						{/* <!-- Always visible items --> */}
						<li>
							<h6>Freedom from Traditional Distribution</h6>
							<p>Break free from outdated distribution chains and take control of your
								product journey from factory to consumer.</p>
						</li>
						<li>
							<h6>Zero Marketplace Dependency</h6>
							<p>Sell directly via your owned platforms with no 15–30% commission loss
								to Amazon, Flikart, or other marketplaces.</p>
						</li>
						<li>
							<h6>Complete Value Chain Control</h6>
							<p>Work with loyal retailers & distributions while controlling your
								entire distribution & retail chain from one platform</p>
						</li>

						{/* <!-- Hidden items --> */}
						<div className="extra-content-wrapper">
							<div className="extra-content d-none">
								<li>
									<h6>Unified Management Panel</h6>
									<p>Manage both wholesale (B2B) orders and direct-to-consumer (D2C)
										e-commerce from a single dashboard.</p>
								</li>
								<li>
									<h6>Dynamic Credit Terms</h6>
									<p>Move away from legacy credit periods with flexible terms for trusted retailers
										and early payment discounts.</p>
								</li>
								<li>
									<h6>Real-time Market Control</h6>
									<p>Gain instant control over demand, pricing, and distribution with
										real- time data and analytics.</p>
								</li>
								<li>
									<h6>Optimized Trade Promotions</h6>
									<p>Fine-tune discounts and schemes in real-time based on demand,
										competition, and retailer performance.</p>
								</li>
								<li>
									<h6>Direct Retailer Relationships</h6>
									<p>Onboard retailers directly to reduce distribution lag and build a
										loyal network without marketplace dependency.</p>
								</li>
								<li>
									<h6>Improved Margins</h6>
									<p>Eliminate middlemen and boost profit margins while ensuring
										retailers sell genuine products.</p>
								</li>
								<li>
									<h6>Coming Soon: Maketplace integration</h6>
									<p>Future integration with Amazon, Flipkart and other marketplaces for centralized
										price and inventory control.</p>
								</li>
								<li>
									<h6>Complete Value Chain Control</h6>
									<p>Work with loyal retailers & distributors while controlling your
										entire distribution & retail chain from one platform.</p>
								</li>
							</div>
						</div>
					</ul>

            <div className="text-center mt-3">
              <button
                className="btn btn-outline-custom"
                onClick={(e) => window.toggleExtra(e.target)}
              >
                Read More <i className="fa-solid fa-angle-down mx-1"></i>
              </button>
            </div>
          </div>

          {/* ====== Retailers ====== */}
          <div className="col-md-6 position-relative bubble-bg-right">
            <div className="d-flex align-items-center mb-4">
              <div className="icon-box me-3">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <h5 className="mb-0 fw-bold">For Retailers & Distributors</h5>
            </div>

          <ul class="custom-feature-list ps-0">
						{/* <!-- Always visible items --> */}
						<li>
							<h6>Direct Manufacturer Access</h6>
							<p>Source products directly from manufacturers without middlemen ensuring authenticity and
								better margins.</p>
						</li>
						<li>
							<h6>Transparent Pricing</h6>
							<p>Benefit from clear, consistent pricing structures without hidden distributor markups or
								fluctuations.</p>
						</li>

						<li>
							<h6>Convenience Shopping</h6>
							<p>Order wholesale inventory anytime through an intuitive platform designed specifically for
								B2B purchasing.</p>
						</li>

						{/* <!-- Hidden items --> */}
						<div className="extra-content-wrapper">
							<div className="extra-content d-none">
								<li>
									<h6>Enhanced Market Position</h6>
									<p>Gain more power in the supply chain compared to traditional distribution models,
										with
										direct manufacturer relationships.</p>
								</li>
								<li>
									<h6>Brand Loyalty Building</h6>
									<p>Earn customer loyalty directly instead of having it captured by distributors,
										strengthening your market position.</p>
								</li>
								<li>
									<h6>Inventory Visibility</h6>
									<p>Real-time access to manufacturer inventory levels to plan purchases and avoid
										stockouts.</p>
								</li>
								<li>
									<h6>Exclusive Rewards</h6>
									<p>Access to loyalty programs and exclusive deals for high-performing retailers
										directly
										from manufacturers.</p>
								</li>
								<li>
									<h6>Streamlined Ordering</h6>
									<p>Simplify wholesale purchasing with digital catalogs, quick reorders, and
										account-specific pricing.</p>
								</li>

							</div>
						</div>

					</ul>

            <div className="text-center mt-3">
              <button
                className="btn btn-outline-custom"
                onClick={(e) => window.toggleExtra(e.target)}
              >
                Read More <i className="fa-solid fa-angle-down mx-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyflexistore;
