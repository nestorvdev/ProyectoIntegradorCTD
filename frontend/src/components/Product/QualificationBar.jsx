import React, { useState } from "react";
import StylesApp from "../../App.module.css";
import Styles from "./styles.module.css";

export default function QualificationBar() {
    const [starIndex, setStarIndex] = useState(0);
    let stars = [];

    let star = (i) => <svg key={i} index={i} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" className={i >= starIndex ? Styles.star : Styles.starActive} /></svg>;

    const renderStar = () => {
        for (let i = 0; i < 5; i++) {
            stars.push(star(i));
        }
        return stars;
    }

    renderStar();

    return (
        <div className={`${Styles.qualificationBar} ${StylesApp.delimiter}`}>
            <div className={`${Styles.qualificationBarChild} ${StylesApp.delimiterChild}`}>
                <h2>Califica este alojamiento: </h2>
                <div className={Styles.starsMap}>
                    {stars.map((star, i) => {
                        return <div key={i} className={Styles.starBox} onClick={() => setStarIndex(i+1)} >{star}</div>;
                    })}
                </div>
            </div>
        </div>

    )
}