import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import iconSocial from "./icons/iconSocial.svg";
import iconHeart from "./icons/iconHeart.svg"
import React, { useState } from "react";

function ImageBar(props) {
    const [countSlider, setCountSlider] = useState(0); // se separa las imagenes a mostrar para la galeria de vista tablet y mobile
    const { images } = props;
    console.log(props,"imageBar");
    const changeSlider= ()=> countSlider === images.length-1?setCountSlider(0):setCountSlider(countSlider+1);   
    setTimeout(changeSlider,5000);    
return (
    <div className={`${Styles.imageBar} ${StylesApp.delimiter}`}>
        <div className={`${Styles.imageBarChild} ${StylesApp.delimiterChild}`}>
            <div className={Styles.barraSup}>
                <img src={iconSocial} alt="iconSocial" className={Styles.iconImage} />
                <img src={iconHeart} alt="iconHeart" className={Styles.iconImage} />
            </div>
            <div className={Styles.barraInf}>
                <div className={Styles.barraIzq}>
                    <img src={images[0].url} alt={images[0].title} />
                </div>
                <div className={Styles.barraDer}>
                    <img src={images[1].url} alt={images[1].title} />
                    <img src={images[2].url} alt={images[2].title} />
                    <img src={images[3].url} alt={images[3].title} />
                    <img src={images[4].url} alt={images[4].title} />
                    <Link to="" className={Styles.verMas}>Ver Mas</Link>
                </div>
                <div className={Styles.slider}  onClick={changeSlider} >
                    <img src={images[countSlider].url} alt={images[countSlider].title}/>
                    <p>{(countSlider+1) +"/" +(images.length)}</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default ImageBar;