import React, { useState, useEffect } from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Card from './Card.jsx';
import axios from "axios";

export default function Cards({ category, city, search, clickBusqueda, favourite }) {
    const baseUrlProductosRecomendados = "http://localhost:8080/products/all";
    const baseUrlPorCategoria = `http://localhost:8080/products/get/category/${category}`;
    const baseUrlPorCiudad = `http://localhost:8080/products/get/city/${city}`;
    const baseUrlFavourite = "http://localhost:8080/products/all";
    //const baseUrlPorFecha = `http://localhost:8080/products/date`;
    //const baseUrlPorCiudadYFecha = `http://localhost:8080/products/search/date/${search}`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const limitCardPerPage = 8;
    const [numberPages, setNumberPages] = useState(null);
    const [titulo, setTitulo] = useState("Recomendaciones");

    useEffect(() => {
        if (category === "All" && search === false && favourite === false) {
            axios.get(baseUrlProductosRecomendados)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                    setTitulo("Recomendaciones");
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else if (category !== "All" && search === false && city === "" && favourite === false) {
            axios.get(baseUrlPorCategoria)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                    setTitulo(`Resultados para ${category}`);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else if (search && city !== "") {
            axios.get(baseUrlPorCiudad)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                    setTitulo(`Resultados para ${response.data[0].city.name}`);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else if (favourite) {
            axios.get(baseUrlFavourite)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                    setTitulo(`Favoritos`);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                    setLoading(false);
                });
        } else {
            setErrorMessage("Error");
            setLoading(false);
        }
        setNumberPages(data.length / limitCardPerPage);
        console.log(data);
    }, [category, clickBusqueda, favourite]);

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
                                features={e.features}
                                latitude={e.latitude}
                                longitude={e.longitude}
                                address={e.address}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

