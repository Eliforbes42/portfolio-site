import { FontIcon } from "@fluentui/react";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import resume from "../content/documents/resume.pdf";
import "../../content/styles/App.scss";
import About from "../About/About";
import Documents from "../Documents/Documents";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const frontPageRef = useRef(null);
  const [windowY, setWindowY] = useState(window.pageYOffset);
  const [showMainContent, setShowMainContent] = useState(false);
  const [blinking, setBlinking] = useState("blink1");

  const handleScroll = (e: any) => {
    // console.log("scroll event", e);
    if (e.deltaY > 0) {
      // console.log("windowY", windowY);
      // console.log("window.pageYOffset", window.pageYOffset);
      setShowMainContent(true);
      setWindowY(window.pageYOffset);
    }
    if (e.deltaY < 0 && window.pageYOffset === 0) {
      setShowMainContent(false);
    }
  };
  window.addEventListener("wheel", handleScroll, true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(blinking === "blink1" ? "blink2" : "blink1");
      console.log("interval fired");
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const mainContent = (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main>
            <About />
          </Main>
        </Route>
        <Route path={"/documents"} exact>
          <Main>
            <Documents />
          </Main>
          {/* <DocumentViewer file={documents[i]} /> */}
        </Route>
      </Switch>
    </>
  );

  const frontPage = (
    <div ref={frontPageRef}>
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
      <span className={"front-page-icon"} onClick={() => setShowMainContent(true)}>
        <FontIcon iconName={"DoubleChevronDown8"} />
      </span>
    </div>
  );

  console.log("showMainContent", showMainContent);

  return (
    <>
      <div className={!showMainContent ? "front-page" : "front-page-hidden"}>{!showMainContent && frontPage}</div>
      <div className={showMainContent ? "app" : "app-hidden"}>
        <Router>{mainContent}</Router>
        <div className={"app-spacer"} />
      </div>
      {showMainContent && <Footer setMainContentShow={() => setShowMainContent(false)} />}
    </>
  );
}

export default App;
