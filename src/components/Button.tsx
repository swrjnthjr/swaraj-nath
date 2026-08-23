import React from "react";

const Button = ({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
}) => {
  const buttonStyles = {
    primary: "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600",
    secondary: "border-2 border-gray-500 hover:bg-gray-100 active:bg-gray-200",
  };
  return (
    <button
      onClick={onClick}
      className={`btn flex justify-center items-center gap-1 text-center rounded-4xl px-3 py-1 ${buttonStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
