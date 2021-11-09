import React from "react";
import Calendar2 from "./Calendar2";
import Styles from "./styles.module.css"
import StylesApp from "../../App.module.css";

function DateBlock() {
    /* const [value, setValue] = useState([null, null]); */

    return (
        <div className={` ${StylesApp.delimiter}`}>
            <div className={`${Styles.containerDateBlock} ${StylesApp.delimiterChild}`}>
                <h2>Fechas Disponibles</h2>
                <div className={Styles.calendario}>
                    <Calendar2 responsiveness="desktop" calendarState={Styles.visible} />
                    <div className={Styles.contenedorReservaBox}>
                        <div className={Styles.contenedorReserva}>
                            <p className={Styles.negrita}>Agregá tus fechas de viaje para tener precios exactos</p>
                            <button className={Styles.selectedDatesButton}>Iniciar reserva</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DateBlock;