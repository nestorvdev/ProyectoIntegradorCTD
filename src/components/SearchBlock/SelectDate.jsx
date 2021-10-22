import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="date">
      <DatePicker
        className="date-box"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate} // add the endDate to your startDate DatePicker now that it is defined
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        className="date-box"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}

export default SelectDate;
