import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./styles.css";

function SelectDate(props) {
  const { type, title } = props;
  const [value, onChange] = useState(new Date());
  return (
    <div className={type} name={type} id={type} placeholder={title} required>
      {/* <option hidden>{title}</option> */}
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

export default SelectDate;
