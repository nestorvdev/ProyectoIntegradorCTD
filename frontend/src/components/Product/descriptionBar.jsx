import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

function descriptionBar(props) {
    return(
        <div className={`${Styles.descripcionBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.descripcionBarChild} ${StylesApp.delimiterChild}`}>
                <h2>Alójate en el corazon de {props.city.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>

    )
}

export default descriptionBar;