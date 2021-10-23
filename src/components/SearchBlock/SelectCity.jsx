import React from "react";
import "./styles.css";

function SelectCity() {
  return (
    <select className="city limitation" name="city" id="city" required>
      <option hidden>¿A dónde vamos?</option>
      <option value="buenos-aires">Buenos Aires</option>
      <option value="cordoba">Córdoba</option>
      <option value="mendoza">Mendoza</option>
      <option value="bariloche">San Carlos de Bariloche</option>
    </select>
  );
}

export default SelectCity;
