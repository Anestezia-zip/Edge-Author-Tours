import React from "react";
import Hero from "./hero-section/Hero";
import GalleryCards from "./GalleryCards";
import About from "./About";
import AboutUs from "./AboutUs";
import FloatingImage from "./FloatingImage";
import FAQs from "./FAQs";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <About />
      <GalleryCards />
      <FloatingImage />
      <FAQs />
      <Footer />
    </div>
  );
};

export default HomePage;
