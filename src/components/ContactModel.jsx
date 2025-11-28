import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";
import "../styles/ContactModel.css";

const ContactModel = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    type: "",
    source: "Quick Contact Form",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const navigate = useNavigate();

  // Always initialize modal when opened
  useEffect(() => {
    const modalEl = document.getElementById("demoFormModal");
    if (!modalEl) return;

    modalEl.addEventListener("show.bs.modal", () => {
      const existing = Modal.getInstance(modalEl);
      if (!existing) new Modal(modalEl);
    });
  }, []);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);

    setFormData({ ...formData, phone_number: value });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone_number") return;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (formData.phone_number.length !== 10) {
      setSubmitStatus("Phone number must be exactly 10 digits.");
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000/api"}/contact/quick`,
        formData
      );

      // Close modal instantly
      const modalEl = document.getElementById("demoFormModal");
      const instance = Modal.getInstance(modalEl);
      if (instance) instance.hide();

      // Cleanup leftover backdrop instantly
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style = "";

      // Redirect instantly with form data
      navigate("/thank-you", { state: { formData } });
      
    } catch (error) {
      setSubmitStatus(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="modal fade strategy-modal"
      id="demoFormModal"
      tabIndex="-1"
      aria-labelledby="strategyCallModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable model-sm">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title" id="strategyCallModalLabel">
              Book a Free Strategy Call
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label className="form-label">Full Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Business Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number*</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handlePhoneChange}
                  maxLength="10"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Business Type*</label>
                <select
                  className="form-select"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="" disabled>Select Business Type</option>
                  <option>B2B</option>
                  <option>B2C</option>
                  <option>B2B2C</option>
                  <option>OTHERS</option>
                </select>
              </div>

              {submitStatus && (
                <div className="alert alert-danger">{submitStatus}</div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Sending...
                  </>
                ) : (
                  "Schedule My Free Call"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModel;
