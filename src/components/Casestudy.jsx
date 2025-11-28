import React from 'react'
import Centriti from "../assets/Centriti.png"
import Multybyte from "../assets/Multybyte.png"
import "../styles/Casestudy.css"
function Casestudy() {
  return (
    <div>
        	<section className="case-study-section py-5" id="case">
		<div className="container ">
			<div className="row align-items-center g-4 py-4">
				{/* <!-- Left Column: Image --> */}
				<div className="col-md-6">
					<div className="position-relative rounded-4 bg-white p-2">
						<img src={Multybyte} alt="Case Study" className="img-fluid rounded "/>
					</div>
				</div>

				{/* <!-- Right Column: Content --> */}
				<div className="col-md-6">
					<div className="section-title text-start mb-2 ">
						<h2 className="text-white text-start">Case Study: <span className="gradiant-texts"> Multybyte </span></h2>
					</div>

					{/* <!-- Stats Boxes --> */}
					<div className="row align-items-stretch text-center my-4">
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+50%</h3>
								<small className="mb-0">B2B orders</small>
							</div>
						</div>
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+70%</h3>
								<small>Revenue Growth</small>
							</div>
						</div>
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+41.7%</h3>
								<small>Customer Retention Rate</small>
							</div>
						</div>
					</div>

					{/* <!-- Testimonial Card --> */}
					<div className="cases-bg-cards text-white rounded p-3 mb-3">
						<i className="fa-regular fa-message fs-4 mb-2 shadow" style={{color: "var(--primary-color)"}}></i>
						<p className="fst-italic test-text mb-3">"While exploring B2B and B2C eCommerce solutions, I found
							FlexiStore to be incredibly efficient. It had all the essential features we needed to launch
							quickly and scale smoothly. The platform was flexible, intuitive, and perfectly aligned with
							our business goals."</p>
						<div className="d-flex align-items-center">
							<div className="text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{width: "35px", height: "35px", backgroundColor: "var(--primary-color)"}}>
								<strong>J</strong>
							</div>
							<div className="user-info">
								<strong>Jeevan</strong><br/>
								<small>Founder, Multybyte</small>
							</div>
						</div>
					</div>

					{/* <!-- Read More Link --> */}
					<a href="https://www.multybyte.com/" target="_blank" className=" text-decoration-none" style={{color: "var(--primary-color)"}}>View Website <i className="fas fa-arrow-right mx-1"></i></a>
				</div>
			</div>

			<hr/>

			<div className="row align-items-center g-4 py-4">
				{/* <!-- Left Column: Image --> */}
				<div className="col-md-6">
					<div className="position-relative rounded-4 bg-white p-2">
						<img src={Centriti} alt="Case Study" className="img-fluid rounded "/>
					</div>
				</div>

				{/* <!-- Right Column: Content --> */}
				<div className="col-md-6">
					<div className="section-title text-start mb-2">
						<h2 className="  text-white text-start">Case Study: <span className="gradiant-texts"> Centriti </span></h2>
					</div>

					{/* <!-- Stats Boxes --> */}
					<div className="row align-items-stretch text-center my-4">
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+60%</h3>
								<small className="mb-0">B2B orders</small>
							</div>
						</div>
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+40%</h3>
								<small>MoM Revenue Growth</small>
							</div>
						</div>
						<div className="col-4">
							<div className="cases-bg-cards h-100 text-white rounded p-3">
								<h3 className="fw-bold">+60%</h3>
								<small>Customer Retention Rate</small>
							</div>
						</div>
					</div>

					{/* <!-- Testimonial Card --> */}
					<div className="cases-bg-cards text-white rounded p-3 mb-3">
						<i className="fa-regular fa-message fs-4 mb-2 shadow" style={{color: "var(--primary-color)"}}></i>
						<p className="fst-italic test-text mb-3">"FlexiStore helped us launch Centriit as a full-fledged B2B
							platform for HoReCa with speed and precision. The platform handled our complex pricing and
							bulk ordering needs effortlessly. It gave us the confidence to go digital without
							compromise."</p>
						<div className="d-flex align-items-center">
							<div className="text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{width: "35px", height: "35px", backgroundColor:"var(--primary-color)"}}>
								<strong>DJ</strong>
							</div>
							<div className="user-info">
								<strong>Diljeet</strong><br/>
								<small>Founder, Centriti</small>
							</div>
						</div>
					</div>

					{/* <!-- Read More Link --> */}
					<a href="https://www.centriti.in/" target="_blank" className=" text-decoration-none" style={{color: "var(--primary-color)"}}>View
						Website <i className="fas fa-arrow-right mx-1"></i></a>
				</div>
			</div>
		</div>


	</section>
    </div>
  )
}

export default Casestudy