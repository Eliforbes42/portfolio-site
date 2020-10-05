import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Header from "./Header";
import MainSection from "./MainSection";

interface Props {}

const MainContent = (props: Props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainSection>
            <About />
          </MainSection>
        </Route>
      </Switch>
    </Router>
  );
};

export default MainContent;
