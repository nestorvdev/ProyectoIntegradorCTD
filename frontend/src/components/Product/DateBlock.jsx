import React, { useState } from "react";
import Calendar2 from "./Calendar2";
import Styles from "./styles.module.css"

function DateBlock() {
    const [value, setValue] = useState([null, null]);

    return (
        <div className={`${Styles.container} ${Styles.delimiter}`}>
            <div className={`${Styles.subContainer} ${Styles.delimiterChild}`}>
                <h2>Fechas Disponibles</h2>
                <div className={Styles.calendario}>
                <Calendar2 responsiveness="desktop" calendarState={Styles.visible} />
                <div className={Styles.contenedor}>
                    <p className={Styles.negrita}>Agregá tus fechas de viaje para tener precios exactos</p>
                    <button className={Styles.selectedDatesButton}>Iniciar reservar</button>
                </div>
                </div>
                
            </div>

        </div>
    )
}

export default DateBlock;