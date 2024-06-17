import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <input type="checkbox" id="sidebar-active" />
      <h3 className="logo">
        <a href="/" style={{ textDecoration: "none", color: "light blue" }}>
          Modern Coolers
        </a>
      </h3>
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="navbar-links-container">
        <div className="navbar-links-header">
          <div className="company-name">
            <a href="/" style={{ fontWeight: "bolder" }}>
              Modern Cooler
            </a>
          </div>
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/service">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/book">Book</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
