import React from "react";

interface Props {
  children: JSX.Element;
}

const Main = (props: Props) => {
  return <main className="app-main">{props.children}</main>;
};

export default Main;
