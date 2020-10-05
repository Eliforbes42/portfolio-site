import React, { useCallback, useEffect, useState } from "react";
import "../../content/styles/App.scss";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import MainContent from "./MainContent";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [useScrollTransitions, setUseScrollTransitions] = useState(true);
  console.log("useScrollTransitions", useScrollTransitions);

  const handleScroll = useCallback(
    (e) => {
      if (e.deltaY > 0 && !e.ctrlKey && !e.shiftKey) {
        setShowMainContent(true);
      }
      if (e.deltaY < 0 && window.pageYOffset === 0 && !e.ctrlKey && !e.shiftKey) {
        setShowMainContent(false);
      }
    },
    [setShowMainContent]
  );

  useEffect(() => {
    if (useScrollTransitions) {
      window.addEventListener("wheel", handleScroll, true);
    } else {
      window.removeEventListener("wheel", handleScroll, true);
    }
    return () => window.removeEventListener("wheel", handleScroll, true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useScrollTransitions]);

  return (
    <>
      <div className={!showMainContent ? "front-page" : "front-page-hidden"}>
        {!showMainContent && <FrontPage setShowMainContent={() => setShowMainContent(true)} />}
      </div>
      <div className={showMainContent ? "app" : "app-hidden"}>
        <MainContent />
        <div className={"app-spacer"} />
      </div>
      {showMainContent && (
        <Footer
          setMainContentShow={() => setShowMainContent(false)}
          togglePageScrollTransition={() => setUseScrollTransitions(!useScrollTransitions)}
          useScrollTransitions={useScrollTransitions}
        />
      )}
    </>
  );
}

export default App;
