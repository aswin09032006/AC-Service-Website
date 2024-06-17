import React, { useEffect } from "react";
import "./processflow.css";
import { PiClipboardTextFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";
import { PiFanFill } from "react-icons/pi";
import { HiFaceSmile } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessFlow = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="process-flow">
      <h2 data-aos="fade-left">Our Process</h2>
      <h3 data-aos="fade-right">Here's How It Works</h3>
      <div className="steps">
        <div className="step" data-aos="fade-up">
          <div className="icon">
            <PiClipboardTextFill className="step-icon" />
          </div>
          <h4>Book a Service</h4>
          <p>First you need to book a service</p>
        </div>
        <div className="step" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">
            <HiUsers className="step-icon" />
          </div>
          <h4>Team Arrives</h4>
          <p>Our team arrives at your desired location on time</p>
        </div>
        <div className="step" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">
            <PiFanFill className="step-icon" />
          </div>
          <h4>Service</h4>
          <p>We provide the service you need</p>
        </div>
        <div className="step" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">
            <HiFaceSmile className="step-icon" />
          </div>
          <h4>Final Result</h4>
          <p>
            Finally, we check the result and ensure it meets your expectations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
