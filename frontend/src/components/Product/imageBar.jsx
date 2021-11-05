import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import {Link} from "react-router-dom";
import iconSocial from "./icons/iconSocial.svg";
import iconHeart from "./icons/iconHeart.svg"

function imageBar(props) {

    return (
        <div className={`${Styles.imageBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.imageBarChild} ${StylesApp.delimiterChild}`}>
                <div className={Styles.barraSup}>
                    <img src={iconSocial} alt="iconSocial" className={Styles.iconImage}/>
                    <img src={iconHeart} alt="iconHeart" className={Styles.iconImage}/>
                </div>
                <div className={Styles.barraInf}>
                    <div className={Styles.barraIzq}>
                        <img src={props.imagenes[0].url} alt={props.imagenes[0].titulo} />
                    </div>
                    <div className={Styles.barraDer}>
                        <img src={props.imagenes[1].url} alt={props.imagenes[1].titulo} />
                        <img src={props.imagenes[2].url} alt={props.imagenes[2].titulo} />
                        <img src={props.imagenes[3].url} alt={props.imagenes[3].titulo} />
                        <img src={props.imagenes[4].url} alt={props.imagenes[4].titulo} />
                        <Link to="" className={Styles.verMas}>Ver Mas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default imageBar;