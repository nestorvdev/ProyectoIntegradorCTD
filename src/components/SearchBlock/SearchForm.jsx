import React from "react";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import './styles.css';

function SearchForm() {
  return (
    <form className="grid-container" action="">
      <div className="icon-select-box grid-item">
        {/* <div className="iconCityBar"></div> */}
        {/* <i className="fas fa-map-marker-alt location"></i> */}
        <SelectCity />
      </div>
      <div className="icon-select-box grid-item">
       {/*  <i className="fas fa-calendar-day calendar"></i> */}
      {/*  <div className="calendar"></div> */}
        <SelectDate />
      </div>
      <button className="button-search limitation">Buscar</button>
    </form>
  );
}

export default SearchForm;