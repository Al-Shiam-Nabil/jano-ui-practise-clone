import { ChevronDown, Menu, UserRound, X } from "lucide-react";

import { useEffect, useState } from "react";
import navLogo from "../../assets/navLogo.png";
import Button from "../../Shared/Button";
import HomeNav from "./Navbar/HomeNav";

const menu = {
  menuList: [
    {
      label: "Home",
      subMenu: [
        {
          label: "Business",
        },
        {
          label: "Landing",
        },
        {
          label: "Agency",
        },
      ],
    },
    {
      label: "pages",
    },
    {
      label: "Portfolio",
    },

    {
      label: "Blog",
    },

    {
      label: "Contact",
    },
  ],
};

console.log(menu);

const Navbar = () => {
  const [navScrollY, setNavScrollY] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
            : " border-b border-gray-200 py-5 lg:py-0"
        }  bg-white transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg:px-16">
          {/* left*/}

          <img src={navLogo} alt="logo" />

          {/* middle */}
          <nav
            className={` absolute lg:static w-[320px] h-screen lg:h-fit lg:w-fit py-8 px-4 top-0 left-0 shadow-xl bg-white lg:shadow-none lg:bg-transparent  lg:block transition-all duration-500 ease-in-out overflow-x-auto lg:overflow-visible ${
              menuOpen
                ? "translate-x-0 lg:translate-none"
                : "-translate-x-100 lg:translate-none"
            } `}
          >
            <img src={navLogo} alt="logo" className="lg:hidden" />

            <ul className="flex flex-col lg:flex-row lg:items-center gap-8 mt-23 lg:mt-0">
              {menu.menuList.map((menu, index) => (
                <li key={index} className="relative group  w-full lg:w-fit ">
                  <span className="flex justify-between lg:justify-center items-center group-hover:text-primary cursor-pointer py-3 text-lg font-semibold">
                    {menu?.label} <ChevronDown />
                  </span>

                  <div
                    className={`bg-[#eefbfa]  ${
                      menu?.subMenu && "py-4 px-3 rounded-md"
                    }   lg:bg-transparent lg:py-0 lg:px-0 lg:rounded-0`}
                  >
                    {menu?.subMenu?.map((sub, ind) => (
                      <HomeNav
                        key={ind}
                        sub={sub}
                        className="lg:min-w-150 lg:p-8"
                      ></HomeNav>
                    ))}
                  </div>
                </li>
              ))}

              {/* <li className="relative group  ">
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
              </li> */}
            </ul>

            <div className="w-full lg:hidden grid place-items-center mt-18">
              <Button className="  rounded-full font-semibold">
                Contact us
              </Button>
            </div>
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
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-white bg-primary rounded-lg cursor-pointer w-10 h-10 flex justify-center items-center flex-col gap-1.5 group transition-all duration-500 ease-in"
            >
              {menuOpen ? <X /> : <Menu />}

              {/* <span className="w-6 h-0.5 bg-white block group-hover:rotate-45 group-hover:translate-y-2 transition-all duration-500 ease-in-out"></span>
              <span className="w-6 h-0.5 bg-white block group-hover:opacity-0 opacity-100 group-hover:translate-x-2 transition-all duration-300  "></span>
              <span className="w-6 h-0.5 bg-white block group-hover:-rotate-45 group-hover:-translate-y-2 transition-all duration-500 ease-in-out"></span> */}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
