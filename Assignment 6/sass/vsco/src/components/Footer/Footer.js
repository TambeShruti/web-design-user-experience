import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="About/">About VSCO</a>
            </li>
            <li>
              <a href="Products/">Products</a>
            </li>
            <li>
              <a href="Plans/">Plans</a>
            </li>
            <li>
              <a href="Careers/">Careers</a>
            </li>
            <li>
              <a href="Newsroom/">Newsroom</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FEATURES</h3>
          <ul>
            <li>
              <a href="WhatsNew/">What's New</a>
            </li>
            <li>
              <a href="Editor/">Photo Editor</a>
            </li>
            <li>
              <a href="Mobile/">Mobile App</a>
            </li>
            <li>
              <a href="Filters/">Photo Filters</a>
            </li>
            <li>
              <a href="Community/">Creative Community</a>
            </li>
            <li>
              <a href="Work/">VSCO for Work</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMMUNITY</h3>
          <ul>
            <li>
              <a href="Stories/">Photographer Stories</a>
            </li>
            <li>
              <a href="Learn/">Learn</a>
            </li>
            <li>
              <a href="Guidelines/">Guidelines</a>
            </li>
            <li>
              <a href="Safety/">Safety</a>
            </li>
            <li>
              <a href="Support/">Support</a>
            </li>
            <li>
              <a href="Forum">Forum</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>GUIDES</h3>
          <ul>
            <li>
              <a href="Basics/">Photography Basics</a>
            </li>
            <li>
              <a href="Tips/">Photography Tips and Techniques</a>
            </li>
            <li>
              <a href="Guides/">Photography Guides</a>
            </li>
            <li>
              <a href="Collections/">Curated Photo Collections</a>
            </li>
            <li>
              <a href="Business/">Photography Business</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="legal-links">
            <li>
              <a href="Terms/">Terms of Use</a>
            </li>
            <li>
              <a href="Privacy/">Privacy Policy</a>
            </li>
            <li>
              <a href="Cookie/">Cookie Notice</a>
            </li>
            <li>
              <a href="Choices/">Your Privacy Choices</a>
            </li>
          </ul>
          <p>Copyright 2024 VSCO. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
