import * as React from "react";
import Calendar from "@mui/icons-material/Event";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function SingleInputDateRangePickerWithAdornment() {
  return (
    <DemoContainer components={["SingleInputDateRangeField"]}>
      <DateRangePicker
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{
          textField: {
            InputProps: { endAdornment: <Calendar />, size: "small" }
          }
        }}
        value={[dayjs(), dayjs()]}
        onChange={val => {
          const date = {
            startDate: dayjs(val[0]).format("YYYY-MM-DD"),
            endDate: dayjs(val[1]).format("YYYY-MM-DD")
          };
          console.log(date);
        }}
        onClose={() => {
          console.log("closed");
        }}
      />
    </DemoContainer>
  );
}
