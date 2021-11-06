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
                    {/* <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12828.647464364263!2d-58.52731578049136!3d-34.65152617044483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sco!4v1636156301250!5m2!1ses!2sco" width="100%" height="100%" style={{border:0}}></iframe> */}
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoTLld8oN8wZm0avj07nwEv0FXqdfiaOE&callback=initMap"
                        containerElement={<div style={{ height: "400px" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        loadingElement={<p>Cargando</p>}
                        latitude={props.latitude}
                        longitude={props.longitude}
                    /> 
                </div>
            </div>
        </div>

    )
}

export default MapBar;