/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";

import ClientLogos from "./ClientLogos";
import PartnerLogos from "./PartnerLogos";

const CompaniesSection = () => {
  return (
    <section className="w-full from-gray-300 bg-gradient-to-b to-white bg-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] flex text-center justify-center items-center mb-4 sm:mb-8">
        Companies We've Helped Grow
      </h2>
      <div className="py-6 flex flex-col justify-center ">
        <ClientLogos />
      </div>
    </section>
  );
};

export default CompaniesSection;
