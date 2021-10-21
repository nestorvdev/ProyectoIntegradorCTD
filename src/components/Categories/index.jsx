import React from 'react';
import './styles.css';

function Categories() {
    
    return (
        <>
            <div className="categoryContainer">
                <div className="categoryBlock">
                    <h2>Buscar por tipo de alojamiento</h2>
                    <div className="categoryBox">
                        <div className="categoryCard">
                            <div className="categoryImage image1"></div>
                            <div className="categoryType">
                                <h3>Hoteles</h3>
                                <p>807.105 hoteles</p>
                            </div>
                        </div>
                        <div className="categoryCard">
                            <div className="categoryImage image2"></div>
                            <div className="categoryType">
                                <h3>Hostels</h3>
                                <p>807.105 hoteles</p>
                            </div>
                        </div>
                        <div className="categoryCard">
                            <div className="categoryImage image3"></div>
                            <div className="categoryType">
                                <h3>Departamentos</h3>
                                <p>807.105 hoteles</p>
                            </div>
                        </div>
                        <div className="categoryCard">
                            <div className="categoryImage image4"></div>
                            <div className="categoryType">
                                <h3>Bed and Breakfast</h3>
                                <p>807.105 hoteles</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
        </>        
    );
}

export default Categories;