import Image from "next/image";
import { Fragment } from "react";

const images = [
  { src: "/images/worked_with/foxrun.png", alt: "Company 1" },
  { src: "/images/worked_with/thebunker.png", alt: "Company 2" },
  { src: "/images/worked_with/lettermenlogo.png", alt: "Company 3" },
  { src: "/images/worked_with/simgolf-llc.png", alt: "Company 4" },
  { src: "/images/worked_with/ron_schur_logo.png", alt: "Company 5" },
  { src: "/images/worked_with/pioneer_hills.png", alt: "Company 6" },
  { src: "/images/worked_with/orchard_creek.png", alt: "Company 7" },
  { src: "/images/worked_with/tigergraph.png", alt: "Company 8" },
  { src: "/images/worked_with/hillside.png", alt: "Company 9" },
];

export default function ClientLogos() {
  return (
    <Fragment>
      <div className="flex flex-wrap justify-center w-full items-center ">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-32 mx-10 rounded-md hover:scale-125 transition-all"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={120} // Adjust width and height according to your requirements
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
