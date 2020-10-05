import React from "react";

interface MainSectionProps {
  children: JSX.Element;
}

const MainSection = (props: MainSectionProps) => {
  return <main className="app-main">{props.children}</main>;
};

export default MainSection;
