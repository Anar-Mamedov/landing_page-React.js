import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  return (
    <Grid
      container
      marginTop="60px"
      flexDirection="column"
      alignContent="center"
      position="relative">
      <Grid
        container
        maxWidth={1200}
        justifyContent="center"
        gap="50px"
        padding="5px">
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            textAlign="center"
            fontFamily="Poppins">
            <strong>I like to make a simple and elegant design</strong>
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} gap="20px">
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#9D9291"
            fontSize="18px">
            Hello, I'm Elnur an experienced visual designer with a passion for
            creating captivating and meaningful design experiences.
          </Typography>
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#9D9291"
            fontSize="18px">
            With over a decade of experience I likely worked on a wide range of
            projects and has developed a strong understanding of user needs and
            design principles. I have experience working on projects across
            multiple platforms, such as web, mobile and desktop applications.
          </Typography>
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#9D9291"
            fontSize="18px">
            Overall, I am extensive experience in Ui/UX design makes them a
            valuable asset to any team or project that requires intuitive and
            user-friendly interfaces.
          </Typography>
        </Grid>
        <Grid>
          <Button
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
              "&:hover": {
                backgroundColor: "#7BDFFE",
                boxShadow: "none",
              },
            }}>
            <strong>See Resume</strong>
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
      </Grid>
      <Box
        position="absolute"
        bottom="-50px"
        width="0"
        height="0"
        borderTop="100px solid transparent"
        borderBottom="100px solid transparent"
        borderLeft="100px solid #DCFDE4"></Box>
      <Box
        position="absolute"
        right="0"
        bottom="-50px"
        width="0"
        height="0"
        borderTop="100px solid transparent"
        borderBottom="100px solid transparent"
        borderRight="100px solid #BCEEFF"></Box>
    </Grid>
  );
};

export default About;
