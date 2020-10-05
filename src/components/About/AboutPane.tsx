import React, { useState } from "react";
import Chevron from "../Misc/Chevron";

interface AboutPaneProps {
  title: string;
  content: string | JSX.Element;
}

const AboutPane = (props: AboutPaneProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandContainer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={isExpanded ? "about-pane" : "about-pane-hoverable"} onClick={expandContainer}>
      <div className={"about-title-container"}>
        <div className={isExpanded ? "about-title" : "about-title-collapsed-pane"}>{props.title}</div>
        <Chevron isExpanded={isExpanded} />
      </div>
      <div className={isExpanded ? "about-content" : "about-content-collapsed"}>
        <span className={"about-text"}>{props.content}</span>
      </div>
    </div>
  );
};

export default AboutPane;
