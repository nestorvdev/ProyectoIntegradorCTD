import React from 'react';
import Styles from './styles.module.css';
import iconWifi from "./img/iconWifi.svg";
import iconStar from "./img/starOrange.png";
import iconEight from "./img/iconEight.svg";
import iconRectangle from "./img/iconRectangle.svg";
import iconLocation from "./img/IconLocation.svg";
import iconSwimming from "./img/iconSwimming.svg";

function Card(props) {
    const { img, category, title, location, description } = props;
    return (
        <div className={Styles.cardBox}>
            <div className={Styles.cardImage}>

              {/*   <img className={Styles.iconHeart} src={iconHeart} alt="" /> */}
                <svg className={Styles.iconHeart} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="heart" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                <img className={Styles.image} src={img} alt="" />                
              
            </div>

            <div className={Styles.cardInfo}>
                <div className={Styles.cardHeaderBox}>
                    <div className={Styles.cardHeadline}>
                        <div className={Styles.cardCategory}>
                            <p>{category}</p>
                            <img className={Styles.star} src={iconStar} alt="" />
                            <img className={Styles.star} src={iconStar} alt="" />
                            <img className={Styles.star} src={iconStar} alt="" />
                            <img className={Styles.star} src={iconStar} alt="" />
                            <img className={Styles.star} src={iconStar} alt="" />
                        </div>
                        <div className={Styles.cardName}>{title}</div>
                    </div>
                    <div className={Styles.cardScore}>
                        <div className={Styles.cardScoreNumber}>
                            <img className={Styles.iconEight} src={iconEight} alt="" />
                            <img className={Styles.iconRectangle} src={iconRectangle} alt="" />
                        </div>
                        <div className={Styles.cardScoreWords}>Muy Bueno</div>
                    </div>
                </div>
                <div className={Styles.cardLocation}>
                    <img className={Styles.iconLocation} src={iconLocation} alt="" />
                    {location}
                    <span>mostrar en el mapa</span>
                </div>
                <div className={Styles.cardIcons}>
                    <img src={iconWifi} alt="" />
                    <img className={Styles.iconSwimming} src={iconSwimming} alt="" />
                </div>
                <div className={Styles.cardDescription}>
                    <p>{description}</p>
                    <span>más...</span>
                </div>
                <button className={Styles.cardButton2}>Ver más</button>
            </div>
        </div>
    );
}

export default Card;