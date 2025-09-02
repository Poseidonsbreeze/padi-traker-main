import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaClock } from "react-icons/fa";
import patients from "../assets/patients.jpg";
import docker from "../assets/dockors.jpg";
import vac from "../assets/vaccines.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title">
            Pedi-<span>Tracker</span>
          </h2>
          <p className="footer-text">
            Brought to you by{" "}
            <span className="foundation-highlight">The Dorcas Cancer</span>
          </p>
          <p className="foundation-highlight">Foundation</p>

          {/* Read More button directly under Foundation */}
          <button className="read-more-btn">Read More</button>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Latest News */}
        <div className="footer-news">
          <h3 className="news-title">Latest News</h3>

          <div className="news-item">
            <img src={patients} alt="news1" />
            <div>
              <p className="news-text">High Quality Treatment and Extra Care for Kids</p>
              <span className="news-date">July 05, 2019</span>
            </div>
          </div>

          <div className="news-item">
            <img src={docker} alt="news2" />
            <div>
              <p className="news-text">Diagnosis of illness after taking Vaccine.</p>
              <span className="news-date">October 18, 2020</span>
            </div>
          </div>

          <div className="news-item">
            <img src={vac} alt="news3" />
            <div>
              <p className="news-text">Is COVID-19 Vaccine safe for all?</p>
              <span className="news-date">January 25, 2021</span>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h3>Stay in the Loop</h3>
          <p>Want to follow our progress? Get updates, insights, and launch news.</p>
          <form className="subscribe-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="divider" />

      {/* Bottom Info */}
      <div className="footer-bottom">
        <div className="footer-contact">
          <span><FaPhoneAlt /> (+23) 555-0178-890</span>
          <span><FaPhoneAlt /> (+23) 555-0178-894</span>
        </div>

        <div className="footer-hours">
          <span><FaClock /> Mon-Fri: 9:00AM-10:00PM</span>
          <span className="weekend">Sat-Sun: 9:00AM-01:00PM</span>
        </div>

        <div className="footer-emails">
          <p>peditracker@gmail.com</p>
          <p>Info@tdcf.ng</p>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 Pedi-Tracker. All rights reserved. A project of The Dorcas Cancer Foundation.
      </p>
    </footer>
  );
}