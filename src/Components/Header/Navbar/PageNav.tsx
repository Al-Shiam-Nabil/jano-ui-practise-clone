import { ChevronRight } from "lucide-react";
import NavContainer from "./NavContainer";

const PageNav = ({ className }) => {
  return (
    <NavContainer className={className}>
      <ul className="w-full">
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            About Us <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible min-w-62">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Insurance
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Real Estate
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Agency
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Lead Genaration
            </li>
          </ul>
        </li>

        {/* services */}
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            Services <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible min-w-62">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Service - Insurance
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Service - Real Estate
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Service - Agency
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Service - Lead Genaration
            </li>
          </ul>
        </li>

        {/* our team */}
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            Our Team <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible min-w-62">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Team One
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Team Two
            </li>
          </ul>
        </li>

        {/* pricing */}
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            AboPricing <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Pricing - Insurance
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Pricing - Real Estate
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Pricing - Agency
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Pricing - Lead Genaration
            </li>
          </ul>
        </li>

        {/* features */}
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            Features <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Features - Insurance
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Features - Real Estate
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Features - Agency
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              Features - Lead Genaration
            </li>
          </ul>
        </li>

        {/* other pages */}
        <li className="w-full group/li relative ">
          <span className=" flex justify-between items-center group-hover/li:text-primary  w-full cursor-pointer pr-3 py-3">
            Other Pages <ChevronRight className=" group-hover/li:rotate-90" />
          </span>

          <ul className="absolute left-67 top-0 bg-white shadow-xl rounded-xs p-5 space-y-3 invisible group-hover/li:visible">
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Insurance
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Real Estate
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Agency
            </li>
            <li className="whitespace-nowrap  hover:text-primary cursor-pointer">
              About - Lead Genaration
            </li>
          </ul>
        </li>
      </ul>
    </NavContainer>
  );
};

export default PageNav;
