import React from "react";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/utils/navbar";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import ServiceDetails from "./components/services/servicedetails";
import BookNow from "./components/book/booknow";
import Service from "./components/services/service";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
