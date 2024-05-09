import React from "react";
import Header, { HeroSection, FAQs, Footer } from "../components/Home/Home.components";
import "../components/Home/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer" >
        <HeroSection />
        <FAQs />
      <Footer />
      </div>

    </>
  );
};

export default Home;
