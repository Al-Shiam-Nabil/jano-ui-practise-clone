const Button = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-primary text-white hover:bg-black px-6 py-3 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Button;
