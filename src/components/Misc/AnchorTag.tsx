import React from "react";

interface Props {
  href: string;
  children: JSX.Element | string;
  className?: string;
}

const AnchorTag = (props: Props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className={props.className || ""}>
      {props.children}
    </a>
  );
};

export default AnchorTag;
