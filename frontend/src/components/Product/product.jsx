import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "./titleBar";
import ScoreBar from "./scoreBar";
import ImageBar from "./imageBar";
import DescriptionBar from "./descriptionBar";
import FeaturesBar from "./featuresBar";


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
            { id: 1, titulo: "wifi", estado: true },
            { id: 2, titulo: "pool", estado: true },
            { id: 3, titulo: "kitchen", estado: true },
            { id: 4, titulo: "tv", estado: false },
            { id: 5, titulo: "ac", estado: false },
            { id: 6, titulo: "pet", estado: false },
            { id: 7, titulo: "parking", estado: false },
            { id: 8, titulo: "creditCard", estado: true },
            { id: 9, titulo: "smoke", estado: true },
            { id: 10, titulo: "noParty", estado: false },
            { id: 11, titulo: "checkIn", estado: true },
            { id: 12, titulo: "noSmoke", estado: true },
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
            <DescriptionBar ciudad={product.ciudad} descripcion={product.descripcion}/>
            <FeaturesBar caracteristicas={product.caracteristicas}/>
        </section>
    );
}

export default Product;
