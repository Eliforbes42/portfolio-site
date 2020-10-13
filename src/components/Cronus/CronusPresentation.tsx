import { FontIcon } from "@fluentui/react";
import React, { useState } from "react";
import { cronusContent } from "../../content/Strings";

interface Props {}

const CronusPresentation = (props: Props) => {
  const [page, setPage] = useState(0);

  const content = [
    cronusContent.overview,
    cronusContent.architecture,
    cronusContent.development,
    cronusContent.systemMetrics,
    cronusContent.appMetrics,
    cronusContent.alerting,
    cronusContent.repository,
    cronusContent.resources,
  ];
  return (
    <>
      <div className="card">
        <div className={"terminal"}>
          <div className={"terminal-nav-container"}>
            {`${cronusContent.title} | ${cronusContent.subtitles[page]}`}
            <div className={"terminal-nav"}>
              <span className={"terminal-nav-item"} />
              <span className={"terminal-nav-item"} />
              <span className={"terminal-nav-item"} />
            </div>
          </div>
          <div className={"terminal-content"}>
            <div className={"terminal-content-text"}>{content[page]}</div>
          </div>
        </div>
      </div>
      <div className={"page-switch-icons"}>
        <span
          className={page === 0 ? "page-switch-icon disabled" : "page-switch-icon"}
          onClick={() => {
            if (page !== 0) setPage(page - 1);
          }}
        >
          <FontIcon iconName={"DoubleChevronLeft8"} />
        </span>
        <span
          className={page === content.length - 1 ? "page-switch-icon disabled" : "page-switch-icon"}
          onClick={() => {
            if (page !== content.length - 1) setPage(page + 1);
          }}
        >
          <FontIcon iconName={"DoubleChevronRight8"} />
        </span>
      </div>
    </>
  );
};

export default CronusPresentation;
