import React from 'react';
import Styles from './styles.module.css';

function Category(props) {
    const { image, title } = props;
    return (       
        <div className={Styles.categoryCard}>
            <div className= {`${Styles.categoryImage} ${image}`}></div>
            <div className={Styles.categoryType}>
                <h3>{title}</h3>
                <p>807.105 hoteles</p>
            </div>
        </div >        
    )                        
}

export default Category;