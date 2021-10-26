import { red } from "@mui/material/colors";
import { flexbox } from "@mui/system";
import React from "react";
import Select from 'react-select';
import CityOption from './CityOption';
import "./styles.css";


function SelectCity() {
  const customStyles = {
    // usar el de control
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
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0 0 0 0%',       
      /* flexWrap: 'nowrap',
      justifyContent: 'flex-start', */
      //color: '#0046F9',  
      //backgroundColor: 'green', 
     
      /* padding: '0.4rem 6rem 0.65rem 2.5rem', */
    }),

    control: (/* styles, { data, isDisabled, isFocused, isSelected } */) => ({
      /* ...styles, */
      height: '100%',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
      borderRadius: '5px',
      padding: '0.6rem 11rem 0.6rem 2.5rem',      
      //color: '#F90000',
      //display: 'flex',
      //justifyContent: 'flex-start',
      
    }),
    container: () => ({
      boxShadow: '0px 1px 5px rgb(0 0 0 / 15%)',
    }),

    placeholder: () => ({
      color: '#31363F',
      fontSize: '12pt',
      fontWeight: 500,
      width: '150px',
    }),
    
  }
  
  const options = [
    { value: 'buenos-aires', label: <CityOption city='Buenos Aires'/>},
    { value: 'mendoza', label: <CityOption city='Mendoza' />},
    { value: 'cordoba', label: <CityOption city='Córdoba'/>},
    { value: 'bariloche', label: <CityOption city='San Carlos de Bariloche' />},
  ];  

  return (
      <Select
        placeholder='¿A dónde vamos?'
        styles={customStyles}
        //isOptionSelected={(option, value) => option.value === option.label2}
        options={options}
        //isSelected={(option, value) => value.value === option.label2}
        //getOptionLabel={(option) => `${option.label}`}
        /* defaultValue={flavourOptions[0]}
          isClearable
          isSearchable
          name="color"
          options={flavourOptions}
          getOptionLabel={(option) => `${option.value}: ${option.label}`} */
        
      />
  );
}

export default SelectCity;
