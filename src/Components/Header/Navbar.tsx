import { ChevronDown, UserRound } from "lucide-react";

import { useEffect, useState } from "react";
import navLogo from "../../assets/navLogo.png";
import Button from "../../Shared/Button";
import BlogNav from "./Navbar/BlogNav";
import ContactNav from "./Navbar/ContactNav";
import HomeNav from "./Navbar/HomeNav";
import PageNav from "./Navbar/PageNav";
import PortfolioNav from "./Navbar/PortfolioNav";

const Navbar = () => {
  const [navScrollY, setNavScrollY] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setNavScrollY(window.scrollY > 50);
    };

    window.document.addEventListener("scroll", onScroll);

    return () => window.document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        className={` ${
          navScrollY
            ? "shadow-md  py-3.5 border-none border-b border-transparent"
            : " border-b border-gray-200 py-5"
        }  bg-white transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg:px-16">
          {/* left*/}

          <img src={navLogo} alt="logo" />

          {/* middle */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li className="relative group">
                <span className="flex items-center group-hover:text-primary cursor-pointer py-3 text-lg font-semibold">
                  Home <ChevronDown />
                </span>

                <HomeNav className="min-w-150 p-8"></HomeNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Pages <ChevronDown />
                </span>
                <PageNav className="min-w-75 py-6 pl-6"></PageNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Portfolio <ChevronDown />
                </span>
                <PortfolioNav className="min-w-60 py-6 pl-6"></PortfolioNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Blog <ChevronDown />
                </span>
                <BlogNav className="min-w-60 py-6 pl-6"></BlogNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Contact <ChevronDown />
                </span>
                <ContactNav className="min-w-60 py-6 pl-6"></ContactNav>
              </li>
            </ul>
          </nav>

          {/* right */}
          <div className="flex items-center gap-3">
            <div className="border border-gray-300 rounded-full  p-2.5 cursor-pointer group hover:bg-primary hover:border-transparent transition-all duration-300 ease-in-out">
              <UserRound className="text-primary group-hover:text-white transition-colors duration-300 ease-in-out"></UserRound>
            </div>

            <Button className="hidden lg:block rounded-full font-semibold">
              Contact us
            </Button>
            {/* small screen menubar */}
            <div className="lg:hidden p-2 text-white bg-primary rounded-lg cursor-pointer w-10 h-10 flex justify-center items-center flex-col gap-1.5 group">
              <span className="w-6 h-0.5 bg-white block group-hover:rotate-45 group-hover:translate-y-2 transition-all duration-500 ease-in-out"></span>
              <span className="w-6 h-0.5 bg-white block group-hover:opacity-0 opacity-100 group-hover:translate-x-2 transition-all duration-300  "></span>
              <span className="w-6 h-0.5 bg-white block group-hover:-rotate-45 group-hover:-translate-y-2 transition-all duration-500 ease-in-out"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
