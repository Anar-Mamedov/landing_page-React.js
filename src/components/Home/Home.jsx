import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import mainImage from "../../assets/images/main.svg";
import clientsImage from "../../assets/images/clinets.svg";
import "../About/styled.css";

const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container maxWidth={1200} id="home">
        <Grid container item xs={12} flexWrap="wrap-reverse">
          <Grid
            container
            item
            xs={12}
            sm={6}
            gap={2}
            alignContent="center"
            padding="5px">
            <Typography
              className="font_size"
              component="p"
              sx={{ fontSize: "45px", fontFamily: "Poppins" }}>
              HEY! <strong>I’m Elnur,</strong> A{" "}
              <strong>CREATIVE DESIGNER</strong> BASED IN{" "}
              <strong>SAN FRANCISCO</strong>
            </Typography>
            <Typography
              component="p"
              color="#9D9291"
              fontFamily="Poppins"
              fontWeight="400"
              fontSize="20px">
              Designing user interfaces for over 4 years as visual designer
            </Typography>
            <Button
              variant="contained"
              sx={{
                padding: "7px 5px 7px 20px",
                color: "#000000",
                backgroundColor: "#7BDFFE",
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontSize: "14px",
                borderRadius: "44px",
                boxShadow: "none",
                marginTop: "20px",
                marginBottom: "30px",
                "&:hover": {
                  backgroundColor: "#7BDFFE",
                  boxShadow: "none",
                },
              }}>
              <strong>Hire Me!</strong>
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
                  // border: "2px solid white",
                }}>
                <ArrowForwardIcon sx={{ color: "#ffffff" }} />
              </Box>
            </Button>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={6}
            justifyContent="center"
            padding="5px">
            <img
              height="100%"
              src={mainImage}
              alt=""
              style={{ maxWidth: "600px", minWidth: "375px" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          gap={1}
          padding="5px"
          marginBottom="30px">
          <img height="25px" src={clientsImage} alt="" />
          <Typography component="p" color="#9D9291" fontSize="14px">
            <strong style={{ color: "#000000" }}>1K</strong>+ Clients
          </Typography>
        </Grid>
      </Grid>
      <Box
        width="100%"
        height="200px"
        display="flex"
        position="relative"
        alignItems="center"
        sx={{ overflow: "hidden" }}>
        <Box
          width="100%"
          height="80px"
          display="flex"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "linear-gradient(96deg, #7ADEFE 0%, #D7F066 100%)",
          }}>
          <Box
            backgroundColor="#000000"
            width="110%"
            height="70px"
            position="absolute"
            alignItems="center"
            display="flex"
            justifyContent="center"
            sx={{
              rotate: "-3deg",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Design </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Creativity </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Development </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Product </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Visual </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> UI/UX </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
            <Typography
              marginLeft={2}
              marginRight={2}
              component="p"
              color="#ffffff"
              fontSize="20px"
              fontFamily="Poppins">
              <strong> Graphic </strong>
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none">
              <path
                d="M30.2036 15.6739C28.8464 16.1616 27.5516 16.6209 26.2866 17.1592C25.005 17.7055 23.7572 18.3135 22.6104 19.1165C20.8024 20.3816 19.7114 22.1167 19.1793 24.2343C18.6086 26.508 18.5031 28.8335 18.4001 31.1598C18.3925 31.3368 18.3847 31.5127 18.3747 31.7546C18.1392 31.4064 18.072 31.0515 17.9508 30.7227C17.2171 28.7272 16.4638 26.7424 15.372 24.9037C14.0618 22.6964 12.1679 21.2989 9.67182 20.7007C7.41845 20.1614 5.11991 20.043 2.81908 19.9461C2.64876 19.9386 2.47887 19.9265 2.29438 19.8477C2.6203 19.7292 2.94764 19.6127 3.2734 19.4931C5.27097 18.7657 7.25538 18.0103 9.09395 16.9174C11.2999 15.6052 12.695 13.7105 13.2921 11.2146C13.85 8.88606 13.9522 6.50986 14.06 4.13392C14.0642 4.03755 14.0235 3.93021 14.1333 3.84007C14.5426 4.92988 14.9306 6.01957 15.3617 7.09161C15.9703 8.60748 16.6533 10.0853 17.6051 11.4278C18.8574 13.1954 20.5605 14.2668 22.6335 14.7979C24.8928 15.3763 27.2054 15.4848 29.5194 15.5875C29.7255 15.5963 29.9403 15.567 30.2045 15.6727L30.2036 15.6739Z"
                fill="white"
              />
              <path
                d="M42.6489 28.8196C41.4384 29.3429 40.2098 29.7688 39.0357 30.3411C37.0097 31.3288 35.8464 32.9101 35.5079 35.1375C35.3206 36.3668 35.2725 37.604 35.191 38.8407C35.1875 38.898 35.1828 38.9555 35.1255 39.0254C34.9108 38.4469 34.6972 37.8683 34.4815 37.2912C34.1361 36.3653 33.7252 35.4694 33.2126 34.6223C32.2292 32.9986 30.7304 32.1956 28.9046 31.8919C27.7524 31.6996 26.592 31.6443 25.4301 31.5859C25.2842 31.578 25.1373 31.5636 24.9796 31.4996C25.558 31.2849 26.1368 31.0723 26.7149 30.8554C27.652 30.5039 28.5596 30.0889 29.4148 29.5639C31.0357 28.5698 31.8195 27.0617 32.1191 25.2377C32.3107 24.0733 32.3593 22.8984 32.4215 21.7247C32.4281 21.6002 32.4119 21.4713 32.4963 21.3383C32.9731 22.5792 33.3916 23.8257 33.9867 25.003C34.822 26.6559 36.0344 27.8452 37.8776 28.2999C38.8385 28.5368 39.816 28.6633 40.8026 28.7183C41.4189 28.7527 42.0339 28.7862 42.65 28.8195L42.6489 28.8196Z"
                fill="white"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
