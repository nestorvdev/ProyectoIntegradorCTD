import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import  {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

function Map(props) {
    return (
        <>
            <GoogleMap defaultZoom={17} defaultCenter={{lat:props.latitude,lng:props.longitude}}>
                <Marker position={{lat:props.latitude,lng:props.longitude}}/>
            </GoogleMap>
        </>
    )
}

export default withScriptjs(withGoogleMap(Map));