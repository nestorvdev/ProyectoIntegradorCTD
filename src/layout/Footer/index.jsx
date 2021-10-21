import React from 'react';
import styles from './styles.module.css'; 

function Footer() {
    return (
        <footer className={styles.footer}>
        <div>
            <h3 className={styles.footerTittle} >2021 @ Digital Booking</h3>
        </div>
        <div className={styles.icons}>
            <img className={styles.iconsImg} src={"img/icon facebook.png"} alt="" />
            <img className={styles.iconsImg} src={"img/icon linkedin.png"} alt="" />
            <img className={styles.iconsImg} src={"img/tweet.png"} alt="" />
            <img className={styles.iconsImg} src={"img/icon ig.png"} alt="" />
        </div>
    </footer>
    );
  }
  
  export default Footer;