import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TrustedBy.css";

/* ✅ Swiper v11+ correct imports */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const TrustedBy = () => {
  const testimonials = [
    {
      initials: "MG",
      name: "Manish Gupta",
      title: "CEO, TechParts Ltd",
      text: "FlexiStore transformed our B2B operations completely. The custom platform they built handles our complex pricing and approval workflows perfectly.",
    },
    {
      initials: "AS",
      name: "Anita Singh",
      title: "Founder, Fashion Forward",
      text: "Finally, an e-commerce solution that actually understands our business needs. The support team is incredible and always available.",
    },
    {
      initials: "VK",
      name: "Vikram Khanna",
      title: "Director, Home Essentials",
      text: "We moved from Shopify to FlexiStore and couldn't be happier. The customization possibilities are endless and the cost is so much better.",
    },
    {
      initials: "RD",
      name: "Rohit Desai",
      title: "Head of Operations, FreshMart",
      text: "Inventory sync and order flows are finally reliable. Our team saves hours every week thanks to FlexiStore.",
    },
    {
      initials: "NK",
      name: "Neha Kapoor",
      title: "CMO, StyleStreet",
      text: "Beautiful UX with solid performance. Conversions improved and the platform scales with campaigns easily.",
    },
    {
      initials: "AM",
      name: "Arjun Mehta",
      title: "Founder, CraftHub",
      text: "Custom pricing rules and B2B catalog controls are spot on. Exactly what we needed without heavy plugins.",
    },
    {
      initials: "PS",
      name: "Pooja Shah",
      title: "CTO, MedSupplies Co.",
      text: "Security, uptime, and support are top-notch. The team is proactive and quick to iterate on feedback.",
    },
  ];

  const logos = new Array(10).fill(0).map((_, i) => `Logo ${i + 1}`);

  return (
    <section className="trusted-by-section py-5 text-center position-relative z-1 bubble-bg-left bubble-host">
      <div className="container section-title">
        {/* === Heading === */}
        <h2 className="fw-bold m-4">
          Trusted <span className="text-warning">By</span>
        </h2>
        <p className="text-muted mb-5 fs-5">
          Businesses across industries trust FlexiStore to power their
          e-commerce success
        </p>

        {/* === Logo Slider (Continuous) === */}
        <div className="logos-slider mb-5">
          <Swiper
            className="logos-swiper"
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            loop={true}
            slidesPerView={5}
            spaceBetween={20}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
            allowTouchMove={true}
            aria-label="Trusted logos carousel"
          >
            {[...logos, ...logos].map((l, idx) => (
              <SwiperSlide key={`logo-${idx}`} className="d-flex justify-content-center">
                <div className="logo-placeholder">
                  <span className="logos-sec">{l}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* === Testimonials Slider === */}
        <div className="reviews-slider">
          <Swiper
            className="reviews-swiper"
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={3}
            spaceBetween={20}
            pagination={{ el: ".reviews-pagination", clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            aria-label="Customer testimonials"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={`rev-${index}`}>
                <div className="testimonial-card text-start rounded-4 p-4 bg-white">
                  <div className="mb-2 rating-icons">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                  </div>
                  <p className="fst-italic text-secondary mb-4">“{t.text}”</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar-circle me-3">
                      <span className="text-white fw-bold">{t.initials}</span>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{t.name}</h6>
                      <small className="text-muted">{t.title}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="reviews-pagination mt-3"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
