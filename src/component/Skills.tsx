import React from "react";
import PageNavigation from "./PageNavigation";
import { data } from "./Constants/SkillData";
import { NavLink } from "react-router-dom";

type SkillsProps = {};

const myData = {
  name: "Skills",
  label: "What I Do",
  content:
    "Mastering frontend tech, excelling in React, HTML, CSS, JavaScript, and deployment tools. My skills drive innovative and polished user experiences.",
};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section
      id="skill"
      className="w-full max-w-[90%]  text-center mx-auto py-16"
    >
      <PageNavigation data={myData} />
      <div className="anim_Top_Link w-[95%] mt-16 flex gap-4 justify-center flex-wrap mx-auto">
        {data.map(({ id, Icon, color, size }, index) => {
          return (
            <NavLink
              to="/"
              key={id}
              style={{ "--i": index + 7 } as React.CSSProperties}
              className="p-4 rounded-lg cursor-pointer bg-white shadow-lg relative hover:bottom-1"
            >
              {size ? (
                <Icon color={color} size={size} className="drop-shadow-md" />
              ) : (
                <Icon color={color} size={75} className="drop-shadow-md" />
              )}
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
