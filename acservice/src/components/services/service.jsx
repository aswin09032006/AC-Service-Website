import React, { useState, useEffect } from "react";
import "./service.css";
import ServiceCard from "./servicecard";
import ServiceDetails from "./servicedetails";
import ac_service_lite from "../../assets/ac service lite.webp";
import anti_rust from "../../assets/anti-rust.webp";
import ac_install from "../../assets/ac_install.webp";
import ac_uninstall from "../../assets/ac_uninstall.webp";
import gas from "../../assets/gas.webp";
import power from "../../assets/power_ac_service1_cleanup.jpeg";
import powerac1 from "../../assets/powerac1.jpg";
import powerac2 from "../../assets/powerac2.jpg";
import powerac3 from "../../assets/powerac3.webp";
import powerac4 from "../../assets/powerac4.webp";
import powerac5 from "../../assets/powerac5.jpeg";
import anti1 from "../../assets/anti1.webp";
import anti2 from "../../assets/anti2.webp";
import acservice3 from "../../assets/acservice3.jpg";
import gas1 from "../../assets/gasleak1.webp";
import gas2 from "../../assets/gasleak2.webp";
import gas3 from "../../assets/gasleak3.jpg";
import gas4 from "../../assets/gasleak4.jpg";
import gas5 from "../../assets/gasleak4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [modalData, setModalData] = useState(null);

  const openModal = (serviceData) => {
    console.log("Opening Modal with Data:", serviceData);
    setModalData(serviceData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    if (modalData) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalData]);

  return (
    <div>
      <div className="service-container">
        <div className="service-header" data-aos="fade-right">
          <h2>Our service</h2>
          <p>
            Modern cooler® is a heating and cooling service company with a
            history of excellence, customer service, and quality craftsmanship.
            We specialize in HVAC service, replacement, and repair for both
            residential and commercial customers.
          </p>
        </div>
      </div>

      <div className="services-grid" data-aos="fade-up">
        <ServiceCard
          title="Power Saver AC service"
          imageSrc={power}
          rate="Starts at Rs.899"
          points="Advanced Foam-jet Technology"
          points1="Deep jet cleaning of outdoor unit"
          altText="Power AC"
          description="A comprehensive service to enhance AC efficiency."
          details="This service includes cleaning of both indoor and outdoor units using advanced foam-jet technology."
          title_head={[
            "Pre-service checks",
            "Jacket for mess-free service",
            "Indoor unit Foam-jet cleaning",
            "Outdoor unit Powerjet cleaning",
            "Final checks & clean-up",
          ]}
          packages={[
            "Detailed inspection including gas check to identify repairs ",
            "AC jacket for spill prevention during service and cleanup of the work area",
            "Deep cleaning of filters, coils, fins, and drain trays using perfectly safe Foam Jet technology",
            "Opening and thorough cleaning with a Power-jet (if easily accessible)",
            "Technician ensures proper functioning by checking for pipe blockages & drain tray leakage",
          ]}
          images={[powerac1, powerac2, powerac3, powerac4, powerac5]}
          about_service={[
            "Advanced Foam-jet cleaning of indoor unit",
            "Thorough cleaning of outdoor unit",
            "Final checks and clean up",
          ]}
          openModal={openModal}
        />

        <ServiceCard
          title="Anti-rust deep clean AC service"
          imageSrc={anti_rust}
          rate="Starts at Rs.1150"
          points="Prevent frequent gas leakages through a unique anti-rust spray"
          points1="Applicable on both split and window AC"
          altText="Anti-Rust deep clean AC service"
          description="A specialized service to prevent rust and extend the life of your AC."
          details="This service includes an anti-rust spray application and deep cleaning."
          title_head={["Deep cleaning ", "Anti-rust protection"]}
          packages={[
            "Deep cleaning of indoor & outdoor unit  before the anti-rust protection is applied ",
            "Specialised anti-rust coating for copper coils to prevent gas leakage (Upto 1 year)",
          ]}
          images={[anti1, anti2]}
          openModal={openModal}
        />
        <ServiceCard
          title="AC service lite"
          imageSrc={ac_service_lite}
          rate="Starts at Rs.799"
          points="Basic cleaning with water jet technology"
          points1="Basic cleaning of outdoor unit"
          altText="AC service lite"
          description="A basic service to maintain your AC."
          details="This service includes basic cleaning of indoor and outdoor units."
          title_head={[
            "Pre-service checks",
            "Jacket for mess-free service",
            "Indoor unit jet cleaning",
            "Final checks & clean-up",
          ]}
          packages={[
            "Detailed inspection including gas check to identify repairs",
            "AC jacket for spill prevention during service and cleanup of the work area",
            "Thorough cleaning of cooling coil & body. Exterior wash of the outdoor unit",
            "Technician ensures proper functions by checking pipe blockage & drain tray leakage at end of service",
          ]}
          images={[powerac1, powerac2, acservice3, powerac5]}
          about_service={[
            "Basic water-jet cleaning of indoor unit ",
            "Basic cleaning of outdoor unit",
            "Final checks and clean up",
          ]}
          openModal={openModal}
        />
        <ServiceCard
          title="AC repair"
          imageSrc={power}
          rate="Starts at Rs.299"
          points="Detailed issue diagnosis with same day resolution"
          points1="Visit charges of Rs.299 will be adjusted in the final bill"
          altText="AC repair"
          description="Professional repair service for all types of AC issues."
          details="This service includes a thorough diagnosis and repair of AC problems."
          about_service={[
            "Accurate inspection followed by repair quotation",
            "AC repair using high-quality spare parts and tools",
            "Final checks and clean up",
          ]}
          openModal={openModal}
        />
        <ServiceCard
          title="Gas leak fix and refill"
          imageSrc={gas3}
          rate="Starts at Rs.2500"
          points="Thorough diagnosis, leak identification and fixing"
          points1="Gas refill to avoid leakages"
          altText="Gas leak fix and refill"
          description="Expert service to fix gas leaks and refill AC gas."
          details="This service includes leak detection, fixing, and gas refilling."
          title_head={[
            "Pre-service checks",
            "Leak identification & fixing",
            "Gas refill",
            "Post-service cleanup",
            "Final checks",
          ]}
          packages={[
            "Voltage, ampere, pressure and other safety checks ",
            "Leak testing with nitrogen, compressed air & soap solution. Fixing the leaks by brazing & rechecking",
            "Filling of the gas by weight/ back pressure",
            "Post-service cleanup of the AC & service area",
            "Technician checks AMP, pressure, air flow, temp, noise level in the end to ensure proper functioning",
          ]}
          images={[gas1, gas2, gas3, gas4,  powerac5]}
          openModal={openModal}
        />
        <ServiceCard
          title="AC install"
          imageSrc={ac_install}
          rate="Starts at Rs.799"
          points="Installation of indoor and outdoor units with free gas check"
          points1="Procurement of spare parts (at extra cost)"
          altText="AC Install"
          description="Professional installation of AC units."
          details="This service includes installation of indoor and outdoor units and a free gas check."
          about_service={[
            "Drilling",
            "wiring connection",
            "installation of the units and pipe fixes",
            "Gas check to prevent leakages",
            "Cooling rate and device checks followed by cleanup of service area",
          ]}
          about_service1={[
            "Uninstallation of the existing AC",
            "Spare parts like copper wires and pipes (extra charges)",
            "Stands and fastener(for fixing stand)",
            "POP filling",
            "Core cutting",
          ]}
          openModal={openModal}
        />
        <ServiceCard
          title="AC uninstall"
          imageSrc={ac_uninstall}
          rate="Starts at Rs.399"
          points="Uninstall of indoor units"
          points1="Uninstall of outdoor units"
          altText="AC uninstall"
          description="Safe and professional AC unit uninstallation."
          details="This service includes uninstallation of both indoor and outdoor units."
          about_service1={[
            "Uninstallation of indoor and outdoor units",
            "Pipe fixes",
            "AC packing(material to be provided by the customer",
            "Cleanup of service area",
          ]}
          about_service={[
            "Masonry/woodwork",
            "Spare parts like copper wires and pipes (extra charges)",
            "Stands and fastener(for fixing stand)",
            "POP filling",
          ]}
          openModal={openModal}
        />
      </div>

      {modalData && <ServiceDetails {...modalData} closeModal={closeModal} />}
    </div>
  );
};

export default Service;
