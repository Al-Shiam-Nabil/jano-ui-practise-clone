import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-11/12 lg:max-w-[984px] xl:max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
