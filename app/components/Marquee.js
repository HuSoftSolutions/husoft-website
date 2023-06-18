// Marquee.js
import React from "react";
import Image from "next/image";

const images = [
  { src: "/images/foxrun.png", alt: "Company 1" },
  { src: "/images/thebunker.png", alt: "Company 2" },
  { src: "/images/lettermenlogo.png", alt: "Company 3" },
  { src: "/images/simgolf-llc.png", alt: "Company 4" },
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {images.map((image, index) => (
          <div key={index} className="marquee__image">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <div className="marquee__track marquee__track--duplicate">
        {images.map((image, index) => (
          <div key={index} className="marquee__image">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
