import { FontIcon } from "@fluentui/react";
import React, { useEffect, useState } from "react";

interface Props {
  setShowMainContent: () => void;
}

const FrontPage = (props: Props) => {
  const [blinking, setBlinking] = useState("blink1");
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(blinking === "blink1" ? "blink2" : "blink1");
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div>
      <div className={"front-page-terminal"}>
        <div className={"front-page-terminal-nav"}>
          <span className={"front-page-terminal-nav-item"} />
          <span className={"front-page-terminal-nav-item"} />
          <span className={"front-page-terminal-nav-item"} />
          {/* <FontIcon iconName={"ChromeMinimize"} className={"front-page-terminal-nav-item-icon"} />
          <FontIcon iconName={"ChromeRestore"} className={"front-page-terminal-nav-item-icon"} />
          <FontIcon iconName={"ChromeClose"} className={"front-page-terminal-nav-item-icon"} /> */}
        </div>
        <div className={"front-page-terminal"}>
          {"E:\\Forbes> A developer with simplicity in mind"}
          <span className={blinking}>_</span>
        </div>
      </div>
      <span className={"front-page-icon"} onClick={props.setShowMainContent}>
        <FontIcon iconName={"DoubleChevronDown8"} />
      </span>
    </div>
  );
};

export default FrontPage;
