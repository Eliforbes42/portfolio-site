import React from "react";

interface Props {
  children: JSX.Element;
}

const MainSection = (props: Props) => {
  return <main className="app-main">{props.children}</main>;
};

export default MainSection;
