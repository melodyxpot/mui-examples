import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import SingleInputDateRangePickerWithAdornment from "./components/SingleInputDateRangePickerWithAdornment";
import MuiXLicense from "./utils/muiXLicense";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import BasicDatePicker from "./components/BasicDatePicker";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiXLicense />
      <StyledEngineProvider injectFirst>
        <Grid>
          <SingleInputDateRangePickerWithAdornment />
        </Grid>
        <Grid>
          <BasicDatePicker />
        </Grid>
      </StyledEngineProvider>
    </LocalizationProvider>
  );
}

export default App;
