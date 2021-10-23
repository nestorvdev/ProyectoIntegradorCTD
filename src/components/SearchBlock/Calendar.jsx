import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import Box from "@mui/material/Box";
import "./styles.css";

function Calendar(props) {
  const [value, setValue] = useState([null, null]);
  return (
    <div className={props.calendarState}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
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
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;
