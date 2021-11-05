import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar";
import ScoreBar from "./ScoreBar";
import ImageBar from "./ImageBar";
import Share from "./Share";
import CarouselModal from "./CarouselModal"
import DescriptionBar from "./DescriptionBar";
import FeaturesBar from "./FeaturesBar";
import MapBar from "./MapBar";
import InfoBar from "./InfoBar";


function Product(props) {
    /*ESTADOS PARA EL CAROUSEL */
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const[shareIsOpen, setShareIsOpen] = useState(false);

    let { id } = useParams();

    let productAux = {
        id: id,
        name: "nombreHotel",
        description: "descripcion hotel",
        latitude: -12.1234,
        longitude: 12.1234,
        qualification: 9.1,
        favorite: true,
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
            { id: 2, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630", productId: 1 },
            { id: 3, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 4, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630", productId: 1 },
            { id: 5, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 6, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630", productId: 1 },
            { id: 7, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 8, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630", productId: 1 },
            { id: 9, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?s=612x612", productId: 1 },
            { id: 10, title: "fotoImagen1", url: "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630", productId: 1 },


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
            <ImageBar images={prod.images} setViewerIsOpen={setViewerIsOpen}  setShareIsOpen={setShareIsOpen}/>
            <Share id={productAux.id} shareIsOpen={shareIsOpen} setShareIsOpen={setShareIsOpen}/>
            <CarouselModal images={prod.images} viewerIsOpen={viewerIsOpen} setViewerIsOpen={setViewerIsOpen} setCurrentImage={setCurrentImage}/>
            <DescriptionBar city={prod.city} description={prod.description} />
            <FeaturesBar features={prod.features} />
            <MapBar city={prod.city} latitude={prod.latitude} longitude={prod.longitude}/>
            <InfoBar health={prod.health} rules={prod.rules} politics={prod.politics}/> 
        </section>
    );
}

export default Product;
