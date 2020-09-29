import React from "react";
import profilePicture from "../../content/images/profilePicture.jpg";
import { documentStrings } from "../../Strings";
import DocumentListPane from "./DocumentListPane";

interface Props {}

const Documents = (props: Props) => {
  return (
    <div className="document-page-container">
      <img className="profile-picture" src={profilePicture} alt="Eli Forbes" />
      <div className={"document-description-container"}>
        {documentStrings.map((document) => (
          <DocumentListPane title={document} />
        ))}
      </div>
    </div>
  );
};

export default Documents;
