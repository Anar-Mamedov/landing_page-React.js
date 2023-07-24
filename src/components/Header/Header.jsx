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
import { createTheme, ThemeProvider } from "@mui/material";
import "./styled.css";

const Header = ({ sections }) => {
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseNavMenu(); // Close the menu after clicking on a menu item
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
