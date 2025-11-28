import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ThankYoupage.css";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.formData || {};
  const userName = formData.full_name || "";

  // Auto redirect after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-card">

        {/* Orange Top Bar with Tick */}
        <div className="thankyou-top">
          <span className="tick-icon">✔</span>
        </div>

        {/* Title */}
        <h2 className="thankyou-title">
          Thank You {userName ? userName : ""} for Submit Your Query!
        </h2>

        {/* Subtitle */}
        <p className="thankyou-subtitle">
          Our Team Will Get Back to You As soon As Possible
        </p>

      </div>
    </div>
  );
};

export default ThankYou;
