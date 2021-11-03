import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Card from './Card.jsx';
import data from './data.json';
import { Link } from "react-router-dom";

function Cards() {

    return (
        <div className={`${StylesApp.delimiter}`}>
            <div className={`${Styles.cardsBlock} ${StylesApp.delimiterChild}`}>
                <h2>Recomendaciones</h2>
                <div className={Styles.cardsBox}>
                    {data.map((e, index) =>
                    <Link to={`/product/${index}`} key={index}> 
                        <Card img={e.img} category={e.category} title={e.title} location={e.location} description={e.description} key={index}/>
                    </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cards;