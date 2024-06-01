import { Variants, motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

interface Navdata {
  id: number;
  to: string;
  text: string;
}

type MobileMenuProps = {
  navdata: Navdata[];
  handleMobileMenuClose: () => void;
  isMobileOpen: boolean;
};

const mobileVariats: Variants = {
  open: {
    clipPath: `circle(139.7% at 97% 1%)`,
    transition: {
      duration: 0.6,
    },
  },
  closed: {
    clipPath: `circle(1% at 96% 5.8%)`,
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
};
// const menuVariats = {
//   initial: {
//     scaleY: 0,
//   },
//   animate: {
//     scaleY: 1,
//     transtion: {
//       duration: 0.5,
//       ease: [0.12, 0, 0.39, 0],
//     },
//   },
//   exit: {
//     scaleY: 0,
//     transtion: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };
const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },

  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const moibleLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 0],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 0],
    },
  },
};
const MobileMenu: React.FC<MobileMenuProps> = ({
  navdata,
  handleMobileMenuClose,
  isMobileOpen,
}) => {
  return (
    <motion.nav
      variants={mobileVariats}
      initial={false}
      animate={isMobileOpen ? "open" : "closed"}
      className="h-screen w-full  fixed top-0 z-10 d:"
    >
      {/* <div className="anim_Left_Social absolute top-20 right-8 z-20 flex flex-col p-2 h-fit w-60 bg-gray-300 rounded-xl"> */}
      <motion.div
        // variants={menuVariats}
        // variants={containerVars}
        // initial="initial"
        // animate="open"
        // animate="animate"
        // exit="exit"
        variants={moibleLinkVars}
        initial="initial"
        animate="open"
        className="dark:bg-gray-500 bg-gray-300 h-[calc(100vh-80px)] p-5 absolute bottom-0 w-full md:w-1/2 md:right-0 flex flex-col justify-center md:items-center sm:items-center md:gap-y-5 sm:gap-y-9 md:font-semibold sm:font-semibold md:text-lg sm:text-xl"
      >
        {navdata.map(({ id, text, to }) => (
          <Link
            key={id}
            style={{ "--i": id } as React.CSSProperties}
            to={to}
            smooth
            spy
            offset={-80}
            duration={1500}
            onClick={handleMobileMenuClose}
            className="cursor-pointer"
            // className="w-full py-2  m-1 bg-slate-400 text-center "
          >
            {text}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
};
export default MobileMenu;
