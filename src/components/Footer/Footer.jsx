import { Button, Grid } from "@mui/material";
import React from "react";
import "../About/styled.css";

const Footer = ({ sections }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid
      container
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      marginBottom="20px"
      paddingTop="30px">
      <Grid
        className="footer"
        container
        maxWidth={1200}
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
        padding="20px"
        borderTop="1px solid grey"
        borderBottom="1px solid grey">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="23"
          viewBox="0 0 40 23"
          fill="none">
          <path
            d="M0.896301 22.8048V0.986572H15.598V4.78984H5.50923V9.9887H14.8416V13.792H5.50923V19.0015H15.6406V22.8048H0.896301Z"
            fill="black"
          />
          <path
            d="M23.0261 22.8048H18.0829L25.6149 0.986572H31.5595L39.0808 22.8048H34.1376L28.6724 5.97237H28.5019L23.0261 22.8048ZM22.7171 14.2288H34.3933V17.8296H22.7171V14.2288Z"
            fill="black"
          />
        </svg>
        <Grid className="footer_menu">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="text"
              sx={{
                color: "#000",
              }}
              onClick={() => scrollToSection(section.id)}>
              {section.title}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
