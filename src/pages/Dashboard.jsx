import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default Dashboard;
