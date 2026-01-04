import NavContainer from "./NavContainer";
type String = {
  className: string;
};
const PortfolioNav = ({ className }: String) => {
  return (
    <NavContainer className={className}>
      <ul className="space-y-3">
        <li className=" cursor-pointer hover:text-primary">Portfolio - 1</li>
        <li className=" cursor-pointer hover:text-primary">Portfolio - 2</li>
        <li className=" cursor-pointer hover:text-primary">Portfolio - 3</li>
        <li className=" cursor-pointer hover:text-primary">Portfolio - 4</li>
        <li className=" cursor-pointer hover:text-primary">Portfolio - 5</li>
        <li className=" cursor-pointer hover:text-primary">Portfolio - 6</li>
      </ul>
    </NavContainer>
  );
};

export default PortfolioNav;
