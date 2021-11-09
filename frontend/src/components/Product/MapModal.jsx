import { Modal, ModalGateway } from "react-images"
import Map from "./Map"
import Styles from "./styles.module.css";

export default function MapModal({mapIsOpen, latitude, longitude, closeMapModal}) {
    console.log("mapModal", mapIsOpen);

    return (
        <ModalGateway >
            {mapIsOpen ? (
                <Modal onClose={closeMapModal}>
                    <div className={Styles.containerModalMap}>
                            <Map latitude={latitude} longitude={longitude} zoom={14} />        
                    </div>
                </Modal>) : null}
        </ModalGateway>
    )
}

