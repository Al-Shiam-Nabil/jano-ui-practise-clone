import type React from "react";

type NavContainerType = {
  children: React.ReactNode;
  className?: string;
};

const NavContainer = ({ children, className }: NavContainerType) => {
  return (
    <div
      className={`${className} shadow-2xl   bg-white rounded-sm  justify-between  gap-20  absolute -left-8 flex invisible group-hover:visible opacity-0 group-hover:opacity-100 top-24 group-hover:top-full transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default NavContainer;
