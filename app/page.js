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

const IndexPage = () => {
  return (
    <div className="bg-gray-300 flex flex-col min-h-screen w-screen">
      <Header />

      <main className="flex flex-col items-start justify-center">
        <div className="h-screen flex flex-col items-start justify-center w-screen">
          <DynamicParticles />

          <section className="w-fit bg-slate-500 bg-opacity-20 p-8 sm:p-16 flex flex-col xl:flex-row items-left justify-end xl:items-center max-w-[75%]">
            <h1 className="font-orbitron text-4xl sm:text-6xl font-semibold text-[#1F2937] mb-4 sm:mb-8 xl:mb-0 xl:mr-4 2xl:text-[150px]">
              HUSOFT
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600">
              We provide cutting-edge technology solutions and innovative
              software services, empowering businesses to thrive.
            </p>
          </section>
        </div>

        <section className="w-full from-gray-300 bg-gradient-to-b  to-white p-8 sm:p-16 ">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8">
            Companies We've Worked With
          </h2>
          <div className="flex flex-wrap justify-center pt-10">
            {/* Render company logos or names */}
            <div className="h-24 md:h-32 2xl:h-40 w-fit mx-4 my-4 p-3">
              <img
                src="/foxrun.png"
                alt="Company 1"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="h-24 md:h-32 2xl:h-40 w-fit mx-4 my-4 p-3">
              <img
                src="/thebunker.png"
                alt="Company 2"
                className="w-full h-full"
              />
            </div>
            <div className="h-24 md:h-32 2xl:h-40 w-fit mx-4 my-4 p-3">
              <img
                src="/lettermenlogo.png"
                alt="Company 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-24 md:h-32 2xl:h-40 w-fit mx-4 my-4 p-3">
              <img
                src="/simgolf-llc.png"
                alt="Company 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-white p-8 sm:p-16">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8">
            Projects Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Render project cards */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum ex sed tortor dignissim, in egestas lorem
                fringilla.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum ex sed tortor dignissim, in egestas lorem
                fringilla.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum ex sed tortor dignissim, in egestas lorem
                fringilla.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-900 text-white p-8 sm:p-16">
          <h2 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Render testimonial cards */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg text-gray-300">
                HUSOFT's expertise and innovative solutions have greatly helped
                our business grow. Their team is highly professional,
                responsive, and a pleasure to work with.
              </p>
              <p className="text-gray-500 mt-4">
                - John Doe, CEO of ABC Company
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg text-gray-300">
                Working with HUSOFT has been a game-changer for our
                organization. Their software solutions have streamlined our
                operations and improved our efficiency.
              </p>
              <p className="text-gray-500 mt-4">
                - Jane Smith, CTO of XYZ Inc.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg text-gray-300">
                We are extremely satisfied with the services provided by HUSOFT.
                Their technical expertise and attention to detail have exceeded
                our expectations.
              </p>
              <p className="text-gray-500 mt-4">
                - Michael Johnson, COO of Acme Corp
              </p>
            </div>
          </div>
        </section>

        {/* Add more sections as needed */}
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
