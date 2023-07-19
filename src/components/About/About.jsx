import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./styled.css";

const About = () => {
  return (
    <Grid
      className="no_margin"
      container
      marginTop="60px"
      position="relative"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      // border="1px solid #000000"
    >
      <Grid
        container
        flexDirection="column"
        alignContent="center"
        position="relative"
        // border="1px solid #fb0505"
      >
        <Grid
          container
          maxWidth={1200}
          justifyContent="center"
          gap="50px"
          padding="5px">
          <Grid item xs={12} sm={8}>
            <Typography
              className="font_size"
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
              With over a decade of experience I likely worked on a wide range
              of projects and has developed a strong understanding of user needs
              and design principles. I have experience working on projects
              across multiple platforms, such as web, mobile and desktop
              applications.
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
                position: "relative",
                zIndex: "1",
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
      <Grid
        container
        maxWidth={1200}
        justifyContent="center"
        gap="50px"
        padding="5px"
        marginTop="100px"
        // border="1px solid #fb0505"
      >
        <Grid container item xs={12} sm={12}>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              marginBottom="60px">
              <Typography
                component="p"
                fontFamily="Poppins"
                fontWeight="700"
                fontSize="20px"
                marginRight="10px">
                01
              </Typography>
              <Box
                className="line"
                width="400px"
                height="1px"
                backgroundColor="#B0B0B0"></Box>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#7BDFFE",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginLeft: "10px",
                  // border: "2px solid white",
                }}>
                <ArrowForwardIcon sx={{ color: "#212121" }} />
              </Box>
              <Grid className="padding" padding="0px 38px">
                <Typography
                  component="p"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="24px">
                  UX/UI Design
                </Typography>
                <Grid
                  container
                  gap="10px"
                  alignItems="center"
                  paddingTop="10px">
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Web Design
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    App Design
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Creativity
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              marginBottom="60px">
              <Typography
                component="p"
                fontFamily="Poppins"
                fontWeight="700"
                fontSize="20px"
                marginRight="10px">
                02
              </Typography>
              <Box
                className="line"
                width="400px"
                height="1px"
                backgroundColor="#B0B0B0"></Box>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#7BDFFE",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginLeft: "10px",
                  // border: "2px solid white",
                }}>
                <ArrowForwardIcon sx={{ color: "#212121" }} />
              </Box>
              <Grid className="padding" padding="0px 38px">
                <Typography
                  component="p"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="24px">
                  Graphic Design
                </Typography>
                <Grid
                  container
                  gap="10px"
                  alignItems="center"
                  paddingTop="10px">
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Illustration
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Typography
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Motion Graphic
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              marginBottom="60px">
              <Typography
                component="p"
                fontFamily="Poppins"
                fontWeight="700"
                fontSize="20px"
                marginRight="10px">
                03
              </Typography>
              <Box
                className="line"
                width="400px"
                height="1px"
                backgroundColor="#B0B0B0"></Box>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#7BDFFE",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginLeft: "10px",
                  // border: "2px solid white",
                }}>
                <ArrowForwardIcon sx={{ color: "#212121" }} />
              </Box>
              <Grid className="padding" padding="0px 38px">
                <Typography
                  component="p"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="24px">
                  Development
                </Typography>
                <Grid
                  container
                  gap="10px"
                  alignItems="center"
                  paddingTop="10px">
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Web Design
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    App Design
                  </Typography>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#DCFDE4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                      // marginLeft: "10px",
                      // border: "2px solid white",
                    }}>
                    <ArrowForwardIcon
                      sx={{ color: "#212121", fontSize: "13px" }}
                    />
                  </Box>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="14px">
                    Dashboard Design
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container flexDirection="column" item xs={12} sm={6} gap="40px">
            <Typography
              className="font_size"
              component="p"
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="36px">
              Solving problems by the{" "}
              <strong
                className="font__size"
                style={{
                  color: "#33D77D",
                  fontFamily: "Kavoon",
                  fontWeight: "400",
                }}>
                services
              </strong>
            </Typography>
            <Typography
              className="padding"
              component="p"
              fontFamily="Poppins"
              color="#9D9291"
              paddingRight="150px"
              fontSize="20px">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </Typography>
            <Grid container gap="15px">
              <Typography
                component="p"
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="700">
                Follow me on:
              </Typography>
              <Grid container gap="20px" paddingLeft="10px">
                <a href="https://www.behance.net/aliyarov">
                  <Button
                    variant="contained"
                    sx={{
                      width: "40px",
                      minWidth: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      backgroundColor: "#EDEDED",
                      boxShadow: "none",
                      overflow: "hidden",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#959595",
                        boxShadow: "none",
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="16"
                      viewBox="0 0 26 16"
                      fill="none">
                      <path
                        d="M22.4215 2.50451C22.194 2.73096 21.7035 2.56295 21.3289 2.56817C20.6788 2.5786 20.0276 2.5713 19.3764 2.5713C18.4529 2.5713 17.5283 2.56399 16.6048 2.57652C16.3491 2.57965 16.2135 2.53269 16.2437 2.23946C16.2855 1.84291 16.0778 1.32427 16.3303 1.078C16.563 0.852593 17.0744 1.01747 17.4615 1.01643C19.0101 1.01016 20.5598 1.01956 22.1084 1.00912C22.3891 1.00703 22.5498 1.04461 22.507 1.37958C22.458 1.76256 22.6667 2.26032 22.4215 2.50451Z"
                        fill="black"
                      />
                      <path
                        d="M24.8435 8.36079C24.136 5.19678 21.0095 3.22136 17.9895 4.05619C13.7392 5.22913 12.4337 10.5773 15.221 13.7757C16.8187 15.6082 18.8932 15.9671 21.164 15.4266C22.8868 15.0175 24.0441 13.9458 24.6337 12.2647C24.7422 11.9537 24.6671 11.8838 24.3582 11.8942C23.7728 11.914 23.1863 11.9161 22.602 11.8932C22.2753 11.8806 22.0697 11.9693 21.8694 12.2532C21.1859 13.2258 19.9493 13.6192 18.7826 13.2852C17.7078 12.9774 17.0263 12.1113 16.9168 10.9425C16.8907 10.6628 16.946 10.5522 17.2601 10.5574C18.4821 10.5752 19.7051 10.5647 20.9281 10.5647C22.1511 10.5647 23.4003 10.5564 24.6358 10.57C24.905 10.5731 24.9979 10.4917 25.0021 10.2214C25.0115 9.59529 24.9802 8.97439 24.8435 8.36079ZM21.6179 8.60498C20.8759 8.59767 20.135 8.60184 19.3931 8.60184C18.6511 8.60184 17.9352 8.59454 17.2069 8.60706C16.9721 8.61123 16.922 8.53506 16.9606 8.31487C17.1703 7.11271 18.2473 6.1798 19.4139 6.19962C20.6015 6.21945 21.6325 7.1555 21.8245 8.36496C21.8569 8.57263 21.8026 8.60706 21.6179 8.60498Z"
                        fill="black"
                      />
                      <path
                        d="M12.7854 10.0493C12.7072 9.12783 12.2595 8.4057 11.5551 7.82654C11.1231 7.47069 10.6264 7.22651 10.0722 6.98754C10.2298 6.89257 10.3467 6.81639 10.4677 6.74856C12.5193 5.61423 12.8814 1.97124 10.4542 0.665778C9.70909 0.264016 8.92122 0.0135635 8.07282 0.0104328C5.49633 0.00208453 2.91983 0.0114789 0.344379 0C0.0688853 0 -0.00103208 0.0761801 1.14566e-05 0.3475C0.00731623 5.24065 0.00731623 10.1328 1.14566e-05 15.0259C-0.00103208 15.3014 0.0803645 15.3734 0.349597 15.3724C2.70486 15.363 5.06013 15.3682 7.41539 15.3661C8.97131 15.3661 10.401 14.9925 11.6031 13.9469C12.2042 13.4241 12.583 12.775 12.7343 11.9934C12.8585 11.3485 12.8407 10.6984 12.7854 10.0493ZM3.66909 2.65581C4.242 2.66729 4.8149 2.65893 5.50781 2.65893C6.0734 2.70172 6.76631 2.58067 7.44879 2.73094C8.39319 2.93965 8.91287 3.55951 8.89513 4.44547C8.87635 5.32935 8.32953 5.94608 7.38618 6.10574C6.45638 6.26332 5.5172 6.14748 4.58219 6.17566C4.27017 6.18609 3.95711 6.16731 3.64509 6.18088C3.43847 6.18922 3.37586 6.10992 3.37794 5.90851C3.38525 4.92028 3.38629 3.93101 3.3769 2.94278C3.37481 2.71738 3.45204 2.65059 3.66909 2.65581ZM9.46386 10.9926C9.35638 11.9777 8.49546 12.6853 7.29643 12.7395C6.68596 12.7667 6.07341 12.7447 5.46294 12.7447C5.46294 12.7468 5.46189 12.7489 5.46189 12.751C4.86394 12.751 4.26495 12.7426 3.667 12.7552C3.44682 12.7593 3.37481 12.6894 3.3769 12.4672C3.38525 11.2577 3.38316 10.0472 3.37794 8.83773C3.37794 8.64885 3.42073 8.54658 3.6357 8.5518C4.93595 8.58206 6.23933 8.47144 7.53436 8.60919C8.892 8.7532 9.60891 9.66839 9.46386 10.9926Z"
                        fill="black"
                      />
                    </svg>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/elnuraliyarov/">
                  <Button
                    variant="contained"
                    sx={{
                      width: "0px",
                      minWidth: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      backgroundColor: "#EDEDED",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#959595",
                        boxShadow: "none",
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none">
                      <path
                        d="M6.81158 3.43375C6.78758 5.3466 5.27023 6.82742 3.35424 6.8076C1.48626 6.78881 -0.021679 5.23912 0.000235876 3.3607C0.0231943 1.47706 1.5854 -0.0288017 3.48678 0.000418146C5.33598 0.0285944 6.83454 1.5762 6.81158 3.43375Z"
                        fill="black"
                      />
                      <path
                        d="M6.05291 24.0026C6.05187 24.6913 5.73044 24.995 5.03856 24.996C3.9449 24.9992 2.8523 24.9992 1.75864 24.996C1.0918 24.994 0.775596 24.6809 0.774553 24.0161C0.771422 21.5439 0.773508 19.0717 0.773508 16.5985C0.773508 14.1252 0.773508 11.7323 0.773508 9.29873C0.774552 8.54841 1.06153 8.25099 1.80455 8.24786C2.88464 8.2416 3.96474 8.2416 5.04483 8.24786C5.74402 8.25203 6.05291 8.55154 6.05291 9.24551C6.05709 14.1649 6.05709 19.0842 6.05291 24.0026Z"
                        fill="black"
                      />
                      <path
                        d="M24.8329 24.035C24.8329 24.7039 24.5491 24.9888 23.8843 24.9898C22.7134 24.993 21.5415 24.993 20.3706 24.9898C19.6944 24.9888 19.421 24.7217 19.421 24.0433C19.4189 21.6358 19.422 19.2283 19.4251 16.8208C19.4262 15.9734 19.4095 15.1292 19.1361 14.3142C18.8105 13.3437 18.1844 12.7133 17.1408 12.5766C16.0002 12.4264 15.0516 12.752 14.415 13.759C13.9068 14.5625 13.7075 15.4579 13.7054 16.3982C13.7002 18.8975 13.7043 21.3958 13.7033 23.8941C13.7033 24.7717 13.4747 24.9972 12.5908 24.9972C11.5107 24.9972 10.4307 24.9992 9.35057 24.9961C8.72861 24.994 8.43327 24.706 8.43223 24.0945C8.43014 19.1094 8.43014 14.1253 8.43223 9.14122C8.43327 8.54012 8.71504 8.2594 9.32135 8.25627C10.4922 8.25001 11.6642 8.25001 12.835 8.25627C13.4299 8.2594 13.7064 8.54534 13.72 9.15165C13.7273 9.48872 13.721 9.82684 13.721 10.2516C14.0341 9.90719 14.2678 9.615 14.5371 9.35932C15.5587 8.38985 16.8298 8.07991 18.1854 8.0079C19.0349 7.96303 19.877 8.01938 20.6993 8.24479C22.8293 8.82815 23.9229 10.3538 24.4395 12.393C24.7192 13.496 24.811 14.6262 24.8193 15.7585C24.8381 18.5166 24.8319 21.2758 24.8329 24.035Z"
                        fill="black"
                      />
                    </svg>
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
