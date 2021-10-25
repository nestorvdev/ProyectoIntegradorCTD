import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";
const { format } = require("date-fns");

function Calendar(props) {
  const [value, setValue] = useState([null, null]);

  const startDate = new Date(value[0]);
  const endDate = new Date(value[1]);
  const startDateToString = `${format(startDate, "dd")} de ${format(
    startDate,
    "MMM"
  )}`;
  const endDateToString = `${format(endDate, "dd")} de ${format(
    endDate,
    "MMM"
  )}`;

  const handleSelection = (event) => {
    event.preventDefault();
    props.handleSelected(`${startDateToString} - ${endDateToString}`);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F0572D",
      },
    },
  });

  return (
    <div className={props.calendarState}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            displayStaticWrapperAs={props.responsiveness}
            label="date range"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <div className="container-calendar-selected-dates">
            <button className="selected-dates-button" onClick={handleSelection}>
              Aplicar
            </button>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default Calendar;
