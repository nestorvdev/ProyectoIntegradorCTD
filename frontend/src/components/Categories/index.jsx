import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Category from './Category'
import axios from "axios";
import {useState , useEffect } from 'react';

function Categories() { 
    const baseURL = "http://localhost:8080/categories/all";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    },[]);

    if (errorMessage) return <p>{errorMessage}</p>;
    return (
        <>
            <div className="categoryContainer delimiter">
                <div className="categoryBlock delimiterChild">
                    <h2>Buscar por tipo de alojamiento</h2>
                    { loading ? ( <p>Loading Data...</p>
                    ) : ( <div className="categoryBox">
                        {data.map((category, index) => (
                                      <Category key={index} title={category.title} image="image1" />
                                    ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Categories;