import { Modal, ModalGateway } from "react-images"
import Styles from "./styles.module.css"

export default function Share(props) {

    const closeShare = () => {
        props.setShareIsOpen(false);
    };
    return (
        <div>
            <ModalGateway>
                {props.shareIsOpen ? (
                    <Modal onClose={closeShare}>
                        <div className={Styles.containerShare}>
                            <div>
                                <a href={`https://twitter.com/intent/tweet?text=[Mira este producto ]&url=[localhost:3000/product/${props.id}]&hashtags=[GranAlojamiento]`}>Compartir en twitter</a>
                            </div>
                            <div>
                                <a href={`https://api.whatsapp.com/send?text=[Mira este alojamiento: localhost:3000/product/${props.id}]`}>Compartir en WhatsApp</a>
                            </div>
                            <div>
                                <a href={`mailto:?Subject=Mira este alojamiento localhost:3000/product/${props.id}`}>Contactar por correo</a>
                            </div>
                        </div>
                    </Modal>) : null}
            </ModalGateway>
        </div>
    )
}