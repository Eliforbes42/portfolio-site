import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import CronusPresentation from "../Cronus/CronusPresentation";
import Header from "./Header";
import MainSection from "./MainSection";

interface MainContentProps {
  setUseScrollTransitions: (useTransitions: boolean) => void;
}

const MainContent = (props: MainContentProps) => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header setUseScrollTransitions={props.setUseScrollTransitions} />
        <Switch>
          <Route path="/" exact>
            <MainSection>
              <About />
            </MainSection>
          </Route>
          <Route path="/cronus" exact>
            <CronusPresentation />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default MainContent;
