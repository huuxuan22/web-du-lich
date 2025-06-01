import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PopularTours from "../component/PopularTour";
import UuDai from "../component/UuDai";
import HotelGridMUI from "../component/HotelGridMUI";
import LuxuryVillaComponent from "../component/LuxuryImageComponent";
import EventStatus from "../component/EventStatus";
import { Box } from "@mui/material";
import VietnamTravelBlog from "../component/VietnamTravelBlog";
const HomePage = () => {
  return (
    <div>
      <Box mb={1}>
        <Header />
      </Box>

      <Box my={1}>
        <LuxuryVillaComponent />
      </Box>

      <Box my={5}>
        <PopularTours />
      </Box>
      
      {/* <Box my={5}>
        <LuxuryTravelBlog />
      </Box> */}
      <Box my={5}>
        <EventStatus />
      </Box>
{/* 
      <Box my={5}>
        <CustomerTestimonials />
      </Box> */}
      <Box my={5}>
        <UuDai />
      </Box>
      <Box my={5}>
        <VietnamTravelBlog />
      </Box>

      <Box my={5}>
        <HotelGridMUI />
      </Box>

      <Footer />
    </div>
  );
};

export default HomePage;
