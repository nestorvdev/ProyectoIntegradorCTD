import React from "react";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import Styles from "./styles.module.css"

function SearchForm({handleSearch}) {
  return (
    <form className={Styles.gridContainer} action="">
      <div className={`${Styles.iconSelectBox} grid-item`}>      
        <SelectCity />
      </div>
      <div className={`${Styles.iconSelectBox} grid-item`}>       
        <SelectDate />
      </div>
      <button onClick={(e) => {handleSearch(e)}}className={`${Styles.buttonSearch} limitation`}>Buscar</button>
    </form>
  );
}

export default SearchForm;