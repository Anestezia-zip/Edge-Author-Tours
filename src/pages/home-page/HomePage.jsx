import React from "react";
import Hero from "./Hero";
import GalleryCards from "./GalleryCards";
import About from "./About";
import AboutUs from "./AboutUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <About />
      <GalleryCards />
    </div>
  );
};

export default HomePage;
