import React from "react";
import { documentStrings } from "../../Strings";
import Overview from "../About/Overview";
import DocumentPane from "./DocumentPane";

interface Props {}

const Documents = (props: Props) => {
  return (
    <div className="about-page-container">
      <Overview />
      <div className={"about-description-container"}>
        {documentStrings.map((document) => (
          <DocumentPane title={document} />
        ))}
      </div>
    </div>
  );
};

export default Documents;
