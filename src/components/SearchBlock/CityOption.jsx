import React from "react";
import "./styles.css";

function CityOption(props) {
  return (
    <div className="city-container">
      {/* <i className="fas fa-map-marker-alt option-location-icon"></i> */}
      <div className="city-icon"></div>
      <div className='city-name'>
        <h3>{props.city}</h3>
        <p>Argentina</p>
      </div>
    </div>
  );
}

export default CityOption;
