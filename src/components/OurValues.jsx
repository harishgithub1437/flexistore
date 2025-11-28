import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OurValues.css"

function ValueCard({ icon, title, description, points }) {
  return (
    <div className="card border-0 shadow-sm text-center p-4 rounded-4 h-100 hovcard havupcard">
      
      <div
        className="mx-auto d-flex align-items-center justify-content-center mb-3"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "var(--primary-gradient)",
          color: "#fff",
          fontSize: "28px",
        }}
      >
        {icon}
      </div>
      <div className="card-body ">
        <h5 className="fw-semibold m-4">{title}</h5>
        <p className="text-muted f16">{description}</p>
        <ul className="list-unstyled text-start d-inline-block mt-3 w-100">
          {points.map((point, i) => (
            <li key={i} className="mb-2">
              <span
                style={{
                  color: "#ff9a00",
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
              >
                <i className="fa-solid fa-circle-check"></i>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function OurValues() {
  const valuesData = [
    {
      icon: <i className="fa-solid fa-lightbulb"></i>,
      title: "Simplicity",
      description:
        "We believe powerful technology should be simple to use. Complex problems deserve elegant, straightforward solutions.",
      points: [
        "Intuitive interfaces",
        "Clear communication",
        "Streamlined processes",
      ],
    },
    {
      icon: <i className="fa-solid fa-dollar-sign"></i>,
      title: "Affordability",
      description:
        "Enterprise-level e-commerce shouldn't break the bank. We make powerful platforms accessible to businesses of all sizes.",
      points: ["Transparent pricing", "No hidden fees", "Maximum ROI"],
    },
    {
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      title: "End-to-End Support",
      description:
        "From initial consultation to ongoing maintenance, we're your dedicated technology partner every step of the way.",
      points: [
        "24/7 availability",
        "Proactive monitoring",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section className="ourvalues py-5 mt-3 text-center section-title text-start position-relative bubble-bg-right bubble-host" style={{ backgroundColor: "#fafafa" }}>
      <h2 className="fw-bold m-4">
        Our <span className="gradiant-texts ">Values</span>
      </h2>
      <p className="text-muted mb-5 fs-5">
        These core principles guide everything we do and every decision we make.
      </p>

      <div className="container">
        <div className="row justify-content-center bubble-bg-right bubble-host">
          {valuesData.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                points={item.points}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
