import React from 'react';
import './styles.css';

function Category(props) {
    const { image, title } = props;
    return (       
        <div className="categoryCard">
            <div className= {`categoryImage ${image}`}></div>
            <div className="categoryType">
                <h3>{title}</h3>
                <p>807.105 hoteles</p>
            </div>
        </div >        
    )                        
}

export default Category;