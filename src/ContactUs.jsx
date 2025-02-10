import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold" style={{ color: "#343a40" }}>Contact Us</h1>
        <p className="text-muted">We are here to assist you!</p>
      </div>

      <div className="row g-4">
        {/* Contact Details */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm p-4" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
            <h4 className="mb-4 text-dark">Get in Touch</h4>
            <p className="text-muted">
              If you have any questions, feel free to reach out to us using the information below.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaPhone className="text-primary me-2" /> <strong>Phone:</strong> +91 98765 43210
              </li>
              <li className="mb-3">
                <FaEnvelope className="text-danger me-2" /> <strong>Email:</strong> support@terminatorsupermarket.com
              </li>
              <li>
                <FaMapMarkerAlt className="text-success me-2" /> <strong>Location:</strong> Ameerpet, Hyderabad, India
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm p-4" style={{ background: "#ffffff" }}>
            <h4 className="mb-4 text-dark">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
