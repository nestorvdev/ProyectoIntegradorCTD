import { Modal, ModalGateway } from "react-images";
import Styles from "./styles.module.css";
import facebook from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import whatsapp from "./icons/whatsapp.svg";
import email from "./icons/email.png";

export default function Share(props) {

    const closeShare = () => {
        props.setShareIsOpen(false);
    };
    return (
        <div>
            <ModalGateway>
                {props.shareIsOpen ? (
                    <Modal onClose={closeShare}>
                        <div className={Styles.containerSharePrincipal}>
                            
                            <h3>Compartir</h3>
                            <div className={Styles.containerShare}>
                                <div className={Styles.shareBlock}>
                                    <div className={Styles.shareItem}>
                                        <a href={`mailto:?Subject=Mira este alojamiento localhost:3000/product/${props.id}`} target="_blank" ><img src={email} alt="logo email" /></a>
                                        <p>Correo</p>
                                    </div>
                                    <div className={Styles.shareItem}>
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=[localhost:3000/product/${props.id}]`} target="_blank"><img src={facebook} alt="logo facebook" /></a>
                                        <p>Facebook</p>
                                    </div>
                                </div>
                                <div className={Styles.shareBlock}>
                                    <div className={Styles.shareItem}>
                                        <a href={`https://twitter.com/intent/tweet?text=[Mira este producto ]&url=[localhost:3000/product/${props.id}]&hashtags=[GranAlojamiento]`} target="_blank"><img src={twitter} alt="logo twitter" /></a>
                                        <p>Twitter</p>
                                    </div>
                                    <div className={Styles.shareItem}>
                                        <a href={`https://api.whatsapp.com/send?text=[Mira este alojamiento: localhost:3000/product/${props.id}]`} target="_blank"><img src={whatsapp} alt="logo whatsapp" /></a>
                                        <p>Whatsapp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>) : null}
            </ModalGateway>
        </div>
    )
}