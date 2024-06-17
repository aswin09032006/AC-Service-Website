import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Modern Cooler. All rights reserved.
        </p>
        <p>
          Contact us:{" "}
          <a href="mailto:contact@yourcompany.com">mooderncooler@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
