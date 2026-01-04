import NavContainer from "./NavContainer";
type String = {
  className: string;
};

const ContactNav = ({ className }: String) => {
  return (
    <NavContainer className={className}>
      <ul className="space-y-3 flex flex-col items-start">
        <li className=" cursor-pointer inline-block hover:text-primary">
          Contact - Web Hosting
        </li>
        <li className=" cursor-pointer inline-block hover:text-primary">
          Contact - Agency
        </li>
        <li className=" cursor-pointer inline-block hover:text-primary">
          Contact - Insurence
        </li>
        <li className=" cursor-pointer inline-block hover:text-primary">
          Contact - L.Genaretion
        </li>
      </ul>
    </NavContainer>
  );
};

export default ContactNav;
