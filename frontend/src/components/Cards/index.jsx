import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Card from './Card.jsx';
import data from './data.json';

export default function Cards({category}) {     

    return (
        <div className={`${StylesApp.delimiter}`}>
            <div className={`${Styles.cardsBlock} ${StylesApp.delimiterChild}`}>
                <h2>Recomendaciones</h2>
                <div className={Styles.cardsBox}>
                    {data.map((e, index) =>
                        category === "All" ? <Card img={e.img} cardCategory={e.category} title={e.title} location={e.location} description={e.description} key={index} id={index}/> :
                        (category === e.category ? <Card img={e.img} cardCategory={e.category} title={e.title} location={e.location} description={e.description} key={index} id={index}/> : null)
                        
                    )}
                </div>
            </div>
        </div>
    );
}

