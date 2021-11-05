import React from "react";
import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import iconLocation from "./icons/iconBack.svg"

function titleBar(props) {

    console.log(props, "topBar");

    return (
        <div className={`${Styles.titleBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.titleBarChild} ${StylesApp.delimiterChild}`}>
                <div>
                    <p>{props.categoria}</p>
                    <h2>{props.nombre}</h2>
                </div>
                <div onClick={props.goBack}>
                   <img src={iconLocation} alt="IconLocation" className={Styles.iconLocation}/>
                </div>
            </div>
        </div>


    );
}

export default titleBar;
