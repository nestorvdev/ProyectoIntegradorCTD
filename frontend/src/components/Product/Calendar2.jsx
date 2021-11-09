import * as React from 'react';
import addDays from 'date-fns/addDays';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { makeStyles } from '@mui/styles';
//import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    color: "black",
    boxShadow: '10px 5px 5px grey',
    fontSize: 20,
    background: "white",
    height: "300px",
    width: "640px",
  }
});

function getDaysAfter(date, amount) {
  return date ? addDays(date, amount) : undefined;
}

export default function Calendar2() {
  const [value, setValue] = React.useState([null, null]);
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff00d4',
      },

    },
  });
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <StaticDateRangePicker
            className={classes.root}
            calendars={window.innerWidth > 414 ? 2 : 1}
            displayStaticWrapperAs="desktop"
            maxDate={getDaysAfter(value[0], 5)}
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
      </ThemeProvider>

    </div>
  );
}