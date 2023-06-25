import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    name: "Concept",
    png: "/images/software/lightbulb.png",
    color: "bg-gray-50",
  },
  {
    id: 2,
    name: "Design",
    png: "/images/software/design.png",
    color: "bg-gray-100",
  },
  {
    id: 3,
    name: "Development",
    png: "/images/software/coding.png",
    color: "bg-gray-200",
  },
  {
    id: 4,
    name: "Testing",
    png: "/images/software/test.png",
    color: "bg-gray-300",
  },
  {
    id: 5,
    name: "Deployment",
    png: "/images/software/shuttle.png",
    color: "bg-gray-400",
  },
  {
    id: 6,
    name: "Maintenance",
    png: "/images/software/wrench.png",
    color: "bg-gray-500",
  },
];

export default function SoftwareDeliveryProcess() {
  return (
    <div
      id="process"
      className="flex flex-col items-center justify-center py-16 w-full bg-white"
    >
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8 text-center">
        Software Development Process
      </h2>
      <div className="flex flex-wrap justify-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center m-4 p-5 ${step.color} bg-opacity-100 text-slate-900 rounded-xl shadow-lg w-64 transition-transform transform hover:scale-105`}
          >
            <Image
              src={step.png}
              width={100}
              height={100}
              alt={step.name}
              className="h-24 w-24"
            />
            <h2 className="mt-4 text-2xl font-semibold ">{step.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
