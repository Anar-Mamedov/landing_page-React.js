import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import skillsPic from "../../assets/images/skills-pic.svg";
import "../About/styled.css";

const Skills = () => {
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
        <Grid container alignItems="center" gap="10px" item xs={12} sm={12}>
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
            Skills & Certification
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12}>
          <Grid
            // border="1px solid red"
            item
            xs={12}
            sm={6}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              sm={12}>
              <img
                className="image_size"
                width="400px"
                src={skillsPic}
                alt=""
              />
            </Grid>
            <Grid
              marginTop={7}
              container
              justifyContent="center"
              gap="45px"
              // border="1px solid green"
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none">
                    <path
                      d="M38.99 6.30583L31.29 14.0058C30.38 14.9158 28.91 14.9158 28 14.0058L24.9667 10.9725C24.0567 10.0625 24.0567 8.5925 24.9667 7.6825C25.8767 6.7725 27.37 6.7725 28.28 7.6825L29.6334 9.05917L35.6767 3.01583C36.5867 2.10583 38.08 2.10583 38.99 3.01583C39.8767 3.92583 39.8767 5.39583 38.99 6.30583Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M14 18.6725C15.2834 18.6725 16.3334 19.7225 16.3334 21.0058C16.3334 22.2892 15.2834 23.3392 14 23.3392C12.7167 23.3392 11.6667 22.2892 11.6667 21.0058C11.6667 19.7225 12.7167 18.6725 14 18.6725ZM14 14.0058C10.1267 14.0058 7.00002 17.1325 7.00002 21.0058C7.00002 24.8792 10.1267 28.0058 14 28.0058C17.8734 28.0058 21 24.8792 21 21.0058C21 17.1325 17.8734 14.0058 14 14.0058Z"
                      fill="white"
                    />
                    <path
                      d="M7.00002 53.6725C5.71669 53.6725 4.66669 52.6225 4.66669 51.3392V39.6725C4.66669 35.9158 7.16335 30.3392 14 30.3392C20.8367 30.3392 23.3334 35.9158 23.3334 39.6725C23.3567 39.9992 23.7067 42.0058 28 42.0058H30.3334C31.6167 42.0058 32.6667 43.0558 32.6667 44.3392C32.6667 45.6225 31.6167 46.6725 30.3334 46.6725H28C20.6267 46.6725 18.6667 42.0992 18.6667 39.6725C18.6667 38.5992 18.27 35.0058 14 35.0058C9.73002 35.0058 9.35669 38.5992 9.33335 39.6958V51.3392C9.33335 52.6225 8.28335 53.6725 7.00002 53.6725Z"
                      fill="white"
                    />
                    <path
                      d="M51.3334 49.0058H21V53.6725H51.3334V49.0058Z"
                      fill="white"
                    />
                    <path
                      d="M45.71 46.6725H45.3134C42.21 46.6725 39.69 44.1525 39.69 41.0492V19.6292C39.69 16.5258 42.21 14.0058 45.3134 14.0058H45.71C48.8134 14.0058 51.3334 16.5258 51.3334 19.6292V41.0258C51.3334 44.1292 48.8134 46.6492 45.71 46.6492V46.6725ZM45.3134 18.6725C44.7767 18.6725 44.3567 19.1158 44.3567 19.6292V41.0258C44.3567 41.5625 44.8 41.9825 45.3134 41.9825H45.71C46.2467 41.9825 46.6667 41.5392 46.6667 41.0258V19.6292C46.6667 19.0925 46.2234 18.6725 45.71 18.6725H45.3134Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  Visual Design
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 56 54"
                    fill="none">
                    <path
                      d="M49 6.75V11.25H7.00001V6.75H49ZM51.3333 2.25H4.66668C3.26668 2.25 2.33334 3.15 2.33334 4.5V13.5C2.33334 14.85 3.26668 15.75 4.66668 15.75H51.3333C52.7333 15.75 53.6667 14.85 53.6667 13.5V4.5C53.6667 3.15 52.7333 2.25 51.3333 2.25Z"
                      fill="white"
                    />
                    <path
                      d="M25.6667 20.25H4.66668C3.50001 20.25 2.33334 21.375 2.33334 22.5V49.5C2.33334 50.625 3.50001 51.75 4.66668 51.75H25.6667C26.8333 51.75 28 50.625 28 49.5V22.5C28 21.375 26.8333 20.25 25.6667 20.25ZM23.3333 43.425L17.9667 36L23.3333 28.575V43.425ZM20.5333 24.75L15.1667 32.175L9.80001 24.75H20.5333ZM7.00001 28.575L12.3667 36L7.00001 43.425V28.575ZM9.80001 47.25L15.1667 39.825L20.5333 47.25H9.80001Z"
                      fill="white"
                    />
                    <path
                      d="M43.1667 26.1C45.7333 26.1 47.6 28.125 47.6 30.375C47.6 32.625 45.5 34.65 43.1667 34.65C40.8333 34.65 38.7333 32.625 38.7333 30.375C38.7333 28.125 40.6 26.1 43.1667 26.1ZM43.1667 20.25C37.3333 20.25 32.6667 24.75 32.6667 30.375C32.6667 36 37.3333 40.5 43.1667 40.5C49 40.5 53.6667 36 53.6667 30.375C53.6667 24.75 49 20.25 43.1667 20.25Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M51.3333 47.25H35C33.6 47.25 32.6667 48.15 32.6667 49.5C32.6667 50.85 33.6 51.75 35 51.75H51.3333C52.7333 51.75 53.6667 50.85 53.6667 49.5C53.6667 48.15 52.7333 47.25 51.3333 47.25Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  Wireframe
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none">
                    <path
                      d="M9.33334 21C5.46 21 2.33334 24.1267 2.33334 28C2.33334 31.8733 5.46 35 9.33334 35C13.2067 35 16.3333 31.8733 16.3333 28C16.3333 24.1267 13.2067 21 9.33334 21ZM9.33334 30.3333C8.05 30.3333 7 29.2833 7 28C7 26.7167 8.05 25.6667 9.33334 25.6667C10.6167 25.6667 11.6667 26.7167 11.6667 28C11.6667 29.2833 10.6167 30.3333 9.33334 30.3333Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M34.4633 29.2833L29.2833 34.4633C28.5833 35.1867 27.4167 35.1867 26.7167 34.4633L21.5367 29.2833C20.8133 28.5833 20.8133 27.4167 21.5367 26.7167L26.7167 21.5367C27.4167 20.8133 28.5833 20.8133 29.2833 21.5367L34.4633 26.7167C35.1867 27.4167 35.1867 28.5833 34.4633 29.2833Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M51.3333 21H42C40.7167 21 39.6667 22.05 39.6667 23.3333V32.6667C39.6667 33.95 40.7167 35 42 35H51.3333C52.6167 35 53.6667 33.95 53.6667 32.6667V23.3333C53.6667 22.05 52.6167 21 51.3333 21ZM49 30.3333H44.3333V25.6667H49V30.3333Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M35.6767 8.63333C35.6767 9.24 35.4667 9.84667 35 10.29L29.6567 15.6567C29.2133 16.0767 28.6533 16.3333 28 16.3333C26.7167 16.3333 25.6667 15.2833 25.6667 14V7H11.6667V16.3333C11.6667 17.6167 10.6167 18.6667 9.33334 18.6667C8.05 18.6667 7 17.6167 7 16.3333V4.66667C7 3.38333 8.05 2.33333 9.33334 2.33333H28C29.2833 2.33333 30.3333 3.38333 30.3333 4.66667V8.37667L31.71 7C32.62 6.09 34.09 6.09 35 7C35.4667 7.46667 35.6767 8.05 35.6767 8.63333Z"
                      fill="white"
                    />
                    <path
                      d="M52.99 45.8267C52.5467 46.27 51.94 46.5033 51.3333 46.5033C50.7267 46.5033 50.12 46.27 49.6767 45.8267L49 45.15V51.3333C49 52.6167 47.95 53.6667 46.6667 53.6667H28C26.7167 53.6667 25.6667 52.6167 25.6667 51.3333V39.6667C25.6667 38.3833 26.7167 37.3333 28 37.3333C29.2833 37.3333 30.3333 38.3833 30.3333 39.6667V49H44.3333V39.6667C44.3333 38.3833 45.3833 37.3333 46.6667 37.3333H46.7367C46.8767 37.3333 47.0167 37.3567 47.1333 37.38C47.6233 37.4267 48.1133 37.66 48.4633 38.01L52.99 42.5367C53.9 43.4467 53.9 44.9167 52.99 45.8267Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  User Flow
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none">
                    <path
                      d="M28 21.0233C24.1266 21.0233 21 24.15 21 28.0233C21 29.0967 21.2566 30.1234 21.6766 31.0333L12.3433 40.3667C11.4333 39.9467 10.4066 39.69 9.33331 39.69C5.45998 39.69 2.33331 42.8167 2.33331 46.69C2.33331 50.5634 5.45998 53.69 9.33331 53.69C13.2066 53.69 16.3333 50.5634 16.3333 46.69C16.3333 45.6167 16.0766 44.59 15.6566 43.68L24.99 34.3467C25.9 34.7667 26.9266 35.0233 28 35.0233C29.7966 35.0233 31.4066 34.3467 32.6433 33.25L39.76 38.5934C39.69 38.9434 39.6666 39.3167 39.6666 39.69C39.6666 43.5634 42.7933 46.69 46.6666 46.69C50.54 46.69 53.6666 43.5634 53.6666 39.69C53.6666 35.8167 50.54 32.69 46.6666 32.69C44.87 32.69 43.26 33.3667 42.0233 34.4634L34.9066 29.12C34.9767 28.77 35 28.3967 35 28.0233C35 24.15 31.8733 21.0233 28 21.0233ZM28 30.3567C26.7166 30.3567 25.6666 29.3067 25.6666 28.0233C25.6666 26.74 26.7166 25.69 28 25.69C29.2833 25.69 30.3333 26.74 30.3333 28.0233C30.3333 29.3067 29.2833 30.3567 28 30.3567ZM46.6666 42.0233C45.3833 42.0233 44.3333 40.9734 44.3333 39.69C44.3333 38.4067 45.3833 37.3567 46.6666 37.3567C47.95 37.3567 49 38.4067 49 39.69C49 40.9734 47.95 42.0233 46.6666 42.0233ZM9.33331 49.0233C8.04998 49.0233 6.99998 47.9734 6.99998 46.69C6.99998 45.4067 8.04998 44.3567 9.33331 44.3567C10.6166 44.3567 11.6666 45.4067 11.6666 46.69C11.6666 47.9734 10.6166 49.0233 9.33331 49.0233Z"
                      fill="white"
                    />
                    <path
                      d="M10.6866 2.35666H4.75998C3.42998 2.35666 2.33331 3.40666 2.33331 4.68999V14.0233C2.33331 15.3067 3.40665 16.3567 4.75998 16.3567H10.71C11.5266 16.3567 12.2733 15.96 12.7166 15.3067L15.9366 10.64C16.4733 9.84666 16.4733 8.84333 15.9366 8.04999L12.7166 3.38333C12.2733 2.73 11.5033 2.33333 10.71 2.33333L10.6866 2.35666ZM6.99998 11.69V7.02333H9.54331L11.1533 9.35666L9.54331 11.69H6.99998Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M29.3533 2.35666H23.4033C22.0733 2.35666 20.9766 3.40666 20.9766 4.68999V14.0233C20.9766 15.3067 22.05 16.3567 23.4033 16.3567H29.3533C30.17 16.3567 30.9166 15.96 31.36 15.3067L34.58 10.64C35.1166 9.84666 35.1166 8.84333 34.58 8.04999L31.36 3.38333C30.9166 2.73 30.1466 2.33333 29.3533 2.33333V2.35666ZM25.6666 11.69V7.02333H28.21L29.82 9.35666L28.21 11.69H25.6666Z"
                      fill="white"
                    />
                    <path
                      d="M48.02 2.35666H42.07C40.74 2.35666 39.6433 3.40666 39.6433 4.68999V14.0233C39.6433 15.3067 40.7167 16.3567 42.07 16.3567H48.02C48.8367 16.3567 49.5833 15.96 50.0266 15.3067L53.2467 10.64C53.7833 9.84666 53.7833 8.84333 53.2467 8.04999L50.0266 3.38333C49.5833 2.73 48.8133 2.33333 48.02 2.33333V2.35666ZM44.3333 11.69V7.02333H46.8766L48.4867 9.35666L46.8766 11.69H44.3333Z"
                      fill="#3266FF"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  Prototype
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none">
                    <path
                      d="M27.6011 2.33333H27.5778C27.1811 2.33333 10.0078 2.45 10.0078 23.2633C10.0078 23.2633 3.42781 30.7067 4.87448 32.62C6.62448 34.9533 10.0078 32.62 10.0078 34.9533C10.0078 37.2867 10.0078 44.31 14.6745 44.31C17.0078 44.31 18.7578 43.7267 19.9245 43.7267C21.0911 43.7267 21.6745 44.31 21.6745 46.6433V53.6667H40.3411V44.3333H35.6745V49H26.3411V46.6433C26.3411 39.5967 21.4411 39.06 19.9245 39.06C19.0378 39.06 18.1978 39.2 17.3811 39.34C16.6811 39.4567 15.9811 39.5967 15.2111 39.62C14.9778 39.06 14.6745 37.7767 14.6745 34.9533C14.6745 34.16 14.4645 30.7533 10.9645 29.54C11.7111 28.5133 12.6211 27.3467 13.5078 26.3433L14.6745 25.0367V23.2633C14.6745 7.93333 25.4078 7.02333 27.5778 7C35.1611 7.07 39.4778 9.82333 41.9045 13.09C42.3478 13.6733 43.0711 14 43.7945 14C45.6145 14 46.7345 11.9467 45.6845 10.4767C42.5811 6.11333 37.1211 2.37999 27.6011 2.33333Z"
                      fill="white"
                    />
                    <path
                      d="M37.4477 16.3333C34.4611 16.3333 31.4744 17.4767 29.1877 19.74C24.6377 24.3133 24.6377 31.6867 29.1877 36.26C31.4744 38.5233 34.4611 39.6667 37.4477 39.6667C39.7111 39.6667 41.9744 39.0133 43.9111 37.73C43.9577 37.8 44.0044 37.8467 44.0511 37.8933L47.3411 41.2067C47.8077 41.6733 48.3911 41.8833 48.9977 41.8833C49.6044 41.8833 50.2111 41.65 50.6544 41.2067C51.5644 40.2967 51.5644 38.8033 50.6544 37.8933L47.3411 34.6033C47.3411 34.6033 47.2477 34.51 47.1777 34.4633C50.1877 29.9367 49.6977 23.7533 45.7077 19.74C43.4211 17.4767 40.4344 16.3333 37.4477 16.3333ZM37.4477 35C35.5811 35 33.8311 34.2767 32.5011 32.9467C31.1711 31.6167 30.4477 29.8667 30.4477 28C30.4477 26.1333 31.1711 24.3833 32.5011 23.0533C33.8311 21.7233 35.5811 21 37.4477 21C39.3144 21 41.0644 21.7233 42.3944 23.0533C43.7244 24.3833 44.4477 26.1333 44.4477 28C44.4477 29.8667 43.7244 31.6167 42.3944 32.9467C41.0644 34.2767 39.3144 35 37.4477 35Z"
                      fill="#3266FF"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  User Research
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                width="130px"
                // border="1px solid red"
              >
                <Box
                  backgroundColor="#332724"
                  borderRadius="50%"
                  width={80}
                  height={80}
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 59 56"
                    fill="none">
                    <path
                      d="M55.1968 29.4952L40.6458 45.849C40.185 46.363 39.506 46.6667 38.8027 46.6667C38.0994 46.6667 37.4204 46.363 36.9596 45.849L25.9008 33.4201L29.102 29.8223L38.8027 40.7326L50.1525 27.9766L38.8027 15.2207L29.102 26.131L25.9008 22.5332L36.9596 10.1043C37.8811 9.07634 39.7243 9.07634 40.6458 10.1043L55.1968 26.4581C55.9729 27.3225 55.9729 28.6308 55.1968 29.4952Z"
                      fill="#3266FF"
                    />
                    <path
                      d="M35.7955 26.4581L21.2445 10.1043C20.3229 9.07634 18.4798 9.07634 17.5582 10.1043L3.00721 26.4581C2.23116 27.3225 2.23116 28.6308 3.00721 29.4952L17.5582 45.849C18.019 46.363 18.6981 46.6667 19.4014 46.6667C20.1047 46.6667 20.7837 46.363 21.2445 45.849L35.7955 29.4952C36.5716 28.6308 36.5716 27.3225 35.7955 26.4581ZM19.4014 40.7326L8.05157 27.9766L19.4014 15.2207L28.6655 25.6404H19.4014C18.0675 25.6404 16.9762 26.6917 16.9762 27.9766C16.9762 29.2616 18.0675 30.3129 19.4014 30.3129H28.6655L19.4014 40.7326Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Typography component="p" fontWeight="700">
                  Art Direction
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            // border="1px solid red"
            marginTop={7}
            item
            xs={12}
            sm={6}>
            <Grid
              // border="1px solid green"
              container
              alignItems="center"
              gap="10px"
              justifyContent="center"
              marginBottom={5}
              item
              xs={12}
              sm={12}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  d="M16 24C13.8244 24 11.6977 23.3549 9.88873 22.1462C8.07979 20.9375 6.66989 19.2195 5.83733 17.2095C5.00477 15.1995 4.78693 12.9878 5.21137 10.854C5.6358 8.72022 6.68345 6.76021 8.22183 5.22183C9.76021 3.68345 11.7202 2.6358 13.854 2.21137C15.9878 1.78693 18.1995 2.00477 20.2095 2.83733C22.2195 3.66989 23.9375 5.07979 25.1462 6.88873C26.3549 8.69767 27 10.8244 27 13C27 15.9174 25.8411 18.7153 23.7782 20.7782C21.7153 22.8411 18.9174 24 16 24ZM16 4.00001C14.22 4.00001 12.4799 4.52785 10.9999 5.51678C9.51983 6.50571 8.36628 7.91132 7.68509 9.55585C7.0039 11.2004 6.82567 13.01 7.17294 14.7558C7.5202 16.5016 8.37737 18.1053 9.63604 19.364C10.8947 20.6226 12.4984 21.4798 14.2442 21.8271C15.99 22.1743 17.7996 21.9961 19.4442 21.3149C21.0887 20.6337 22.4943 19.4802 23.4832 18.0001C24.4722 16.5201 25 14.78 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94822 18.387 4.00001 16 4.00001Z"
                  fill="#304046"
                />
                <path
                  d="M26 30C25.9203 30.0096 25.8397 30.0096 25.76 30L16 27.54L6.24 30C6.09241 30.0375 5.93821 30.0407 5.78917 30.0095C5.64013 29.9783 5.50018 29.9135 5.38 29.82C5.25673 29.7227 5.1581 29.5978 5.09208 29.4554C5.02606 29.3129 4.99452 29.1569 5 29V13C5 12.7348 5.10536 12.4804 5.29289 12.2929C5.48043 12.1054 5.73478 12 6 12C6.26522 12 6.51957 12.1054 6.70711 12.2929C6.89464 12.4804 7 12.7348 7 13V27.72L15 25.72V23C15 22.7348 15.1054 22.4804 15.2929 22.2929C15.4804 22.1054 15.7348 22 16 22C16.2652 22 16.5196 22.1054 16.7071 22.2929C16.8946 22.4804 17 22.7348 17 23V25.74L25 27.74V13C25 12.7348 25.1054 12.4804 25.2929 12.2929C25.4804 12.1054 25.7348 12 26 12C26.2652 12 26.5196 12.1054 26.7071 12.2929C26.8946 12.4804 27 12.7348 27 13V29C27 29.2652 26.8946 29.5196 26.7071 29.7071C26.5196 29.8946 26.2652 30 26 30Z"
                  fill="#304046"
                />
                <path
                  d="M19.72 19.33C19.5597 19.3341 19.4012 19.2961 19.26 19.22L16 17.53L12.78 19.22C12.6149 19.3057 12.4292 19.3435 12.2437 19.3294C12.0582 19.3153 11.8803 19.2497 11.73 19.14C11.5749 19.0289 11.4548 18.8757 11.3839 18.6985C11.313 18.5213 11.2943 18.3275 11.33 18.14L12 14.58L9.37005 12C9.2415 11.8717 9.15032 11.7109 9.10627 11.5347C9.06223 11.3585 9.06699 11.1737 9.12005 11C9.17724 10.8236 9.28235 10.6666 9.42362 10.5466C9.56489 10.4265 9.73677 10.348 9.92005 10.32L13.53 9.80001L15.14 6.53001C15.223 6.3636 15.3507 6.22361 15.5088 6.12576C15.6669 6.02791 15.8491 5.97607 16.035 5.97607C16.221 5.97607 16.4032 6.02791 16.5613 6.12576C16.7194 6.22361 16.8471 6.3636 16.93 6.53001L18.54 9.80001L22.14 10.32C22.334 10.3373 22.5188 10.4108 22.6715 10.5316C22.8243 10.6524 22.9385 10.8152 23 11C23.0531 11.1737 23.0579 11.3585 23.0138 11.5347C22.9698 11.7109 22.8786 11.8717 22.75 12L20.14 14.54L20.76 18.13C20.7834 18.2741 20.775 18.4215 20.7353 18.562C20.6956 18.7024 20.6256 18.8325 20.5304 18.943C20.4351 19.0536 20.3167 19.1419 20.1836 19.2019C20.0506 19.2618 19.906 19.2919 19.76 19.29L19.72 19.33ZM16 15.4C16.1633 15.3977 16.3247 15.4355 16.47 15.51L18.36 16.51L18 14.4C17.9721 14.2393 17.9839 14.0741 18.0345 13.919C18.085 13.7638 18.1728 13.6234 18.29 13.51L19.85 12L17.73 11.69C17.5698 11.6659 17.4179 11.6033 17.2872 11.5075C17.1566 11.4117 17.0512 11.2856 16.98 11.14L16 9.24001L15.06 11.16C14.988 11.3068 14.881 11.4338 14.7485 11.5297C14.616 11.6255 14.462 11.6875 14.3 11.71L12.22 12L13.75 13.49C13.8673 13.6034 13.9551 13.7438 14.0056 13.899C14.0562 14.0541 14.068 14.2193 14.04 14.38L13.67 16.49L15.57 15.49C15.704 15.4257 15.8515 15.3948 16 15.4Z"
                  fill="#304046"
                />
              </svg>
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="30px"
                fontWeight="700"
                color="#000000">
                {" "}
                Certification
              </Typography>
            </Grid>
            <Grid marginBottom={10}>
              <Grid
                className="gap"
                container
                marginBottom={3}
                justifyContent="center"
                // gap="5px"
                item
                xs={12}
                sm={12}>
                <Grid
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="160px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="20px"
                    fontWeight="700"
                    color="#4F4F4F">
                    UI/UX Designer
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    marginLeft="1px">
                    Code Academy
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="182px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="20px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Jan 2018 - Jul 2018
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              // border="1px solid black"
              alignItems="center"
              item
              xs={12}
              sm={12}>
              <Grid
                container
                marginBottom={3}
                justifyContent="space-around"
                item
                xs={12}
                sm={12}>
                <Grid
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="232px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="700"
                    color="#4F4F4F">
                    Graphic Design Masterclass
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="14px">
                    Udemy
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="95px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Feb 26, 2023
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={3}
                justifyContent="space-around"
                item
                xs={12}
                sm={12}>
                <Grid
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="232px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="700"
                    color="#4F4F4F">
                    Principles of UX/UI Design
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="14px">
                    Meta
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="95px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Dec 11, 2022
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={3}
                justifyContent="space-around"
                item
                xs={12}
                sm={12}>
                <Grid
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="232px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="700"
                    color="#4F4F4F">
                    Figma for UX Design
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="14px">
                    Linkedin
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="95px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Oct 2, 2022
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={3}
                justifyContent="space-around"
                item
                xs={12}
                sm={12}>
                <Grid
                  className="max-width"
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="232px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="700"
                    color="#4F4F4F">
                    Getting Started in User Experience
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="14px">
                    Linkedin
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="95px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Oct 22, 2022
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                marginBottom={3}
                justifyContent="space-around"
                item
                xs={12}
                sm={12}>
                <Grid
                  item
                  sm={5}
                  display="flex"
                  direction="column"
                  minWidth="232px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="700"
                    color="#4F4F4F">
                    Foundations of UX Design
                  </Typography>
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="14px">
                    Google
                  </Typography>
                </Grid>
                <Grid item sm={2} minWidth="95px">
                  <Typography
                    component="p"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontWeight="500"
                    fontStyle="italic"
                    color="#828282">
                    Nov 18, 2022
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
