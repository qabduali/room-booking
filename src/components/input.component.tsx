import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block text-sm font-semibold ml-2">{label}</label>
      <input
        {...props}
        className={`p-2 border rounded-md w-full ${props.className}`}
      />
    </div>
  );
};

export default Input;
