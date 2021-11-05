import React from "react";
import Styles from "./styles.module.css"

function CityOption(props) {
  return (
    <React.Fragment>
      <div onClick={() => {props.handleCity(props.city)}}>
        <h3 className={Styles.titleCity}><pre>{props.city}, </pre></h3>
        <h3 className={Styles.titleCountry}>{props.country}</h3>
      </div>
    </React.Fragment>
  );
}

export default CityOption;
