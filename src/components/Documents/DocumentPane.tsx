import React, { useState } from "react";

interface Props {
  title: string;
}

const DocumentPane = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandContainer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={"about-pane"} onClick={expandContainer}>
      <div className={"about-title-container"}>
        <div className={"about-title-collapsed-pane"}>{props.title}</div>
      </div>
    </div>
  );
};

export default DocumentPane;
