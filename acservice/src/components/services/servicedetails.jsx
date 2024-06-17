import React from "react";
import "./servicedetails.css";
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

const ServiceDetails = ({
  title,
  description,
  details,
  packages,
  rate,
  points,
  points1,
  images,
  title_head,
  about_service,
  about_service1,
  closeModal,
}) => 
  
  {
  const combinedData = packages?.map((pkg, index) => ({
    package: pkg,
    image: images && images[index],
    title_head: title_head && `${index + 1}. ${title_head[index]}`
  }));

  return (
    <div className="modal">
      <div onClick={closeModal} className="overlay"></div>
      <div className="modal-content">
        <div className="details-header">
          <h1>{title}</h1>
          <button className="close-modal" onClick={closeModal}>&times;</button>
        </div>
        <div className="details-content">
          <p>{description}</p>
          <div className="additional-details">
            <p>{details}</p>
          </div>

          {about_service && about_service.length > 0 && (
            <div className="about-service">
              <h2>About the service</h2>
              <ul>
                {about_service.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {about_service1 && about_service1.length > 0 && (
            <div className="additional-info">
              <h2>Additional Information</h2>
              <ul>
                {about_service1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {combinedData && combinedData.length > 0 && (
            <div className="packages">
              <h2>How it works</h2>
              {combinedData.map((data, index) => (
                <div key={index} className="package">
                  {data.title_head && <h3>{data.title_head}</h3>}
                  <p>{data.package}</p>
                  {data.image && (
                    <img
                      src={data.image}
                      alt={`${title} ${index}`}
                      className="gallery-image"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="brands-image-container">
            <h2>We service all brands</h2>
            <div className="brand-icons">
              {Object.keys(brandIcons).map((brand) => (
                <div key={brand} className="brand-icon">
                  <img src={brandIcons[brand]} alt={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
