import React from 'react';
import './LandingSection.css';
import { motion } from 'framer-motion';
import profileImg from '../assets/david.jpg'; 

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="review-container">
        <div className="review-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Review
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. tincidunt et scelerisque etiam. Blandit hendrerit id nec elementum ligula et.
          </motion.p>
          <motion.button
            className="review-btn"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            View all reviews
          </motion.button>
        </div>

        <motion.div
          className="review-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="quote">“</p>
          <p className="review-text">
            <strong>Pedi-Tracker</strong> hospital dolor sit amet, consectetur adipiscing elit. tincidunt et scelerisque etiam. Blandit hendrerit id nec elementum ligula at.
          </p>
          <div className="reviewer">
            <img src={profileImg} alt="David Mark" />
            <div>
              <h4>David Mark</h4>
              <span>Client</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div id='updates' className="news-updates">
        <h2>News Updates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu tincidunt et scelerisque etiam. Blandit hendrerit id nec elementum ligula et.
        </p>
      </div>

      
    </section>
  );
};

export default LandingSection;