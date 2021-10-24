import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";

function Calendar(props) {
  const [value, setValue] = useState([null, null]);
  const handleSelection = (event) => {
    event.preventDefault();
    props.handleSelected(`${value}`);
  }
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
