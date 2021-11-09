import { Modal, ModalGateway } from "react-images"
import Map from "./Map"
import Styles from "./styles.module.css";

export default function MapModal({ mapIsOpen, latitude, longitude, closeMapModal, name, address }) {
    console.log("mapModal", mapIsOpen);

    return (
        <ModalGateway >
            {mapIsOpen ? (
                <Modal onClose={closeMapModal}>
                    <div className={Styles.containerModalMap}>
                        <Map latitude={latitude} longitude={longitude} zoom={15} name={name} address={address} />
                    </div>
                </Modal>) : null}
        </ModalGateway>
    )
}

