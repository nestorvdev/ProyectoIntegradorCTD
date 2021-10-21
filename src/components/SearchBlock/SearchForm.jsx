import React from "react";
import Select from "./Select";
import './styles.css';

function SearchForm() {
  return (
    <form className="search-form" action="">
      <div className="icon-select-box">
        <i className="fas fa-map-marker-alt location"></i>
        <Select type="city" title="¿A dónde vamos?" />
      </div>
      <div className="icon-select-box">
        <i className="fas fa-calendar-day calendar"></i>
        <Select type="date" title="Check in - Check out" />
      </div>
      <button className="button-search">Buscar</button>
    </form>
  );
}

export default SearchForm;