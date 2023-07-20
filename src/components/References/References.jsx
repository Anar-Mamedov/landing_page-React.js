import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "../Carousel/Carousel";

const References = () => {
  const gradientBackground =
    "linear-gradient(180deg, rgba(44, 228, 240, 0.36) 25.52%, rgba(3, 237, 144, 0.36) 100%)";
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
        padding="5px">
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
            References
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap="30px"
          item
          xs={12}
          sm={12}>
          <Carousel />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default References;
