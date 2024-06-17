import React, { useEffect } from "react";
import "./home.css";
import backgroundImage from "../../assets/bg1.png";
import snowflake from "../../assets/snowflake.png";
import ProcessFlow from "./processflow";
import HomeServices from "./home_service";
import lgIcon from "../../assets/lgicon.webp";
import voltasIcon from "../../assets/voltas.png";
import haierIcon from "../../assets/haier.png";
import hitachiIcon from "../../assets/hitachi.png";
import samsungIcon from "../../assets/samsung.png";
import godrejIcon from "../../assets/godrej.webp";
import mitsubishiIcon from "../../assets/mitsubishi.webp";
import daikinIcon from "../../assets/daikin.webp";
import bluestarIcon from "../../assets/bluestar.png";
import panasonicIcon from "../../assets/panasonic.webp";
import AOS from "aos";
import "aos/dist/aos.css";


const brandIcons = {
  LG: lgIcon,
  Voltas: voltasIcon,
  Haier: haierIcon,
  Hitachi: hitachiIcon,
  Samsung: samsungIcon,
  Godrej: godrejIcon,
  Mitsubishi: mitsubishiIcon,
  Daikin: daikinIcon,
  Bluestar: bluestarIcon,
  Panasonic: panasonicIcon,
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="home-page-ac-image">
      <div
        className="homepage"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="home-page-quote" data-aos="fade-up">
          Your comfort, our priority.
        </h1>
      </div>
      <HomeServices />
      <ProcessFlow />
      <div className="brands-image-container-home">
        <h2 style={{ marginBottom: "150px" }} data-aos="slide-right">
          We service all brands
        </h2>
        <div className="brand-icons-home" data-aos="fade-right">
          {Object.keys(brandIcons).map((brand) => (
            <div key={brand} className="brand-icon-home">
              <img src={brandIcons[brand]} alt={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
