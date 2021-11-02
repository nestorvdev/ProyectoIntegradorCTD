import React from 'react';
import Styles from './styles.module.css';

function Category(props) {
    const { imageUrl, title, description } = props;
    return (       
        <div className={Styles.categoryCard}>
            <img className= {Styles.categoryImage} src={imageUrl} alt="imagen 1" />
            <div className={Styles.categoryType}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div >        
    )                        
}

export default Category;