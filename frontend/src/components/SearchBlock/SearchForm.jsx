import React from "react";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import './styles.css';

function SearchForm() {
  return (
    <form className="grid-container" action="">
      <div className="icon-select-box grid-item">      
        <SelectCity />
      </div>
      <div className="icon-select-box grid-item">       
        <SelectDate />
      </div>
      <button className="button-search limitation">Buscar</button>
    </form>
  );
}

export default SearchForm;