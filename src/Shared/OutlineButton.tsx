import React from "react";

type OutlineButtonType = {
  children: React.ReactNode;
  className?: string;
};

export default function OutlineButton({
  children,
  className,
}: OutlineButtonType) {
  return (
    <button
      className={`${className} border border-primary hover:bg-primary cursor-pointer hover:text-white transition-all duration-400 ease-in-out inline-block px-8 py-2.5 rounded-full text-primary font-semibold `}
    >
      {children}
    </button>
  );
}
