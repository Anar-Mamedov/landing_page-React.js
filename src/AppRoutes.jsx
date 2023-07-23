import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"; // Replace this with the actual components for each page
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import References from "./components/References/References";
import Contact from "./components/Contact/Contact";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/references" component={References} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default AppRoutes;
