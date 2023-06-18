/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollingImages from "./ClientLogos";
import ClientLogos from "./ClientLogos";

const CompaniesSection = () => {
  const images = [
    { src: "/images/foxrun.png", alt: "Company 1" },
    { src: "/images/thebunker.png", alt: "Company 2" },
    { src: "/images/lettermenlogo.png", alt: "Company 3" },
    { src: "/images/simgolf-llc.png", alt: "Company 4" },
  ];

  const [carouselImages, setCarouselImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImages((prevImages) => {
        const firstImage = prevImages[0];
        const restImages = prevImages.slice(1);
        return [...restImages, firstImage];
      });
    }, 2000); // adjust this interval for speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full from-gray-300 bg-gradient-to-b to-white bg-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] flex text-center justify-center items-center mb-4 sm:mb-8">
        Companies We've Helped Grow
      </h2>
      <div className=" py-6 flex flex-col justify-center sm:py-12">
        <ClientLogos images={images} />
      </div>
    </section>
  );
};

export default CompaniesSection;
