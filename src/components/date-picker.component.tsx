import React from "react";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, ...props }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${props.className}`}>
      <label className="block text-sm font-semibold ml-2">{label}</label>
      <input
        {...props}
        className={`p-2 border rounded-md w-full cursor-pointer`}
        type="date"
      />
    </div>
  );
};

export default DatePicker;
