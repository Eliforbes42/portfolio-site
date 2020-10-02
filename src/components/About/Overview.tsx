import { FontIcon } from "@fluentui/react";
import React, { useState } from "react";
import profilePicture from "../../content/images/profilePicture.jpg";

interface Props {}

const Overview = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showExpandButton] = useState(window.innerWidth > 1024);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return isExpanded ? (
    <div className={"about-page-sub-container"}>
      <div className={"profile-picture-container"}>
        <img className={"profile-picture"} src={profilePicture} alt="Eli Forbes" />
        <div className={"description-container"}>
          <div className={"description-title"}>Overview</div>
          <div className={"description-text"}>
            Eli is a Software Engineer with a passion for creating smooth visual experiences, a keen interest in
            learning various technologies, and a love for coding in general.
          </div>
        </div>
        {showExpandButton && (
          <FontIcon
            iconName={"DoubleChevronLeft8"}
            className={"fabric-logo expansion-chevron footer-link"}
            onClick={toggleExpansion}
          />
        )}
      </div>
      <div className={"profile-picture-container no-content"} />
    </div>
  ) : (
    <div>
      <div className={"profile-picture-container-collapsed"}>
        <img className={"invisible"} src={profilePicture} alt="Eli Forbes" />
        <FontIcon
          iconName={"DoubleChevronRight8"}
          className={"fabric-logo expansion-chevron footer-link"}
          onClick={toggleExpansion}
        />
      </div>
      <div className={"profile-picture-container-collapsed no-content"}>
        <FontIcon iconName={"DoubleChevronRight8"} className={"fabric-logo expansion-chevron footer-link invisible"} />
      </div>
    </div>
  );
};

export default Overview;
