import React, { useEffect } from "react";
import "./home_service.css";
import power from "../../assets/power_ac_service1_cleanup.jpeg";
import ac_service_lite from "../../assets/ac service lite.webp";
import anti_rust from "../../assets/anti-rust.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="home_services-container">
      <h1 data-aos="fade-right"> Our services</h1>
      <div className="header-container" data-aos="fade-left">
        <h2>
          Explore Our <span>Cleaning Services</span>
        </h2>
        <button className="view-all-btn" data-aos="fade-up">
          <a href="/service">View All Service</a>
        </button>
      </div>
      <div className="home_services" data-aos="fade-up">
        <div className="home_service-card">
          <img src={power} alt="Power AC" />
          <h3>Power AC</h3>
          <ul>
            <li>Advanced Foam-jet Technology</li>
            <li>Deep jet cleaning of outdoor unit</li>
          </ul>
        </div>
        <div className="home_service-card">
          <img src={ac_service_lite} alt="AC Service Lite" />
          <h3>AC Service Lite</h3>
          <ul>
            <li>Advanced Foam-jet Technology</li>
            <li>Deep jet cleaning of outdoor unit</li>
          </ul>
        </div>
        <div className="home_service-card">
          <img src={anti_rust} alt="Anti-rust deep clean AC service" />
          <h3>Anti-rust deep clean AC service</h3>
          <ul>
            <li>Advanced Foam-jet Technology</li>
            <li>Deep jet cleaning of outdoor unit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
