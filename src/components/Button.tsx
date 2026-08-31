import React from "react";

const Button = ({
  children,
  variant,
  onClick,
  as = "button",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
  as?: "button" | "a";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const buttonStyles = {
    primary: "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600",
    secondary: "border-2 border-gray-500 hover:bg-gray-100 active:bg-gray-200",
  };

  const classes = `${className} btn flex justify-center items-center gap-1 text-center rounded-4xl px-3 py-1 ${buttonStyles[variant]}`;
  if (as === "a") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
