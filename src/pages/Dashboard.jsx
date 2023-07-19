import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default Dashboard;
