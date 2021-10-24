import React from "react";
import Select from 'react-select';
import CityOption from './CityOption';
import "./styles.css";


function SelectCity() {
  const customStyles = {
    option: () => ({
      textAlign: 'left',
      borderBottom: 'solid 2px #F0572D',
      padding: '0.5rem 2.5rem',
    }),
    indicatorsContainer: () => ({
      display: 'none',
    }),
    valueContainer: () => ({
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
      borderRadius: '5px',
      padding: '0.4rem 6rem 0.65rem 2.5rem',
    }),
    placeholder: () => ({
      color: '#31363F',
      fontSize: '12pt',
      fontWeight: 500,
      width: '150px',
    }),
  }
  
  const options = [
    { value: 'buenos-aires', label: <CityOption city='Buenos Aires' /> },
    { value: 'mendoza', label: <CityOption city='Mendoza'/> },
    { value: 'cordoba', label: <CityOption city='Córdoba'/> },
    { value: 'bariloche', label: <CityOption city='San Carlos de Bariloche'/> },
  ];

  return (
    <div className='limitation'>
      <Select
        placeholder='¿A dónde vamos?'
        styles={customStyles}
        options={options}
      />
    </div>
  );
}

export default SelectCity;
