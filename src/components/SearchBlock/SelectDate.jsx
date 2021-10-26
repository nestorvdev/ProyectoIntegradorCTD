import React, { useState } from "react";
import Calendar from "./Calendar";
import "./styles.css";

function SelectDate() {
  const [calendarState, calendarSetState] = useState("hidden");
  const [responsiveState, responsiveSetState] = useState("desktop");

  const haddleToggle = (event) => {
    /* const windowSize = window.innerWidth <= 1080 ? "visible-tablet" : "visible"; */
    const windowSize = window.innerWidth >=680 ? (window.innerWidth<=1080?"visible-tablet" :"visible") : "visible";
    event.preventDefault();
    calendarSetState(calendarState === "hidden" ? windowSize : "hidden");
    responsiveSetState(window.innerWidth < 680 ? "mobile" : "desktop");
  };

  const [buttonState, buttonSetState] = useState("Check in - Check out");
  const handleSelected = (value) => {
    buttonSetState(value);
    calendarSetState("hidden");
  }

  return (
    <div className="calendar-button">
      <button className="date" onClick={haddleToggle}>{buttonState}</button>

      <Calendar responsiveness={responsiveState} calendarState={calendarState} handleSelected={handleSelected} />

    </div>
  );
}

export default SelectDate;
