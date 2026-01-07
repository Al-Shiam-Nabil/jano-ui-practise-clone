import { ChevronDown, Menu, UserRound, X } from "lucide-react";

import { useEffect, useState } from "react";
import navLogo from "../../assets/navLogo.png";
import Button from "../../Shared/Button";

const Navbar = () => {
  const [navScrollY, setNavScrollY] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<number | null>(null);
  console.log(showSubMenu);

  const menusArry = [
    {
      label: "Home",
      subMenu: [
        {
          label: "Business",
          menuList: [
            {
              url: "#",
              label: "insurance",
            },
            {
              url: "#",
              label: "Web hosting",
            },
            {
              url: "#",
              label: "Education",
            },

            {
              url: "#",
              label: "N.P. Charity",
            },
            {
              url: "#",
              label: "Real State",
            },
          ],
        },

        {
          label: "Landing",
          menuList: [
            {
              url: "#",
              label: "insurance",
            },
            {
              url: "#",
              label: "Web hosting",
            },
            {
              url: "#",
              label: "Education",
            },

            {
              url: "#",
              label: "N.P. Charity",
            },
            {
              url: "#",
              label: "Real State",
            },
          ],
        },

        {
          label: "Agency",
          menuList: [
            {
              url: "#",
              label: "insurance",
            },
            {
              url: "#",
              label: "Web hosting",
            },
            {
              url: "#",
              label: "Education",
            },

            {
              url: "#",
              label: "N.P. Charity",
            },
            {
              url: "#",
              label: "Real State",
            },
          ],
        },
      ],
    },

    {
      label: "Pages",
    },
    {
      label: "Portfolio",
    },

    {
      label: "Blog",
    },
    {
      label: "contact",
    },
  ];

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
            : " border-b border-gray-200 py-5 lg:py-5"
        }  bg-white transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg:px-16">
          {/* left*/}
          <img src={navLogo} alt="logo" />

          {/* middle */}
          <nav
            className={`absolute lg:static w-[320px] h-screen lg:h-fit lg:w-fit py-8 px-4 lg:px-0 lg:py-0 top-0 left-0 bg-white shadow-2xl lg:shadow-none ${
              menuOpen ? "translate-x-0 " : "-translate-x-100"
            } lg:translate-none transition-all duration-500 ease-in-out overflow-y-auto lg:overflow-visible`}
          >
            <img src={navLogo} alt="logo" className="lg:hidden mb-23" />

            <ul className="flex relative flex-col lg:flex-row gap-8 lg:gap-10">
              {menusArry.map((menu, index) => (
                <li key={index} className="relative ">
                  <span
                    onClick={() =>
                      setShowSubMenu((prev) => (prev === index ? null : index))
                    }
                    className={`lg:py-3 flex justify-between ${
                      showSubMenu === index ? "text-primary" : "text-black"
                    } items-center text-lg font-semibold capitalize`}
                  >
                    {menu?.label}
                    <ChevronDown
                      className={`${showSubMenu === index && "rotate-180"}`}
                    />
                  </span>

                  {showSubMenu === index && (
                    <ul
                      className={`bg-[#eefbfa] lg:bg-white lg:shadow-2xl lg:shadow-gray-300 mt-3 lg:mt-0 ${
                        menu?.subMenu && "py-4 lg:p-6 px-3"
                      } rounded-md  lg:w-[660px] lg:absolute -left-8 top-full flex  flex-col lg:flex-row lg:justify-between gap-7`}
                    >
                      {menu?.subMenu?.map((sub, ind) => (
                        <li key={ind} className="">
                          <h3 className="font-semibold inline-block  border-b-2 border-black py-0.5 capitalize">
                            {sub?.label}
                          </h3>

                          <ul className="mt-3 space-y-3">
                            {sub.menuList.map((list, i) => (
                              <li key={i} className="capitalize">
                                {list.label}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="grid place-items-center lg:hidden mt-25">
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
