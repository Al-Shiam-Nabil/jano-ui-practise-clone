type SubType = {
  label: string;
};

type propsType = {
  className: string;
  sub: SubType;
};

const HomeNav = ({ className, sub }: propsType) => {
  console.log(sub);
  return (
    <div className="w-full bg-red-400 border lg:shadow-2xl lg:rounded-sm mb-5 lg:flex-col  lg:justify-between  lg:gap-20  lg:absolute lg:-left-8 lg:flex lg:invisible lg:group-hover:visible lg:opacity-0 group-hover:opacity-100 top-24 group-hover:top-full transition-all duration-500 ease-in-out">
      {/* business */}

      <div className=" border ">
        <h3 className="font-semibold border-b-2 border-black inline-block">
          {sub?.label}
        </h3>
      </div>

      <ul className="my-4 flex flex-col  gap-3 ">
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
  );
};

export default HomeNav;
