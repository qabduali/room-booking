import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyle =
    "w-full py-2 px-4 rounded transition-colors duration-150 ease-in-out font-medium";

  const primaryStyle = `
    bg-blue-500 text-white 
    hover:bg-blue-600 
    disabled:bg-gray-300 
    disabled:hover:bg-gray-300`;

  const secondaryStyle = `
    bg-white text-blue-500 border border-blue-500 
    hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600 
    disabled:border-gray-300 disabled:text-gray-500 disabled:bg-white disabled:hover:bg-white`;

  const style = `${baseStyle} ${
    variant === "primary" ? primaryStyle : secondaryStyle
  }`;

  return (
    <button {...props} className={`${style}`}>
      {children}
    </button>
  );
};

export default Button;
