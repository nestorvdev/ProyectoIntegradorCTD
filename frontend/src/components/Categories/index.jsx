import React from 'react';
import Styles from './styles.module.css';
import StylesApp from "../../App.module.css"
import Category from './Category'

function Categories() {    
    return (
        <>
            <div className={`${Styles.categoryContainer} ${StylesApp.delimiter}`}>
                <div className={`${Styles.categoryBlock} ${StylesApp.delimiterChild}`}>
                    <h2>Buscar por tipo de alojamiento</h2>
                    <div className={Styles.categoryBox}>
                        <Category title="Hoteles" image={Styles.image1} />
                        <Category title="Hostels" image={Styles.image2} />
                        <Category title="Departamentos" image={Styles.image3} />
                        <Category title="Bed and Breakfast" image={Styles.image4} />                        
                    </div>
                </div>
            </div> 
        </>        
    );
}

export default Categories;