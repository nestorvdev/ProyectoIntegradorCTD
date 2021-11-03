import React from "react";
import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";



function topBar(props) {

    console.log(props, "topBar");

    return (
        <div className={`${Styles.topBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.topBarChild} ${StylesApp.delimiterChild}`}>
                <div className="barraIzq">
                    <p>{props.categoria}</p>
                    <h2>{props.nombre}</h2>
                </div>
                <div className="barraDer" onClick={props.goBack}>
                    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6476 31.0255C18.1062 31.0356 18.5565 30.9026 18.9359 30.645C19.3154 30.3873 19.6051 30.0176 19.7649 29.5877C19.9246 29.1577 19.9464 28.6887 19.8273 28.2458C19.7082 27.8029 19.454 27.4083 19.1001 27.1165L5.59711 15.5487L19.1001 3.98498C19.3449 3.80506 19.5499 3.57663 19.7023 3.31381C19.8547 3.05098 19.9512 2.75943 19.9857 2.45759C20.0202 2.15575 19.9921 1.85009 19.903 1.55964C19.8139 1.26918 19.6658 1.00016 19.4679 0.769597C19.2701 0.539032 19.0268 0.352004 18.7532 0.219828C18.4797 0.0876532 18.1818 0.0134158 17.8782 0.00170244C17.5746 -0.010011 17.2719 0.0409118 16.9889 0.151616C16.706 0.262321 16.449 0.430245 16.234 0.644881L0.774308 13.8722C0.531533 14.0793 0.336583 14.3365 0.202905 14.6263C0.0692265 14.9161 2.49874e-06 15.2316 2.47084e-06 15.5507C2.44294e-06 15.8699 0.0692264 16.1854 0.202905 16.4752C0.336583 16.765 0.531532 17.0224 0.774308 17.2296L16.234 30.4696C16.6245 30.8165 17.1254 31.0137 17.6476 31.026L17.6476 31.0255Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>


    );
}

export default topBar;
