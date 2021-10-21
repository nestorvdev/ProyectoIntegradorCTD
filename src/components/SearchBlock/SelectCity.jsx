import React from "react";
import './styles.css';

function SelectCity(props) {
  const { type, title } = props;
  return (
    <select className={type} name={type} id={type} required>
      <option hidden>{title}</option>
      <option value="buenos-aires">Buenos Aires</option>
      <option value="cordoba">Córdoba</option>
      <option value="mendoza">Mendoza</option>
      <option value="bariloche">San Carlos de Bariloche</option>
    </select>
  );
}

export default SelectCity;