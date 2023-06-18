import dynamic from "next/dynamic";
const DynamicParticles = dynamic(() => import("../../app/Particles"), {
  ssr: false,
});

const IntroSection = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-center w-screen">
      <DynamicParticles />

      <section className="w-fit bg-slate-500 bg-opacity-20 p-8 sm:p-16 flex flex-col xl:flex-row items-left justify-end xl:items-center max-w-[75%]">
        <h1 className="font-orbitron text-4xl sm:text-6xl font-semibold text-[#1F2937] mb-4 sm:mb-8 xl:mb-0 xl:mr-4 2xl:text-[150px]">
          HUSOFT
        </h1>
        <p className="text-lg sm:text-2xl text-slate-600">
          We provide cutting-edge technology solutions and innovative software
          services, empowering businesses to thrive.
        </p>
      </section>
    </div>
  );
};

export default IntroSection;
