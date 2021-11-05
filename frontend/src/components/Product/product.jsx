import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "./titleBar";
import ScoreBar from "./scoreBar";
import ImageBar from "./imageBar";
import DescriptionBar from "./descriptionBar";
import FeaturesBar from "./featuresBar";
import MapBar from "./mapBar";
import InfoBar from "./infoBar";


function Product(props) {
    let { id } = useParams();

    /* se crea el objeto vacio */


    let productAux = {
        id: id,
        name: "nombreHotel",
        description: "descripcion hotel",
        latitude: -12.1234,
        longitude: 12.1234,
        qualification: 10,
        reference: "referencia",
        category: {
            id: 1,
            title: "tituloCategoria",
            description: "descripcionCategoria",
            url: "imagenCategoria"
        },
        city: {
            id: 1,
            name: "ciudad",
            country: "pais",
        },
        images: [
            { id: 1, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 2, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 3, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 4, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 5, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 6, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 7, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 8, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },

        ],
        features: [
            { id: 1, title: "wifi", state: true },
            { id: 2, title: "pool", state: true },
            { id: 3, title: "kitchen", state: true },
            { id: 4, title: "tv", state: false },
            { id: 5, title: "ac", state: false },
            { id: 6, title: "pet", state: false },
            { id: 7, title: "parking", state: false },
            { id: 8, title: "creditCard", state: true },
            { id: 9, title: "smoke", state: true },
            { id: 10, title: "noParty", state: false },
            { id: 11, title: "checkIn", state: true },
            { id: 12, title: "noSmoke", state: true },
        ],
        favorite: true,
        rules: "normas1,normas2,normas3",
        health: "salud1,salud2,salud3",
        politics: "politicas1,politicas2,politicas3",
    }

    const [prod, setProd] = useState(productAux);

    console.log(props, "product");
    return (
        <section>
            <TitleBar category={prod.category.title} name={prod.name} goBack={props.history.goBack} />
            <ScoreBar reference={prod.reference} city={prod.city} qualification={prod.qualification} />
            <ImageBar images={prod.images} />
            <DescriptionBar city={prod.city} description={prod.description} />
            <FeaturesBar features={prod.features} />
            <MapBar city={prod.city} latitude={prod.latitude} longitude={prod.longitude}/>
            <InfoBar health={prod.health} rules={prod.rules} politics={prod.politics}/> */
        </section>
    );
}

export default Product;
