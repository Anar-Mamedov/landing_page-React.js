import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import References from "../components/References/References";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
// import AppRoutes from "../AppRoutes";

const Dashboard = () => {
  return (
    <div>
      {/* <AppRoutes /> */}
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <References />
      <Contact />
      <Footer />
    </div>
  );
};

export default Dashboard;
