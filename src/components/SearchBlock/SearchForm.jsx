import React from "react";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import './styles.css';

function SearchForm() {
  return (
    <form className="search-form" action="">
      <div className="icon-select-box">
        <i className="fas fa-map-marker-alt location"></i>
        <SelectCity type="city" title="¿A dónde vamos?" />
      </div>
      <div className="icon-select-box">
        <i className="fas fa-calendar-day calendar"></i>
        <SelectDate type="date" title="Check in - Check out" />
      </div>
      <button className="button-search">Buscar</button>
    </form>
  );
}

export default SearchForm;