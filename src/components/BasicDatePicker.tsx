import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function BasicDatePicker() {
  return (
    <DemoContainer components={["DatePicker"]}>
      <DatePicker label="Basic date picker" value={dayjs()} />
    </DemoContainer>
  );
}
