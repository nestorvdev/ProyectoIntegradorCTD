import React from 'react';
import './styles.css';
import iconWifi from "./img/iconWifi.svg";
import iconHeart from "./img/iconHeart.png";
import iconStar from "./img/starOrange.png";
import iconEight from "./img/iconEight.svg";
import iconRectangle from "./img/iconRectangle.svg";
import iconLocation from "./img/IconLocation.svg";
import iconSwimming from "./img/iconSwimming.svg";

function Card(props) {
    const { img, category, title, location, description } = props;
    return (
        <div className="cardBox">
            <div className="cardImage">

                <img className="iconHeart" src={iconHeart} alt="" />
                <img className="image" src={img} alt="" />
                {/* Coloqué la imagen svg acá en html para ver el icono del corazón de alguna forma, pero es provisorio" */}
              
            </div>

            <div className="cardInfo">
                <div className="cardHeaderBox">
                    <div className="cardHeadline">
                        <div className="cardCategory">
                            <p>{category}</p>
                            <img className="star" src={iconStar} alt="" />
                            <img className="star" src={iconStar} alt="" />
                            <img className="star" src={iconStar} alt="" />
                            <img className="star" src={iconStar} alt="" />
                            <img className="star" src={iconStar} alt="" />
                        </div>
                        <div className="cardName">{title}</div>
                    </div>
                    <div className="cardScore">
                        <div className="cardScoreNumber">
                            <img className="iconEight" src={iconEight} alt="" />
                            <img className="iconRectangle" src={iconRectangle} alt="" />
                        </div>
                        <div className="cardScoreWords">Muy Bueno</div>
                    </div>
                </div>
                <div className="cardLocation">
                    <img className="iconLocation" src={iconLocation} alt="" />
                    {location}
                    <span>mostrar en el mapa</span>
                </div>
                <div className="cardIcons">
                    <img src={iconWifi} alt="" />
                    <img className="iconSwimming" src={iconSwimming} alt="" />
                </div>
                <div className="cardDescription">
                    <p>{description}</p>
                    <span>más...</span>
                </div>
                <button className="cardButton2">Ver más</button>
            </div>
        </div>
    );
}

export default Card;