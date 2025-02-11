import React from "react";
import { OptionType } from "../types/types";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: OptionType[];
}

const Select: React.FC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block text-sm font-semibold ml-2">{label}</label>
      <select
        {...props}
        className={`p-2 border rounded-md w-full cursor-pointer ${props.className}`}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="cursor-pointer "
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
