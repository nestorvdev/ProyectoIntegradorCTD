import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "./titleBar";
import ScoreBar from "./scoreBar";
import ImageBar from "./imageBar";


function Product(props) {
    let { id } = useParams();

    /* se crea el objeto vacio */


    let productAux = {
        id:id,
        nombre: "nombreHotel",
        descripcion: "descripcion hotel",
        categoria: {
            title: "tituloCategoria",
            description: "descripcionCategoria",
            imageUrl: "imagenCategoria"
        },
        imagenes: [
            { id: 1, titulo: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612" },
            { id: 2, titulo: "fotoImagen2", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612" },
            { id: 3, titulo: "fotoImagen2", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612" },
            { id: 4, titulo: "fotoImagen2", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612" },
            { id: 5, titulo: "fotoImagen2", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612" },
            { id: 6, titulo: "fotoImagen2", url: "fotoImagen2" },
            { id: 7, titulo: "fotoImagen2", url: "fotoImagen2" },
            { id: 8, titulo: "fotoImagen2", url: "fotoImagen2" },
        ],
        caracteristicas: [
            { id: 1, titulo: "wifi", icon: "fas fa-wifi", estado: true },
            { id: 2, titulo: "pool", icon: "fas fa-swimmer", estado: true }
        ],
        latitud: -12.1234,
        longitud: 12.1234,
        calificacion: 10,
        favorito: true,
        ciudad: "ciudad",
        pais: "pais",
        referencia: "referencia",
    }

    const [product, setProduct] = useState(productAux);

    /* <h1>Producto: {id}</h1>            
                <h2>Soy un increíble alojamiento</h2>
                <p>{data[id].title}</p>
                <p>{data[id].category}</p>
                <p>{data[id].location}</p>
                <img className={Styles.productImg} src={data[id].img}/>
                <p>{data[id].description}</p> */


    console.log(props, "product");
    return (
        <section>
            <TitleBar categoria={product.categoria.title} nombre={product.nombre} goBack={props.history.goBack} />
            <ScoreBar referencia={product.referencia} pais={product.pais} ciudad={product.ciudad} calificacion={product.calificacion} />
            <ImageBar imagenes={product.imagenes} />
        </section>
    );
}

export default Product;
