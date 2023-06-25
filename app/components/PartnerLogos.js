import Image from "next/image";
import { Fragment } from "react";

const images = [
  { src: "/images/worked_with/kb3_logo_new.png", alt: "KB3 Industries" },
  {
    src: "/images/worked_with/merchant-preferred.png",
    alt: "Merchant Preferred",
  },
];

export default function PartnerLogos() {
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
