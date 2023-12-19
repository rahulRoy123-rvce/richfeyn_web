import React from "react";
import Utility from "../individual/Utility";
import Features from "../individual/Features";
import AboutUs from "./AboutUs";
import Banner from "../individual/Banner";
import Works from "../individual/Works";
import Floatt from "../individual/floatt";


const Home = () => {
  return (
    <div className="min-w-full bg-black">
      <Banner />
      {/* <Utility /> */}
      {/* <Works /> */}
      <AboutUs />
      <Features />
      <Floatt/>
    </div>
  );
};

export default Home;
