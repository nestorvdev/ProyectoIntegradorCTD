import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

function infoBar(props) {
    return(
        <div className={`${Styles.infoBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.infoBarChild} ${StylesApp.delimiterChild}`}>
                <h2>¿Qué tenes que saber?</h2>
                <div className={Styles.info}>
                    <div >
                        <h3>Normas de la casa</h3>
                        {props.rules.split(',').map((e)=><p>{e}</p>)}
                    </div>
                    <div >
                        <h3>Salud y Seguridad</h3>
                        {props.health.split(',').map((e)=><p>{e}</p>)}
                    </div>
                    <div >
                        <h3>Politica de Cancelacion</h3>
                        {props.politics.split(',').map((e)=><p>{e}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default infoBar;