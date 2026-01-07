import type React from "react";

type NavContainerType = {
  children: React.ReactNode;
  className?: string;
};

const NavContainer = ({ children, className }: NavContainerType) => {
  return (
    <div
      className={`${className} border lg:shadow-2xl lg:rounded-sm mb-5  lg:justify-between  lg:gap-20  lg:absolute lg:-left-8 lg:flex lg:invisible lg:group-hover:visible lg:opacity-0 group-hover:opacity-100 top-24 group-hover:top-full transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default NavContainer;
