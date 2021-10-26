import React from 'react';
import './styles.css';
import Card from './Card.jsx';
import data from './data.json';

function Cards() {

    return (
        <div className="cardsContainer delimiter">
            <div className="cardsBlock delimiterChild">
                <h2>Recomendaciones</h2>
                <div className="cardsBox">
                    {data.map((e, index) => <Card img={e.img} category={e.category} title={e.title} location={e.location} description={e.description} key={index}/>)}
                </div>
            </div>
        </div>
    );
}

export default Cards;