import { FontIcon } from "@fluentui/react";
import React, { useState } from "react";
import profilePicture from "../../content/images/profilePicture.jpg";
import { overviewContent } from "../../content/Strings";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showExpandButton, setShowExpandButton] = useState(window.innerWidth > 1024);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const handleResize = (e: any) => {
    console.log("e", e);
    if (e.target.innerWidth > 1024) {
      setShowExpandButton(true);
    } else {
      setShowExpandButton(false);
    }
  };
  window.addEventListener("resize", handleResize, true);

  return isExpanded ? (
    <div className={"about-page-sub-container"}>
      <div className={"profile-picture-container"}>
        <img className={"profile-picture"} src={profilePicture} alt="Eli Forbes" />
        <div className={"description-container"}>
          <div className={"description-title"}>{overviewContent.title}</div>
          <div className={"description-text"}>{overviewContent.text}</div>
        </div>
        {showExpandButton && (
          <FontIcon
            iconName={"DoubleChevronLeft8"}
            className={"fabric-logo expansion-chevron footer-link"}
            onClick={toggleExpansion}
          />
        )}
      </div>
    </div>
  ) : (
    <div className={"about-page-sub-container"}>
      <div className={"profile-picture-container-collapsed"}>
        <img className={"invisible"} src={profilePicture} alt="Eli Forbes" />
        <FontIcon
          iconName={"DoubleChevronRight8"}
          className={"fabric-logo expansion-chevron footer-link"}
          onClick={toggleExpansion}
        />
      </div>
    </div>
  );
};

export default Overview;
