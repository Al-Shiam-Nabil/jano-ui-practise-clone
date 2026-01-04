import NavContainer from "./NavContainer";

type String = {
  className: string;
};

const HomeNav = ({ className }: String) => {
  return (
    <NavContainer className={className}>
      {/* business */}
      <div>
        <h3 className="font-semibold border-b-2 border-black inline-block">
          Business
        </h3>
        <ul className="my-4 flex flex-col gap-3 ">
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Insurance
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Web Hosting
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Education
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            N.P. Charity
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Real Estate
          </li>
        </ul>
      </div>

      {/* landing */}

      <div>
        <h3 className="font-semibold border-b-2 border-black inline-block">
          Landing
        </h3>
        <ul className="my-4 flex flex-col gap-3 ">
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Sass Product
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            App Landing
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Crypto
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Personal Portfolio
          </li>
        </ul>
      </div>

      {/* agency */}

      <div>
        <h3 className="font-semibold border-b-2 border-black inline-block">
          Agency
        </h3>
        <ul className="my-4 flex flex-col gap-3">
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Agency Modern
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            SEO & Digital Agency
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Design agency
          </li>
          <li className="whitespace-nowrap cursor-pointer hover:text-primary">
            Lead Genaration
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

export default HomeNav;
