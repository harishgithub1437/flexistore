import React from "react";
import { Helmet } from "react-helmet";
import "../styles/AboutUs.css";

import MissionSec from "../components/MissionSec";
import OurJourney from "../components/JourneyCard";
import OurValues from "../components/OurValues";
import JoinSuccessSection from "../components/JoinSuccessSection";
import OurStory from "../components/OurStory";
import WhoWeAre from "../components/WhoWeAre";
import TrustedBy from "../components/TrustedBy";

const teamMembers = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description:
      "15+ years in e-commerce technology, passionate about democratizing online business tools.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Head of Technology",
    description:
      "Expert in scalable architecture and cloud infrastructure with a focus on performance.",
  },
  {
    initials: "AM",
    name: "Amit Mehta",
    role: "Lead Designer",
    description:
      "Creates beautiful, user-centric designs that convert visitors into customers.",
  },
  {
    initials: "SK",
    name: "Sarah Khan",
    role: "Customer Success",
    description:
      "Ensures every client achieves their business goals with dedicated support and guidance.",
  },
];

function AboutUs() {
  return (
    <div className="about-page">
      {/* ========================== SEO META TAGS ========================== */}
      <Helmet>
        <title>About Flexi Store | Smarter Selling for Manufacturers & Traders</title>

        <meta
          name="description"
          content="Know how Flexi Store helps manufacturers and traders to sell B2B & B2C from one unified platform. Explore our mission, story, journey and why businesses trust us."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Flexi Store | Smarter Selling for Manufacturers & Traders"
        />
        <meta
          property="og:description"
          content="Discover Flexi Store's mission, our journey, and how we empower manufacturers & traders to grow with B2B + B2C selling."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/your-og-image.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Flexi Store | Helping Manufacturers & Traders Sell Smarter"
        />
        <meta
          name="twitter:description"
          content="Learn about Flexi Store's mission and story. One platform to sell B2B & B2C effortlessly."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/your-og-image.jpg"
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Flexi Store",
            "url": "https://yourdomain.com/about-us",
            "description": "Learn how Flexi Store helps manufacturers and traders sell B2B & B2C from a single platform.",
            "publisher": {
              "@type": "Organization",
              "name": "Flexi Store",
              "logo": "https://yourdomain.com/logo.png"
            }
          }
        `}
        </script>
      </Helmet>

      {/* ========================== PAGE CONTENT ========================== */}

      <MissionSec />
      <WhoWeAre />
      <OurStory />
      <OurJourney />
      <OurValues />

      {/* TEAM SECTION */}
      <section className="py-5 my-3 bg-white text-center">
        <div className="container section-title">
          <h2 className="fw-bold m-4">
            Meet Our <span style={{ color: "var(--primary-color)" }}>Team</span>
          </h2>
          <p className="text-muted mb-5 fs-5">
            The passionate professionals behind FlexiStore's success
          </p>

          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div
                  className="p-4 shadow-sm rounded-4 h-100 hover-up"
                  style={{ backgroundColor: "#f9fafc" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {member.initials}
                  </div>

                  <h5 className="fw-bold mb-1">{member.name}</h5>

                  <p
                    className="mb-2"
                    style={{ color: "var(--primary-color)", fontWeight: 500 }}
                  >
                    {member.role}
                  </p>

                  <p className="text-muted small">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />
      <JoinSuccessSection />
    </div>
  );
}

export default AboutUs;
