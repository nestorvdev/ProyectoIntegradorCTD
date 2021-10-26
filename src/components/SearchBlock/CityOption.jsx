import React from "react";
import "./styles.css";

function CityOption(props) {
  return (
    <React.Fragment>
        <h3>{props.city}, </h3>
        <p>Argentina</p>
    </React.Fragment>
  );
}

export default CityOption;
