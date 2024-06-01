import React, { useEffect, useState } from "react";
import logo from "@/assets/Logos/logo-transparent-svg.svg";
import { useLocation } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

type HeaderProps = {};

const navItems = [
  { id: 1, to: "home", text: "Home" },
  { id: 2, to: "about", text: "About" },
  { id: 3, to: "skill", text: "Skills" },
  { id: 4, to: "portfolio", text: "Portfolio" },
  { id: 5, to: "contact", text: "Contact" },
];

const Header: React.FC<HeaderProps> = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobileOpen, toggleMobileOpen] = useState<boolean>(false);
  const [activePath, setActivePath] = useState("");

  const location = useLocation();
  // console.log(location);
  let pathname = location.pathname;

  const [hoveredPath, setHoveredPath] = useState(pathname);

  if (pathname.includes("/contact")) {
    pathname = "/contact";
  }

  const handleMobileMenuClose = () => toggleMobileOpen(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="dark_nav w-full h-20 flex items-center sticky top-0 z-50 bg-white shadow-md shadow-gray-300">
      <header className="w-[90%] mx-auto flex justify-between items-center ">
        <div className="anim_Right">
          <Link
            className="outline-none cursor-pointer "
            to="home"
            smooth
            spy
            offset={-80}
            duration={1000}
          >
            <img
              src={logo}
              alt="logo"
              width={70}
              className="relative cursor-pointer z-50 sm:w-[25%]"
            />
          </Link>
        </div>
        <div className="anim_Top_Link flex gap-x-10 lg:gap-x-5 md:hidden sm:hidden items-center dark:text-gray-100">
          {navItems.map((item) => {
            const isActive = item.to === activePath;
            return (
              <Link
                key={item.id}
                style={{ "--i": item.id } as React.CSSProperties}
                to={item.to}
                smooth
                spy
                offset={-80}
                duration={1000}
                data-active={isActive}
                onClick={() => setActivePath(item.to)}
                onMouseOver={() => setHoveredPath(item.to)}
                onMouseLeave={() => setHoveredPath(item.to)}
                className={`dark:text-white text-gray-800 px-5 py-2 rounded-md cursor-pointer text-[17px] font-semibold lg:text-base relative no-underline duration-300 ease-in ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500 dark:text-orange-400 dark:bg-[#e0e0e0] dark:shadow-neumorph rounded-md"
                    : " "
                }`}
              >
                <span>{item.text}</span>
                {item.to === hoveredPath && (
                  <motion.div
                    className="absolute w-full bottom-0 left-0 h-full bg-gray-100 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 50,
                      damping: 9,
                      duration: 0.3,
                    }}
                  ></motion.div>
                )}
              </Link>
            );
          })}
        </div>

        <section className="flex gap-x-5 items-center cursor-pointer">
          <div onClick={() => setDarkMode(!darkMode)} className="anim_Bottom">
            {darkMode ? (
              <LightModeIcon className="text-base relative z-50 text-orange-400" />
            ) : (
              <DarkModeIcon className="text-base relative z-50" />
            )}
          </div>
          <div
            onClick={() => toggleMobileOpen(!isMobileOpen)}
            className="hidden md:block sm:block"
          >
            {isMobileOpen ? (
              <CloseIcon className="text-base relative z-50" />
            ) : (
              <MenuIcon className="text-lg relative z-50" />
            )}
          </div>
        </section>
      </header>

      {
        <MobileMenu
          isMobileOpen={isMobileOpen}
          navdata={navItems}
          handleMobileMenuClose={handleMobileMenuClose}
        />
      }
    </nav>
  );
};

export default Header;
