import React, { useState } from "react";
import Chevron from "../Misc/Chevron";
import PDFDocument from "./PDFDocument";

interface Props {
  title: string;
}

const DocumentListPane = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandContainer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={"document-pane"} onClick={expandContainer}>
      <div className={"document-title-container"}>
        <div className={isExpanded ? "document-title" : "document-title-collapsed-pane"}>{props.title}</div>
        <Chevron isExpanded={isExpanded} />
      </div>
      <div className={"document-title-container"}>
        {isExpanded ? (
          <>
            <PDFDocument file={`./${props.title.toLowerCase()}.pdf`} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DocumentListPane;
