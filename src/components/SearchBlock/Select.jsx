import React from "react";
import './styles.css';

function Select(props) {
  const { type, title } = props;
  return (
    <select className={type} name={type} id={type} required>
      <option hidden>{title}</option>
      <option value="alien">Alien</option>
    </select>
  );
}

export default Select;