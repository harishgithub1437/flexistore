import React from 'react'
import "../styles/Banner.css"

function Banner() {
  return (
    <div>
            <section class="CTA-section bg-white">
		<div class="container">
			<div class="row bg-black text-white rounded-4  pt-5 justify-content-center text-center mx-1 mx-md-0">
				<div class="col-lg-10 section-title">
					<h2 class="text-white">Build Your Own E-Commerce Platform</h2>
					<p class="text-light mb-5 subtitle text-white">Web, app, or both — custom-built to match how your business
						sells.</p>
					<div class="d-flex justify-content-center gap-3 flex-wrap">
						<a href="#" class="btn cta-buttons" data-bs-toggle="modal" data-bs-target="#demoFormModal">Schedule
							Consultation</a>
						{/* <!-- <a href="#" class="btn cta-buttons2">Request Proposal</a> --> */}
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Banner