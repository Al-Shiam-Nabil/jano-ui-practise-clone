import type React from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonType) => {
  return (
    <button
      className={`${className} bg-primary text-white hover:bg-black px-8 py-3 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
