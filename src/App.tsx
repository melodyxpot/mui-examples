import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import SingleInputDateRangePickerWithAdornment from "./components/SingleInputDateRangePickerWithAdornment";
import MuiXLicense from "./utils/muiXLicense";

function App() {
  return (
    <>
      <MuiXLicense />
      <StyledEngineProvider injectFirst>
        <SingleInputDateRangePickerWithAdornment />
      </StyledEngineProvider>
    </>
  );
}

export default App;
