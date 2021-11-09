import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import Map from "./Map"

function MapBar(props) {
    return (
        <div className={`${Styles.mapBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.mapBarChild} ${StylesApp.delimiterChild}`}>
                <h2>¿Dónde vas a estar?</h2>
                <p>{props.city.name + " , " + props.city.country}</p>
                <div className={Styles.map}>
                    {props.latitude && props.longitude ?
                        <Map latitude={props.latitude} longitude={props.longitude} zoom={15} />
                        :
                        <p>No se puede mostrar el mapa</p>}
                </div>
            </div>
        </div>

    )
}

export default MapBar;