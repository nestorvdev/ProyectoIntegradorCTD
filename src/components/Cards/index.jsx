import React from 'react';
import './styles.css';
import Card from './Card.jsx';
import data from './data.json';

function Cards() {

    return (
        <div className="cardsContainer">
            <div className="cardsBlock">
                <h2>Recomendaciones</h2>
                <div className="cardsBox">
                    {data.map(e => <Card img={e.img} category={e.category} title={e.title} location={e.location} description={e.description} />)}
                </div>
            </div>
        </div>
    );
}

export default Cards;