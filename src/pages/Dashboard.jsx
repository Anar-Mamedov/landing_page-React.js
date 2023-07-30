import React from "react";

const Header = React.lazy(() => import("../components/Header/Header"));
const Home = React.lazy(() => import("../components/Home/Home"));
const About = React.lazy(() => import("../components/About/About"));
const Skills = React.lazy(() => import("../components/Skills/Skills"));
const Portfolio = React.lazy(() => import("../components/Portfolio/Portfolio"));
const References = React.lazy(() =>
  import("../components/References/References")
);
const Contact = React.lazy(() => import("../components/Contact/Contact"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

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
    <React.Suspense fallback={<></>}>
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
    </React.Suspense>
  );
};

export default Dashboard;
