import React, { useEffect } from "react";
import Stats from "./stats";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-header">
        <h2 data-aos="fade-left">About Us</h2>
        <h4 data-aos="fade-right">Who We Are</h4>
        <p data-aos="fade-up">
          Modern Coolers is a technology platform offering a variety of
          cooler-related services at home. Customers use our platform to book
          services such as cooler repairs, installations, uninstallations, and
          cleaning. These services are delivered in the comfort of their home
          and at a time of their choosing. We promise our customers a
          high-quality, standardized, and reliable service experience. To
          fulfill this promise, we work closely with our hand-picked service
          partners, enabling them with technology, training, products, tools,
          financing, insurance, and brand support, helping them succeed and
          deliver on this promise.
        </p>
        <h4 data-aos="fade-right">Our Vision</h4>
        <p data-aos="fade-up">
          Empower millions of professionals worldwide to deliver cooler services
          at home like never experienced before.
        </p>
        <h3 data-aos="fade-left">About AC Service & Repair</h3>
        <h5 data-aos="fade-right">Services Offered in AC Service and Repair</h5>
        <ul data-aos="fade-up">
          <li>
            <strong>1. Repairs: </strong>Choose this option for diagnosis and
            repair of your AC. The professional will check the AC upon
            visitation and provide a quotation depending on the condition of the
            appliance.
          </li>
          <li>
            <strong>2. Uninstalling an Existing AC: </strong>Select this option
            when you need professionals to dismount your AC. The appliance will
            be checked before the AC uninstallation.
          </li>
          <li>
            <strong>3. Installing an AC: </strong>Choose this service for AC
            installation at your place. The professional will ensure that the AC
            is running properly as gas pressure and performance of the appliance
            will be checked post AC installation.
          </li>
          <li>
            <strong>4. Wet Services: </strong>This service includes an
            end-to-end cleaning of your AC. Cooling coils, condenser coils,
            outer panel, drain, and filter pipes will be extensively cleaned and
            washed. Choose this service when you want your AC to be properly
            cleaned.
          </li>
        </ul>
      </div>
      <div className="stats-section" data-aos="fade-up">
        <Stats />
      </div>
    </div>
  );
};

export default About;
