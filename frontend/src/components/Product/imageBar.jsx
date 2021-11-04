import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import {Link} from "react-router-dom";

function imageBar(props) {

    return (
        <div className={`${Styles.imageBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.imageBarChild} ${StylesApp.delimiterChild}`}>
                <div className={Styles.barraSup}>
                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 14.2441C14.24 14.2441 13.56 14.5384 13.04 14.9996L5.91 10.928C5.96 10.7023 6 10.4767 6 10.2412C6 10.0057 5.96 9.78009 5.91 9.55444L12.96 5.5221C13.5 6.01265 14.21 6.3168 15 6.3168C16.66 6.3168 18 5.00212 18 3.37349C18 1.74485 16.66 0.430176 15 0.430176C13.34 0.430176 12 1.74485 12 3.37349C12 3.60895 12.04 3.8346 12.09 4.06026L5.04 8.09259C4.5 7.60204 3.79 7.2979 3 7.2979C1.34 7.2979 0 8.61258 0 10.2412C0 11.8698 1.34 13.1845 3 13.1845C3.79 13.1845 4.5 12.8804 5.04 12.3898L12.16 16.4614C12.11 16.6674 12.08 16.8833 12.08 17.1089C12.08 18.6885 13.39 19.9639 15 19.9639C16.61 19.9639 17.92 18.6885 17.92 17.1089C17.92 15.5294 16.61 14.2441 15 14.2441ZM15 2.39238C15.55 2.39238 16 2.83388 16 3.37349C16 3.91309 15.55 4.35459 15 4.35459C14.45 4.35459 14 3.91309 14 3.37349C14 2.83388 14.45 2.39238 15 2.39238ZM3 11.2223C2.45 11.2223 2 10.7808 2 10.2412C2 9.7016 2.45 9.26011 3 9.26011C3.55 9.26011 4 9.7016 4 10.2412C4 10.7808 3.55 11.2223 3 11.2223ZM15 18.09C14.45 18.09 14 17.6485 14 17.1089C14 16.5693 14.45 16.1278 15 16.1278C15.55 16.1278 16 16.5693 16 17.1089C16 17.6485 15.55 18.09 15 18.09Z" fill="#545776" />
                    </svg>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.605 16.3326L10.5 16.4362L10.3845 16.3326C5.397 11.87 2.1 8.91901 2.1 5.92663C2.1 3.85579 3.675 2.30266 5.775 2.30266C7.392 2.30266 8.967 3.33808 9.5235 4.74625H11.4765C12.033 3.33808 13.608 2.30266 15.225 2.30266C17.325 2.30266 18.9 3.85579 18.9 5.92663C18.9 8.91901 15.603 11.87 10.605 16.3326ZM15.225 0.231812C13.398 0.231812 11.6445 1.0705 10.5 2.38549C9.3555 1.0705 7.602 0.231812 5.775 0.231812C2.541 0.231812 0 2.72718 0 5.92663C0 9.83018 3.57 13.0296 8.9775 17.8651L10.5 19.2318L12.0225 17.8651C17.43 13.0296 21 9.83018 21 5.92663C21 2.72718 18.459 0.231812 15.225 0.231812Z" fill="#545776" />
                    </svg>
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