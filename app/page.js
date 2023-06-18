/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";

import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import ContactUs from "./components/ContactUs";
import dynamic from "next/dynamic";

const DynamicParticles = dynamic(() => import("../app/Particles"), {
  ssr: false,
});

import IntroSection from "./components/IntroSection";
import CompaniesSection from "./components/CompaniesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";

const IndexPage = () => {
  return (
    <div className="bg-gray-300 flex flex-col min-h-screen w-screen">
      <Header />

      <main className="flex flex-col items-start justify-center">
        <IntroSection />
        <CompaniesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
