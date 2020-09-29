import React from "react";
// import resume from "../content/documents/resume.pdf";

interface Props {
  file?: string;
}

const PDFDocument = (props: Props) => {
  return (
    <div className="pdf-container">
      <object className="pdf-viewer" data={props.file} type="application/pdf">
        {" "}
      </object>
      {/* <iframe src={props.file} width="100%" height="100vh" title="Resume"></iframe> */}
    </div>
  );
};

export default PDFDocument;
