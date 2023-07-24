import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../About/styled.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bellaUI from "../../assets/images/Bella.png";
import nft from "../../assets/images/nft.png";
import coeur from "../../assets/images/coeur.png";
import nike from "../../assets/images/nike.png";
import elscooter from "../../assets/images/elscooter.png";
import abroad from "../../assets/images/abroad.png";

const Portfolio = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignContent="center"
      alignItems="center">
      <Grid
        container
        maxWidth={1200}
        justifyContent="center"
        gap="10px"
        padding="5px"
        id="portfolio">
        <Grid
          container
          alignItems="center"
          gap="10px"
          item
          xs={12}
          sm={12}
          marginTop={5}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="135"
            viewBox="0 0 135 135"
            fill="none">
            <path
              d="M95.7522 28.9999L114.345 40.9455C124.613 47.5429 127.589 61.2152 120.991 71.4835C114.394 81.7518 100.722 84.7277 90.4535 78.1303L71.8611 66.1847L95.7522 28.9999Z"
              stroke="#24CE85"
              stroke-width="2.11561"
            />
            <circle
              cx="59.5379"
              cy="32.0003"
              r="22.0992"
              transform="rotate(32.7206 59.5379 32.0003)"
              stroke="#2CBDFB"
              stroke-width="2.11561"
            />
            <path
              d="M38.6466 105.399L20.0542 93.4532C9.78586 86.8558 6.80997 73.1835 13.4073 62.9152C20.0047 52.6469 33.677 49.671 43.9453 56.2684L62.5377 68.2139L38.6466 105.399Z"
              stroke="#24CE85"
              stroke-width="2.11561"
            />
            <circle
              cx="74.8611"
              cy="102.399"
              r="22.0992"
              transform="rotate(-147.279 74.8611 102.399)"
              stroke="#2CBDFB"
              stroke-width="2.11561"
            />
          </svg>
          <Typography
            className="font_size_25px"
            component="p"
            fontFamily="Poppins"
            fontSize="36px"
            fontWeight="700">
            Portfolio
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} marginTop={1}>
          <Typography
            component="p"
            fontFamily="Poppins"
            fontSize="18px"
            color="#9D9291"
            fontWeight="400">
            Thank you for visiting my portfolio and taking the time to learn
            more about my work. Please feel free to explore my projects to get a
            better sense of my design aesthetic and capabilities.
          </Typography>
        </Grid>
        <Grid container justifyContent="center" item xs={12} marginTop={5}>
          <Button
            href="https://www.behance.net/aliyarov"
            variant="contained"
            sx={{
              padding: "5px 5px 5px 40px",
              color: "#000000",
              backgroundColor: "#7BDFFE",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "capitalize",
              fontFamily: "Poppins",
              fontSize: "14px",
              borderRadius: "44px",
              boxShadow: "none",
              marginTop: "20px",
              marginBottom: "30px",
              position: "relative",
              zIndex: "1",
              "&:hover": {
                backgroundColor: "#7BDFFE",
                boxShadow: "none",
              },
            }}>
            <strong>See All</strong>
            <Box
              sx={{
                width: "30px",
                height: "30px",
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
          justifyContent="center"
          gap="40px"
          item
          xs={12}
          sm={12}
          marginTop={5}>
          <a
            href="https://www.behance.net/gallery/158016653/Bella-Hair-salon-Case-study"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={bellaUI} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                Bella Hair Salon App
              </Typography>
            </Box>
          </a>
          <a
            href="https://www.behance.net/gallery/165081901/NFT-Web-Design"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={nft} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                NFT Marketplace Dashboard
              </Typography>
            </Box>
          </a>
          <a
            href="https://www.behance.net/gallery/165105237/Health-Care-App-UX-Case"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={coeur} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                Coeur Health App
              </Typography>
            </Box>
          </a>
          <a
            href="https://www.behance.net/gallery/159499291/Nike-Mobile-App-Case-Study"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={nike} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                Nike Concept App
              </Typography>
            </Box>
          </a>
          <a
            href="https://www.behance.net/gallery/165830751/Electric-Scooter-Case-study"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={elscooter} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                ElScooter App
              </Typography>
            </Box>
          </a>
          <a
            href="https://www.behance.net/gallery/150718967/Study-Abroad-Program"
            style={{ textDecoration: "none", color: "black" }}>
            <Box
              border="2px solid #F1F1F1"
              backgroundColor="#FAFAFA"
              borderRadius="20px"
              width={300}
              height={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1}>
              <Box
                backgroundColor="#FFFFFF"
                borderRadius="20px"
                width={230}
                height={180}
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                marginTop="14px"
                border="3px solid #F1F1F1">
                <img width="200px" src={abroad} alt="" />
              </Box>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700">
                Study Abroad Web
              </Typography>
            </Box>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
