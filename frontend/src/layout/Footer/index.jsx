import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import StylesLayout from "../styles.module.css"
import logoFacebook from "./img/icon facebook.png";
import logoLinkedin from "./img/icon linkedin.png";
import logoTwitter from "./img/tweet.png";
import logoInstagram from "./img/icon ig.png"

function Footer({ showBurger }) {
    return (
        <footer className={`${Styles.footer} ${showBurger === true ? StylesLayout.opacity:null} ${StylesApp.delimiter}`} >
            <div className={`${Styles.delimiterChild} ${StylesApp.delimiterChild} `}>
                <div>
                    <h3 className={Styles.footerTittle} >2021 @ World Guest</h3>
                </div>
                <div className={Styles.icons}>
                    <img className={Styles.iconsImg} src={logoFacebook} alt="" />
                    <img className={Styles.iconsImg} src={logoLinkedin} alt="" />
                    <img className={Styles.iconsImg} src={logoTwitter} alt="" />
                    <img className={Styles.iconsImg} src={logoInstagram} alt="" />
                </div>
            </div>

        </footer>
    );
}

export default Footer;