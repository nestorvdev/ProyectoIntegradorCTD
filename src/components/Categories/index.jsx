import React from 'react';
import './styles.css';
import Category from './Category'

function Categories() {    
    return (
        <>
            <div className="categoryContainer">
                <div className="categoryBlock">
                    <h2>Buscar por tipo de alojamiento</h2>
                    <div className="categoryBox">
                        <Category title="Hoteles" image="image1" />
                        <Category title="Hostels" image="image2" />
                        <Category title="Departamentos" image="image3" />
                        <Category title="Bed and Breakfast" image="image4" />                        
                    </div>
                </div>
            </div> 
        </>        
    );
}

export default Categories;