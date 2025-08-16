import React from 'react';
import './Footer.css';
import footerlogo from '../assets/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="footer-content container py-5">
        {/* Logo */}
        <div>
          <img src={footerlogo} alt="Footer Logo" />

          {/* Social Icons */}
          <div className='social-icon-flex mt-3'>
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>

          <p className='footer-copyright'>2025 Copyright l Crypgo </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4 className="footer-links-title">Links</h4>
          <span>Buy $ Sell</span>
          <span>Development</span>
          <span>Work</span>
          <span>Portfolio</span>
          <span>Upgrade</span>
          <span>Docs</span>
        </div>

        {/* Information */}
        <div className="footer-links">
          <h4 className="footer-links-title">Information</h4>
          <span>Terms</span>
          <span>Disclosures</span>
          <span>Disclosures</span>
          <span>Portfolio</span>
          <span>Latest News</span>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="footer-links-title">Subscribe</h4>
          <p className='footer-subscribe'>Subscribe to get the latest <br />news from us</p>
          <input type="email" placeholder="Enter your email"  className='footer-input'/>
        </div>
      </div>
      <hr style={{width: "100%"}}/>
      <div className="text-center">
        {/* design by Obadimu Adedamola  */}
        <p className="">© Your Site Name, All Rights Reserved. Designed By <span style={{color: "#94db9b"}}>Obadimu Adedamola</span></p>
      </div>
    </div>
  );
};

export default Footer;
