import React from "react";
import { NavLink } from "react-router-dom";
import PageNavigation from "./PageNavigation";
type PortfolioProps = {};

const myData = {
  name: "Portfolio",
  label: "Check My Wonderful Works",
  content:
    "Eager to code, ready to learn. Explore my portfolio for a glimpse into my projects. Let's create something impactful together!.",
};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <section
      id="portfolio"
      className="w-full max-w-[90%] text-center mx-auto py-16"
    >
      <PageNavigation data={myData} />
      <div className="flex justify-center flex-wrap gap-x-[500px] gap-y-40 sm:gap-y-20 my-14">
        <img src="" alt="Project_1" />
        <img src="" alt="Project_2" />
        <img src="" alt="Project_3" />
        <img src="" alt="Project_4" />
      </div>
      <div className="anim_top">
        <NavLink
          to="https://github.com/gulam161?tab=repositories"
          className="sub-btn bg-orange-500 hover:bg-orange-600"
        >
          View more
        </NavLink>
      </div>
    </section>
  );
};
export default Portfolio;
