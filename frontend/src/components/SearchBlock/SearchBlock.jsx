import React from 'react';
import SearchForm from './SearchForm';
import Styles from "./styles.module.css"
import StylesApp from "../../App.module.css"

function SearchBlock() {
    return (
        <div className={`${Styles.container} ${StylesApp.delimiter}`}>
            <div className={`${Styles.subContainer} ${StylesApp.delimiterChild}`}>
                <h1>Buscá ofertas en hoteles, casas y mucho más</h1>
                <SearchForm />
            </div>
        </div>
    )
}

export default SearchBlock;