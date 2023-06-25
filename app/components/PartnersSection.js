/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";

import PartnerLogos from "./PartnerLogos";

const PartnersSection = () => {
  return (
    <section className="w-full text-white bg-slate-900 p-8 sm:px-16 sm:py-8 items-center flex justify-around ">
      <div className="flex flex-col justify-center">
        <PartnerLogos />
      </div>{" "}
      <h2 className="text-3xl sm:text-5xl font-semibold flex text-center justify-center items-center mb-0 sm:mb-0">
        Our Partners
      </h2>
    </section>
  );
};

export default PartnersSection;
