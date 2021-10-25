import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";
const { format } = require('date-fns');

function Calendar(props) {
  const [value, setValue] = useState([null, null]);

  const startDate = new Date(value[0]);
  const endDate = new Date(value[1]);
  const startDateToString = `${format(startDate, 'dd')} de ${format(startDate, 'MMM')}`;
  const endDateToString = `${format(endDate, 'dd')} de ${format(endDate, 'MMM')}`;

  const handleSelection = (event) => {
    event.preventDefault();
    props.handleSelected(`${startDateToString} - ${endDateToString}`);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F0572D",
      },
    },
    breakpoints: {
      keys: ["xs", "sm", "md","lg","xl"],
      values: {
        xs: 0,
        sm: 480,
        md: 1100,
        lg: 1920,
        xl: 1920,
      }

    },
  });

return (
  <div className={props.calendarState}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop" // change to mobile
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
        <button className="selected-dates-button" onClick={handleSelection}>Aplicar</button>
      </LocalizationProvider>
    </ThemeProvider>
  </div>
);
}

export default Calendar;
