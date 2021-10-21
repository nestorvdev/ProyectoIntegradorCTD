import React from 'react';
import SearchForm from './SearchForm';
import './styles.css';

function Search() {
    return (
        <div className="container">
            <h1>Buscá ofertas en hoteles, casas y mucho más</h1>
            <SearchForm />
        </div>
    )
}

export default Search;