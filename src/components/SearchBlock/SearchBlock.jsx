import React from 'react';
import SearchForm from './SearchForm';
import './styles.css';

function SearchBlock() {
    return (
        <div className="container">
            <div className="subContainer">
                <h1>Buscá ofertas en hoteles, casas y mucho más</h1>
                <SearchForm />
            </div>
        </div>
    )
}

export default SearchBlock;