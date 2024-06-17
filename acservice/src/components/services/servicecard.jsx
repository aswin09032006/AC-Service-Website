import React from "react";
import "./servicecard.css";

const ServiceCard = ({
  title,
  description,
  imageSrc,
  altText,
  details,
  packages,
  rate,
  points,
  points1,
  title_head,
  images,
  about_service,
  about_service1,
  openModal,
}) => {
  const handleOnClick = () => {
    console.log("Service Card Clicked:", title); // Debugging line
    openModal({
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
    });
  };

  return (
    <div className="service-card" onClick={handleOnClick}>
      <img src={imageSrc} alt={altText} className="service-card-image" />
      <div className="view-details">
        <span>View Details</span>
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{rate}</p>
        <ul>
          <li>{points}</li>
          <li>{points1}</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
