import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

import "./booknow.css";

const BookNow = () => {
  const form = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm(
        "service_7cty0df",
        "template_vqkblnf",
        form.current,
        "b5_hdd1PJaddlSST2"
      )
      .then(
        () => {
          swal.fire("Success", "Your message has been sent!", "success");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
          swal.fire(
            "Failed",
            "There was an error sending your message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="reservespotpage">
      <div className="Reserve">
        <div className="reserve-container" data-aos="fade-up">
          <h1>Reserve your spot</h1>
          <form ref={form} className="reserve-form-grid" onSubmit={sendEmail}>
            <div className="reserve-form-group" data-aos="fade-left">
              <label htmlFor="date">Select a date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                placeholder="Date"
              />
            </div>
            <div className="reserve-form-group" data-aos="fade-right">
              <label htmlFor="time">Select a time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                placeholder="Time"
              />
            </div>
            <div className="reserve-form-group" data-aos="fade-left">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="First name"
              />
            </div>
            <div className="reserve-form-group" data-aos="fade-right">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last name"
              />
            </div>
            <div className="service-preference" data-aos="fade-left">
              <label htmlFor="servicePreference">Service Preference</label>
              <select id="servicePreference" name="servicePreference">
                <option value="">Select Preference</option>
                <option value="Power Saver AC service">
                  Power Saver AC service
                </option>
                <option value="Anti-rust deep clean AC service">
                  Anti-rust deep clean AC service
                </option>
                <option value="AC service lite">AC service lite</option>
                <option value="AC repair">AC repair</option>
                <option value="Gas leak fix and refill">
                  Gas leak fix and refill
                </option>
                <option value="AC install">AC install</option>
                <option value="AC uninstall">AC uninstall</option>
              </select>
            </div>
            <div className="reserve-form-group" data-aos="fade-right">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email address"
              />
            </div>
            <div className="reserve-form-group" data-aos="fade-left">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone number"
              />
            </div>
            <div
              className="reserve-form-group full-width"
              data-aos="fade-right"
            >
              <label htmlFor="location">Address</label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="Enter your address here"
              />
            </div>
            <div className="reserve-form-group full-width">
              <button type="submit" className="book-now-button">
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
