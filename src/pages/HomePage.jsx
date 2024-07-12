import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedSections from "../components/FeaturedSections";

const HomePage = () => {
  return (
    <div className="bg-[#fafafa]  min-h-screen w-full flex flex-col justify-between items-center">
      {/* HEADER START */}
      {/* Header end */}

      <Hero />
      <FeaturedSections />
    </div>
  );
};

export default HomePage;
