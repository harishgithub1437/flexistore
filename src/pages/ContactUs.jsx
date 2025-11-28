import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "../styles/ContactUs.css";
import tempimg from "../assets/tempcontactimage.webp";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    company: "",
    message: "",
    howYouSell: "Starting a new business"
  });

  const navigate = useNavigate();

  // ✅ Phone only digits max 10
  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      phone: cleaned
    }));
  };

  // Normal text input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (/^[A-Za-z\s]*$/.test(value) || value === "") {
        setFormData((prev) => ({ ...prev, name: value }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ========================= SUBMIT FORM =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    if (formData.phone.length !== 10) {
      setSubmitStatus({
        success: false,
        message: "Phone number must be exactly 10 digits."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        {
          full_name: formData.name.trim(),
          email: formData.email.trim(),
          phone_number: formData.phone,
          city: formData.city.trim(),
          country: formData.country.trim(),
          company_name: formData.company.trim(),
          message: formData.message.trim(),
          type: formData.howYouSell
        },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000
        }
      );

      // SUCCESS – No redirect message now
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent."
      });

      window.scrollTo({ top: 0, behavior: "smooth" });

      // ⬇️ DIRECT REDIRECT (NO delay, NO message)
      navigate("/thank-you", {
        state: {
          formData: {
            full_name: formData.name.trim(),
            email: formData.email.trim(),
            phone_number: formData.phone,
            city: formData.city.trim(),
            country: formData.country.trim(),
            company_name: formData.company.trim(),
            message: formData.message.trim(),
            type: formData.howYouSell
          }
        }
      });

    } catch (error) {
      console.error("Contact form error:", error);

      let errorMessage = "Failed to submit form. Please try again.";

      if (error.response?.data?.errors) {
        errorMessage = error.response.data.errors
          .map((err) => `• ${err.message}`)
          .join("\n");
      } else if (error.code === "ECONNABORTED") {
        errorMessage =
          "Request timed out. Please check your connection and try again.";
      }

      setSubmitStatus({
        success: false,
        message: errorMessage
      });
      setIsSubmitting(false);
    }
  };

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia",
    "Nepal", "Bangladesh", "Sri Lanka", "China", "UAE",
    "Germany", "France", "Japan"
  ];

  return (
    <>
      {/* ================== SEO / META TAGS ================== */}
      <Helmet>
        <title>Contact Flexi Store | Book a Demo or Get Business Support</title>
        <meta
          name="description"
          content="Reach out to Flexi Store for demos, support, or business queries."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      {/* ================== PAGE CONTENT ================== */}
      <div className="contact-page">
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h1 className="fw-bold mb-3">
              Get in <span className="gradiant-texts">Touch</span>
            </h1>
            <p className="text-muted mb-4 fs-5">
              Have questions? We're here to help! Reach out to our team for support.
            </p>
          </div>
        </section>

        <section className="bubble-bg-left position-relative contactform">
          <div className="container">
            <div className="row">
              {/* ---------- LEFT FORM ---------- */}
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="contact-form-container p-4 p-md-5 shadow-sm rounded-4">
                  <h2 className="fw-bold mb-4">Send us a Message</h2>

                  {submitStatus.message && (
                    <Alert
                      variant={submitStatus.success ? "success" : "danger"}
                      className="mb-4"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {submitStatus.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          required
                          className="form-control-lg"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email *"
                          required
                          className="form-control-lg"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Mobile Number *"
                          required
                          maxLength="10"
                          className="form-control-lg"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          disabled={isSubmitting}
                        />
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Control
                          type="text"
                          name="city"
                          placeholder="City *"
                          required
                          className="form-control-lg"
                          value={formData.city}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </Col>
                    </Row>

                    <Form.Select
                      required
                      name="country"
                      className="form-select-lg mb-3"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Country *</option>
                      {countries.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </Form.Select>

                    <Form.Control
                      type="text"
                      name="company"
                      placeholder="Company (Optional)"
                      className="form-control-lg mb-3"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />

                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="How can we help you? *"
                      required
                      className="form-control-lg mb-4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />

                    {/* Radio Options */}
                    <p className="fw-semibold mb-2">How You Sell?</p>
                    <div className="d-flex flex-wrap gap-3 mb-4">
                      {[
                        "Starting a new business",
                        "Taking existing business online",
                        "Already selling online"
                      ].map((item) => (
                        <Form.Check
                          key={item}
                          type="radio"
                          label={item}
                          name="howYouSell"
                          checked={formData.howYouSell === item}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              howYouSell: item
                            }))
                          }
                          disabled={isSubmitting}
                        />
                      ))}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 py-3 fw-bold"
                      style={{
                        background: "var(--primary-gradient)",
                        border: "none"
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Form>
                </div>
              </div>

              {/* ---------- RIGHT IMAGE ---------- */}
              <div className="col-lg-5">
                <img
                  src={tempimg}
                  className="img-fluid rounded-4"
                  alt="Contact Flexi Store"
                />
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
