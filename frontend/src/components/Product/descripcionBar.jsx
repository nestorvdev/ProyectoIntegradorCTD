import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

function descripcionBar(props) {
    return(
        <div className={`${Styles.descripcionBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.descripcionBarChild} ${StylesApp.delimiterChild}`}>
                <h2>Alójate en el corazon de {props.ciudad}</h2>
                <p>{props.descripcion}</p>
            </div>
        </div>

    )
}

export default descripcionBar;