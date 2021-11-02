import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Card from './Card.jsx';
import data from './data.json';

function Cards() {

    return (
        <div className={`${Styles.cardsContainer} ${StylesApp.delimiter}`}>
            <div className={`${Styles.cardsBlock} ${StylesApp.delimiterChild}`}>
                <h2>Recomendaciones</h2>
                <div className={Styles.cardsBox}>
                    {data.map((e, index) => <Card img={e.img} category={e.category} title={e.title} location={e.location} description={e.description} key={index}/>)}
                </div>
            </div>
        </div>
    );
}

export default Cards;