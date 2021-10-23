import React, { useState } from "react";
import Calendar from "./Calendar";
import "./styles.css";

function SelectDate() {
  const [calendarState, calendarSetState] = useState();
  const haddleToggle = (event) => {
    event.preventDefault();
    calendarSetState(calendarState === "hidden" ? "visible" : "hidden");
  };

  return (
    <div className="calendar-button">
      <button className="date" onClick={haddleToggle}>Check in - Check out</button>
      <Calendar calendarState={calendarState}/>
    </div>
  );
}

export default SelectDate;
