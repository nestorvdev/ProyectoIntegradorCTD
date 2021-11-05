import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";
import wifi from './icons/wifi.svg';
import pool from './icons/pool.svg';
import kitchen from './icons/kitchen.svg';
import tv from './icons/tv.svg';
import ac from './icons/ac.svg';
import pet from './icons/pet.svg';
import parking from './icons/parking.svg';
import creditCard from './icons/creditCard.svg';
import smoke from './icons/smoke.svg';
import party from './icons/party.svg';
import checkin from './icons/checkIn.svg';
import noSmoke from './icons/noSmoke.svg';


function featuresBar(props) {
    let icons = [wifi, pool, kitchen, tv, ac, pet, parking, creditCard, smoke, party, checkin, noSmoke];
    return (
        <div className={`${Styles.featuresBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.featuresBarChild} ${StylesApp.delimiterChild}`}>
                <h2>¿Qué ofrece este lugar?</h2>
                <div className={Styles.icons}>
                    {props.features.map((e, index) => e.state ? <p><img src={icons[index]} alt={e.titulo} />{e.title}</p> : null)}
                </div>
            </div>
        </div>
    )
}

export default featuresBar;