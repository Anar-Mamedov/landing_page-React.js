import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import "./styled.css";

const Header = ({ sections }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const lastPageIndex = sections.length - 1;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    handleCloseNavMenu(); // Close the menu after clicking on a menu item

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Your logo or website title */}
            {/* ... */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
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
            </Typography>
            {/* {matches && (
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
            )} */}

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {sections.map((section) => (
                  <MenuItem
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}>
                    <Typography textAlign="left">{section.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
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
              {/* Your logo or website title */}
              {/* ... */}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}>
              {sections.map((section, index) => (
                <Button
                  key={section.id}
                  className={index === lastPageIndex ? "last-page" : ""}
                  onClick={() => scrollToSection(section.id)}
                  sx={{
                    my: 2,
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                  }}>
                  {section.title}
                  {index === lastPageIndex && (
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#000000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px",
                        marginLeft: "10px",
                        border: "2px solid white",
                      }}>
                      <ArrowForwardIcon sx={{ color: "#ffffff" }} />
                    </Box>
                  )}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
