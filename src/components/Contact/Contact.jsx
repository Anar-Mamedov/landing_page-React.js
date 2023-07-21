import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../About/styled.css";

const Contact = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      paddingTop="100px"
      className="paddingl-25px">
      <Grid
        container
        maxWidth={1200}
        justifyContent="space-evenly"
        alignItems="flex-start"
        gap="60px"
        padding="5px">
        <Grid
          item
          xs={12}
          sm={5}
          maxWidth={500}
          minWidth={300}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="20px">
          <TextField
            id="name"
            label="Your Name"
            type="text" // Set the type to "text" for name input
            variant="outlined"
            fullWidth
          />
          <TextField
            id="email"
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="note"
            label="Project Detail"
            multiline // Set the multiline prop to enable multiline input
            rows={4} // Set the number of rows you want to display
            variant="outlined"
            fullWidth
          />
          <Button
            href=""
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
              marginRight: "auto",
              "&:hover": {
                backgroundColor: "#7BDFFE",
                boxShadow: "none",
              },
            }}>
            <Typography component="p" fontFamily="Poppins" fontWeight="500">
              Send Message
            </Typography>
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
          item
          xs={12}
          sm={5}
          maxWidth={500}
          minWidth={300}
          display="flex"
          flexDirection="column"
          gap="35px">
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#000000"
            fontSize="33px"
            fontWeight="700">
            Let’s{" "}
            <strong
              className="font__size"
              style={{
                color: "#33D77D",
                fontFamily: "Kavoon",
                fontWeight: "400",
              }}>
              talk{" "}
            </strong>
            for something speacial
          </Typography>
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#9D9291"
            fontSize="20px"
            fontWeight="400">
            I am always excited to take on new challenges and collaborate with
            forward-thinking individuals and companies.
          </Typography>
          <Typography
            component="p"
            fontFamily="Poppins"
            color="#33D77D"
            fontSize="20px"
            fontWeight="700">
            aliyarovelnur1@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
