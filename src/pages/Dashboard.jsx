import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import References from "../components/References/References";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "portfolio", title: "Portfolio" },
  { id: "references", title: "References" },
  { id: "contact", title: "Contact" },
];

const Dashboard = () => {
  return (
    <div>
      <Header sections={sections} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />{" "}
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="references">
        <References />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer sections={sections} />
      </section>
    </div>
  );
};

export default Dashboard;
