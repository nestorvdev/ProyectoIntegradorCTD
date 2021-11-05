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
                        <img src={props.images[0].url} alt={props.images[0].title} />
                    </div>
                    <div className={Styles.barraDer}>
                        <img src={props.images[1].url} alt={props.images[1].title} />
                        <img src={props.images[2].url} alt={props.images[2].title} />
                        <img src={props.images[3].url} alt={props.images[3].title} />
                        <img src={props.images[4].url} alt={props.images[4].title} />
                        <Link to="" className={Styles.verMas}>Ver Mas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default imageBar;