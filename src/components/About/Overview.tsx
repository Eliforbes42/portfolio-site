import React from "react";
import profilePicture from "../../content/images/profilePicture.jpg";

interface Props {}

const Overview = (props: Props) => {
  return (
    <div className={"profile-picture-container"}>
      <img className="profile-picture" src={profilePicture} alt="Eli Forbes" />
      <div className={"description-title"}>Overview</div>
      <div className={"description-text"}>
        Eli is a Software Engineer with a passion for creating smooth visual experiences, a keen interest in learning
        various technologies, and a love for coding in general.
      </div>
    </div>
  );
};

export default Overview;
