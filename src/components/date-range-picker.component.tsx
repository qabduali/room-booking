import React from "react";
import DatePicker from "./date-picker.component";
import { IDateRange } from "../types/types";

interface DateRangePickerProps {
  dateRange: IDateRange;
  onChange: (range: IDateRange) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateRange,
  onChange,
}) => {
  const handleDateChange =
    (key: keyof IDateRange) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newRange = { ...dateRange, [key]: e.target.value };
      onChange(newRange);
    };

  return (
    <div className="flex gap-2 p-4 bg-gray-50 rounded-lg">
      <DatePicker
        label="Start Date"
        value={dateRange.startDate}
        onChange={handleDateChange("startDate")}
        className="max-w-xs"
      />
      <DatePicker
        label="End Date"
        value={dateRange.endDate}
        onChange={handleDateChange("endDate")}
        className="max-w-xs"
      />
    </div>
  );
};

export default DateRangePicker;
