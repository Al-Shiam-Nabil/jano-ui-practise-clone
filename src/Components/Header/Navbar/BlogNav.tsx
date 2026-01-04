import NavContainer from "./NavContainer";
type String = {
  className: string;
};

const BlogNav = ({ className }: String) => {
  return (
    <NavContainer className={className}>
      <ul className="flex flex-col items-start space-y-3">
        <li className=" cursor-pointer inline-block  hover:text-primary">
          Grid With Sidebar
        </li>
        <li className=" cursor-pointer inline-block  hover:text-primary">
          List With Sidebar
        </li>
        <li className=" cursor-pointer inline-block  hover:text-primary">
          Grid Layout
        </li>
        <li className=" cursor-pointer inline-block hover:text-primary">
          Blog Details
        </li>
      </ul>
    </NavContainer>
  );
};

export default BlogNav;
