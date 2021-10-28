import React from "react";
import "./styles.css";

function CityOption(props) {
  return (
    <React.Fragment>
        <h3 className="titleCity">{props.city}, </h3>
        <h3 className="titleCountry">{props.country}</h3>
    </React.Fragment>
  );
}

export default CityOption;
