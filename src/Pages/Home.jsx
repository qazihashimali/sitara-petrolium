import React from "react";
import Hero from "../Components/Hero";
import CoreBusiness from "../Components/CoreBusiness";
import UpcomingProjects from "../Components/UpcomingProjects";
import Banner from "../Components/Banner";
import FAQts from "../Components/FAQts";
import EnvironmentalProtection from "../Components/EnvironmentalProtection";

const Home = () => {
  return (
    <>
      <Hero />
      <CoreBusiness />
      <UpcomingProjects />
      <Banner />
      <FAQts />
      {/* <EnvironmentalProtection /> */}
    </>
  );
};

export default Home;
