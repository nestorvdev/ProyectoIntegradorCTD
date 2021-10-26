import React from 'react';
import styles from './styles.module.css';
import logoFacebook from "./img/icon facebook.png";
import logoLinkedin from "./img/icon linkedin.png";
import logoTwitter from "./img/tweet.png";
import logoInstagram from "./img/icon ig.png"

function Footer({ showBurger }) {
    return (
        <footer className={`${styles.footer} delimiter`} >
            <div className={`${styles.delimiterChild} delimiterChild ${showBurger === true ? "opacity":null}`}>
                <div>
                    <h3 className={styles.footerTittle} >2021 @ Digital Booking</h3>
                </div>
                <div className={styles.icons}>
                    <img className={styles.iconsImg} src={logoFacebook} alt="" />
                    <img className={styles.iconsImg} src={logoLinkedin} alt="" />
                    <img className={styles.iconsImg} src={logoTwitter} alt="" />
                    <img className={styles.iconsImg} src={logoInstagram} alt="" />
                </div>
            </div>

        </footer>
    );
}

export default Footer;