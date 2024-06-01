import React from "react";
import AnimatedText from "./AnimatedText";

interface Data {
  name: string;
  label: string;
  content: string;
}

type PageNavigationProps = {
  data: Data;
};

const PageNavigation: React.FC<PageNavigationProps> = ({ data }) => {
  return (
    <>
      <h3 className="content-1">{data.name}</h3>
      <h1 className="content-2">{data.label}</h1>
      <div className="text-lg tracking-wider mb-3 px-48 lg:px-24 md:px-4 sm:px-0">
        <AnimatedText text={data.content} />
      </div>
    </>
  );
};

export default PageNavigation;
