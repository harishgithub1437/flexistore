import React from 'react'
import "../styles/Footer.css"
import Logo from "../assets/Logo.png"

function Footer() {
	return (
		<div>
			<footer className="easydata-footer">
				<div className="container">
					<div className="footer-columns special-block-d">
						{/* <!-- Product Column --> */}
						<div className="footer-column special-m">
							<div className="footer-brand">
								<div>
									<a className="navbar-brand" href="/"><img src={Logo} alt="logo" className="img-fluid" width="180px" /></a>
								</div>
								<p className="mb-3" style={{ marginBottom: "1rem" }}>
									Build your E-commerce store with Flexi Store
								</p>
							</div>

						</div>

						{/* <!-- Product Column --> */}
						{/* <!-- <div className="footer-column">
					<h3>Solutions</h3>
					<ul>
						<li><a href="#">B2B E-Commerce</a></li>
						<li><a href="#">B2C E-Commerce</a></li>
						<li><a href="#">Mobile Apps</a></li>
						<li><a href="#">Marketplace</a></li>
					</ul>
				</div> --> */}

						{/* <!-- Resources Column --> */}
						{/* <!-- <div className="footer-column">
					<h3>Company</h3>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Case Studies</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div> --> */}

						{/* <!-- Contact Column --> */}
						<div className="footer-column ">
							<h3>Contact</h3>
							<ul className="contact-info">
								<li>
									<i className="fa-solid fa-location-dot"></i>

									<a href="https://maps.app.goo.gl/MjZP58AVFkbvnhBW6">3rd Floor, Plot No 122, Block B, Sector 67, Noida, Uttar Pradesh 201309</a>
								</li>
								<li>
									<i className="fas fa-phone-alt"></i>
									<a href="tel:+919958131585">+91 9958131585</a>
								</li>
								<li>
									<i className="fas fa-envelope"></i>
									<a href="mailto:hello@flexistore.in">hello@flexistore.in</a>
								</li>
							
							</ul>
						</div>
					</div>

					<div className="footer-bottom">
						<div>
							<p> 2025 FlexiStore. All rights reserved.</p>
						</div>
						{/* <!-- <div className="d-flex gap-4 fs-4 social-icons">
					<a href="https://www.facebook.com/profile.php?id=61577001624077" target="_blank" rel="noopener noreferrer"><i
							className="fab fa-facebook"></i></a>
					<a href="https://www.instagram.com/compact_accounting/" target="_blank" rel="noopener noreferrer"><i
							className="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/company/compact-accounting-private-limited/" target="_blank" rel="noopener noreferrer"><i
							className="fab fa-linkedin-in"></i></a>
				</div> --> */}

					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer