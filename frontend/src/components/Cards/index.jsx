import React, { useState, useEffect } from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Card from './Card.jsx';
import dataJSON from './data.json';
import dataSearch from './dataSearch.json';
import axios from "axios";

export default function Cards({ titulo, category, city, search, clickBusqueda }) {
    const baseUrlProductosRecomendados = "http://localhost:8080/products/all";
    const baseUrlPorCategoria = `http://localhost:8080/products/get/category/${category}`;
    const baseUrlPorCiudad = `http://localhost:8080/products/get/city/${city}`;
    //const baseUrlPorFecha = `http://localhost:8080/products/date`;
    //const baseUrlPorCiudadYFecha = `http://localhost:8080/products/search/date/${search}`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (category === "All" && search === false) {
            axios.get(baseUrlProductosRecomendados)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else if (category != "All" && search === false && city === "") {
            axios.get(baseUrlPorCategoria)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else if (search && city != "") {
            axios.get(baseUrlPorCiudad)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else {
            setErrorMessage("Error");
            setLoading(false);
        }
    }, [category, clickBusqueda]);


    /* const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.value;
        const dataSearch = data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setData(dataSearch);
    }; */

    if (errorMessage && loading) {
        return (
            <div className={`${StylesApp.delimiter}`}>
                <div className={`${Styles.cardsBlock} ${StylesApp.delimiterChild}`}>
                    <h2>Resultados</h2>
                    Resultados no disponibles - Falta la conexión con el Back
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={`${StylesApp.delimiter}`}>
                <div className={`${Styles.cardsBlock} ${StylesApp.delimiterChild}`}>
                    <h2>{titulo}</h2>
                    <div className={Styles.cardsBox}>
                        {data.map((e, index) =>
                            <Card image={e.images.length > 0 ? e.images[0].url : ""}
                                cardCategory={e.category.title}
                                name={e.name}
                                city={e.city.name}
                                country={e.city.country}
                                description={e.description}
                                key={index}
                                id={e.id}
                                reference={e.reference}
                                qualification={e.qualification}
                                features={e.features} />
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

