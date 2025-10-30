import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <p>
              BookMyShow is your ultimate destination for booking movies,
              events, and more across India.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/movies" className="text-white text-decoration-none">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white text-decoration-none">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/plays" className="text-white text-decoration-none">
                  Plays
                </Link>
              </li>
              <li>
                <Link to="/sports" className="text-white text-decoration-none">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-white text-decoration-none">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/help" className="text-white text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-white text-decoration-none">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social & Contact */}
          <div className="col-md-3 mb-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mb-2">
              <a
                href="https://www.instagram.com/ajith_gurram/"
                className="text-white"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/ajith_gurram/"
                className="text-white"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.instagram.com/ajith_gurram/"
                className="text-white"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.instagram.com/ajith_gurram/"
                className="text-white"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <p>
              Email:{" "}
              <a href="mailto:support@bookyshow.com">support@bookyshow.com</a>
            </p>
            <p>
              <a
                href="https://wa.me/7093012101?text=Hi%20I%20need%20support%20with%20my%20booking"
                target="_blank"
              >
                Message Us on WhatsApp
              </a>
            </p>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} BookyShow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
