import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Grid, Typography } from "@mui/material";

export default function App() {
  const gradientBackground =
    "linear-gradient(180deg, rgba(44, 228, 240, 0.36) 25.52%, rgba(3, 237, 144, 0.36) 100%)";

  return (
    <>
      <Swiper
        slidesPerView={2.15}
        spaceBetween={10}
        pagination={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2.15,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.15,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2.15,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Grid
            maxWidth={600}
            minWidth={300}
            backgroundColor="#F7FAFC"
            padding="30px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Typography
              fontFamily="Poppins"
              fontSize="13px"
              fontWeight="500"
              color="rgba(0, 0, 0, 0.48)">
              ‘’ What sets Elnur apart is his holistic approach to design. He
              possesses a deep empathy for users, conducting thorough research
              and user testing to gain insights into their behaviors,
              preferences, and pain points. This user-centric mindset allows him
              to create solutions that truly address user needs, ensuring that
              every interaction is intuitive and enjoyable.
              <br /> Elnur consistently goes above and beyond in pursuit of
              excellence. He stays updated on the latest design trends, tools,
              and technologies, demonstrating a genuine passion for continuous
              learning and improvement. His enthusiasm, adaptability, and
              ability to thrive in fast-paced environments make them an asset to
              any design team’’
            </Typography>
            <Typography
              fontSize="14px"
              borderRadius="99px"
              padding="20px"
              marginTop="20px"
              height="60px"
              maxwidth="345px"
              minWidth="340px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              fontFamily="Poppins"
              fontWeight="700"
              sx={{
                backgroundImage: gradientBackground,
              }}>
              Ilkina Ganbarova
              <br /> UX/Visual Designer
              <br /> Amazon ( AWS )
            </Typography>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            maxWidth={600}
            minWidth={300}
            backgroundColor="#F7FAFC"
            padding="30px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Typography
              fontFamily="Poppins"
              fontSize="13px"
              fontWeight="500"
              color="rgba(0, 0, 0, 0.48)">
              ‘’ Throughout our collaboration, Elnur has showcased an impressive
              skill set, including proficiency in industry-standard design
              software and tools. He has a remarkable ability to effectively
              communicate and collaborate with cross-functional teams, allowing
              for seamless integration of design concepts into broader project
              objectives. Additionally, Elnur consistently meets deadlines and
              delivers high-quality work under demanding circumstances. Based on
              Elnur's impressive portfolio and professional demeanor, I have no
              doubt that he will continue to excel in his career. I
              wholeheartedly recommend Elnur for any UX/UI and visual design
              positions or project and believe he would be a valuable asset to
              any organization’’
            </Typography>
            <Typography
              fontSize="14px"
              borderRadius="99px"
              padding="20px"
              marginTop="20px"
              height="60px"
              maxwidth="345px"
              minWidth="340px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              fontFamily="Poppins"
              fontWeight="700"
              sx={{
                backgroundImage: gradientBackground,
              }}>
              MIkayil Gasimov
              <br /> Lead Network Security Engineer
              <br /> Zoom
            </Typography>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            maxWidth={600}
            minWidth={300}
            backgroundColor="#F7FAFC"
            padding="30px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Typography
              fontFamily="Poppins"
              fontSize="13px"
              fontWeight="500"
              color="rgba(0, 0, 0, 0.48)">
              ‘’ Elnur consistently demonstrates a deep understanding of design
              principles, aesthetics, and user experience. He possesses a keen
              eye for detail and a strong ability to transform conceptual ideas
              into visually stunning and impactful designs. His work
              consistently exceeds expectations and is characterized by
              creativity, innovation, and a meticulous attention to detail.
              Elnur is not only highly skilled technically but also possesses a
              strong understanding of business objectives. He consistently
              considers the broader strategic goals of the organization while
              designing user interfaces, ensuring that his designs align with
              the overall brand and business vision’’
            </Typography>
            <Typography
              fontSize="14px"
              borderRadius="99px"
              padding="20px"
              marginTop="20px"
              height="60px"
              maxwidth="345px"
              minWidth="340px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              fontFamily="Poppins"
              fontWeight="700"
              sx={{
                backgroundImage: gradientBackground,
              }}>
              Ruslan Babayev
              <br /> Pergoroof / Co-founder, Recruiter & Operations
              <br /> Manager
            </Typography>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
