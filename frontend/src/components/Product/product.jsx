import React from "react";
import {useParams} from "react-router-dom";
import data from "../Cards/data.json";
import Styles from './styles.module.css';


function Product() {
    let {id} = useParams();
    return (
        <div>
            <h1>Producto: {id}</h1>            
            <h2>Soy un increíble alojamiento</h2>
            <p>{data[id].title}</p>
            <p>{data[id].category}</p>
            <p>{data[id].location}</p>
            <img className={Styles.productImg} src={data[id].img}/>
            <p>{data[id].description}</p>
        </div>
    );
}

export default Product;
