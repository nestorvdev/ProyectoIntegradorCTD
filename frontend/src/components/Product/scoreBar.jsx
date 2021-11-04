import React from "react";
import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

function scoreBar(props) {

    console.log(props, "scoreBar");

    const scoreLetter = (valor) => {
        if (valor >= 8 && valor <= 10) return "Excelente";
        if (valor >= 6 && valor < 8) return "Muy Bueno";
        if (valor >= 4 && valor < 6) return "Bueno";
        if (valor >= 2 && valor < 4) return "Regular";
        if (valor >= 0 && valor < 2) return "Malo";
        else { return "Calificacion Invalida" }
    }

    let cantStar = Math.floor(props.calificacion / 2);
    let star = <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>;

    return (
        <div className={`${Styles.scoreBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.scoreBarChild} ${StylesApp.delimiterChild}`}>
                <div className={Styles.barraIzq}>
                    <p>
                        <svg width="14" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6.65C4.5264 6.65 4.0722 6.46563 3.73731 6.13744C3.40242 5.80925 3.21429 5.36413 3.21429 4.9C3.21429 4.43587 3.40242 3.99075 3.73731 3.66256C4.0722 3.33437 4.5264 3.15 5 3.15C5.4736 3.15 5.9278 3.33437 6.26269 3.66256C6.59758 3.99075 6.78571 4.43587 6.78571 4.9C6.78571 5.12981 6.73953 5.35738 6.64979 5.5697C6.56004 5.78202 6.42851 5.97493 6.26269 6.13744C6.09687 6.29994 5.90002 6.42884 5.68336 6.51679C5.46671 6.60473 5.2345 6.65 5 6.65ZM5 0C3.67392 0 2.40215 0.516248 1.46447 1.43518C0.526784 2.3541 0 3.60044 0 4.9C0 8.575 5 14 5 14C5 14 10 8.575 10 4.9C10 3.60044 9.47322 2.3541 8.53553 1.43518C7.59785 0.516248 6.32608 0 5 0Z" fill="#545776" />
                        </svg>
                        {" " + props.ciudad + " , " + props.pais}</p>
                    <p>{props.referencia}</p>
                </div>
                <div className={Styles.barraDer}>
                    <div className={Styles.calificacionLetra}>
                        <p>{scoreLetter(props.calificacion)}</p>
                        <div className={Styles.calificacionEstrellas}>
                            {cantStar >= 1 ? star : null}
                            {cantStar >= 2 ? star : null}
                            {cantStar >= 3 ? star : null}
                            {cantStar >= 4 ? star : null}
                            {cantStar >= 5 ? star : null}
                        </div>
                    </div>
                    <p className={Styles.calificacionEntero}>
                        {Math.floor(props.calificacion)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default scoreBar;
