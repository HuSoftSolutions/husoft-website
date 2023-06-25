import Image from "next/image";
import { Fragment } from "react";

const images = [
  { src: "/images/worked_with/foxrun.png", alt: "Fox Run Golf Club" },
  { src: "/images/worked_with/thebunker.png", alt: "The Bunker" },
  { src: "/images/worked_with/lettermenlogo.png", alt: "Lettermen Foundation" },
  { src: "/images/worked_with/simgolf-llc.png", alt: "SimGolf" },
  { src: "/images/worked_with/ron_schur_logo.png", alt: "Ron Schur Law" },
  { src: "/images/worked_with/pioneer_hills.png", alt: "Pioneer Hills" },
  { src: "/images/worked_with/orchard_creek.png", alt: "Orchard Creek" },
  { src: "/images/worked_with/tigergraph.png", alt: "Tiger Graph" },
  { src: "/images/worked_with/hillside.png", alt: "Hillside" },
  { src: "/images/worked_with/ttc_logo.png", alt: "Trust The Cut" },
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
