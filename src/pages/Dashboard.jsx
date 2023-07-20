import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import References from "../components/References/References";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <References />
    </div>
  );
};

export default Dashboard;
