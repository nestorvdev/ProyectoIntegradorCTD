import React from "react";
import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

export default function QualificationBar(props) {
    return (
        <div className={`${Styles.qualificationBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.qualificationBarChild} ${StylesApp.delimiterChild}`}>
                <h2>Califica este alojamiento: </h2>
                
                
            </div>
        </div>

    )
}