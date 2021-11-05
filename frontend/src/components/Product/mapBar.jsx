import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

function MapBar(props) {
    return(
        <div className={`${Styles.mapBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.mapBarChild} ${StylesApp.delimiterChild}`}>
                <h2>¿Dónde vas a estar?</h2>
                <p>{props.city.name+" , "+props.city.country }</p>
                <div className={Styles.map}>  
                </div>
            </div>
        </div>

    )
}

export default MapBar;