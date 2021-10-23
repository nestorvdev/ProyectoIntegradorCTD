import React, { useState } from "react";
import Calendar from "./Calendar";
import "./styles.css";

function SelectDate() {
  const [calendarState, calendarSetState] = useState("hidden");
  const haddleToggle = (event) => {
    event.preventDefault();
    calendarSetState(calendarState === "hidden" ? "visible" : "hidden");
  };
  const [buttonState, buttonSetState] = useState("Check in - Check out");
  const handleSelected = (value) => {
    buttonSetState(value);
    calendarSetState("hidden");
  }
  return (
    <div className="calendar-button">
      <button className="date" onClick={haddleToggle}>{buttonState}</button>
      <Calendar calendarState={calendarState} handleSelected={handleSelected}/>
    </div>
  );
}

export default SelectDate;
