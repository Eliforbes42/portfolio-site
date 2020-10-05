import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Header from "./Header";
import MainSection from "./MainSection";

const MainContent = () => {
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
