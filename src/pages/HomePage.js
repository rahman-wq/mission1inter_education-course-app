// src/pages/HomePage.js
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import CoursesSection from "../components/CoursesSection";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProgramsSection />
      <CoursesSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
