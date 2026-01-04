const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} w-11/12 lg:max-w-[984px] xl:max-w-330 mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
