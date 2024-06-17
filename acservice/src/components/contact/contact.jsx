import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import Footer from "../footer/footer";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7cty0df",
        "template_fucezh3",
        form.current,
        "b5_hdd1PJaddlSST2"
      )
      .then(
        () => {
          swal("Success", "Your message has been sent!", "success");
          form.current.reset();
        },
        (error) => {
          swal(
            "Failed",
            "There was an error sending your message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="contact-us">
      <h1 data-aos="fade-up">Contact Us</h1>
      <div className="form-container">
        <div className="form" data-aos="fade-right">
          <h2>Get in touch with us.</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Enter Your Name..."
                className="name"
                aria-label="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="from_mail"
                required
                placeholder="Enter Your Email..."
                className="email"
                aria-label="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="from_phone"
                required
                placeholder="Enter Your Phone..."
                className="phone"
                aria-label="Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website (Optional)</label>
              <input
                type="url"
                id="website"
                name="from_website"
                placeholder="Website"
                className="website"
                aria-label="Website"
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="from_message"
                placeholder="Enter Your Message..."
                className="message"
                aria-label="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-contact" data-aos="fade-up">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info" data-aos="fade-left">
          <h2>Need more help?</h2>
          <div>
            <h3>Call Now</h3>
            <p>+919750431407 </p>
          </div>
          <div>
            <h3>Email Address</h3>
            <p>mooderncooler@gmail.com</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>
              609, Sathy Rd, Erode Fort, Veerappanchatram, Erode, Tamil Nadu
              638011
            </p>
          </div>
          <div className="map-container" data-aos="fade-up">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=609,%20Sathy%20Rd,%20Erode%20Fort,%20Veerappanchatram,%20Erode,%20Tamil%20Nadu%20638011+(modern%20coolers)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com" className="social-link">
          f
        </a>
        <a href="https://www.instagram.com" className="social-link">
          i
        </a>
        <a href="https://www.twitter.com" className="social-link">
          x
        </a>
        <a href="https://www.linkedin.com" className="social-link">
          in
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
