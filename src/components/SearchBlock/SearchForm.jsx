import React from "react";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import './styles.css';

function SearchForm() {
  return (
    <form className="search-form" action="">
      <div className="icon-select-box">
        <i className="fas fa-map-marker-alt location"></i>
        <SelectCity />
      </div>
      <div className="icon-select-box">
        <i className="fas fa-calendar-day calendar"></i>
        <SelectDate />
      </div>
      <button className="button-search">Buscar</button>
    </form>
  );
}

export default SearchForm;