import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section id="products" className="w-full bg-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8 text-center">
        Projects Showcase
      </h2>

      {/* Container for project cards */}
      <div className="grid gap-4 sm:gap-8 md:grid-cols-2 justify-items-center">
        {/* Render project cards */}
        <div className=" shadow-lg transition-transform transform hover:scale-105 w-full sm:w-72 bg-slate-500 bg-opacity-40 p-4 rounded-lg text-white flex flex-col items-center text-center">
          <div className="mb-4 w-48 h-32 relative">
            <Image
              src="/images/tf_hat_logo.png"
              alt="Tee Time Management Software"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <h1 className="font-bold text-slate-900">
            Tee Time Management Software
          </h1>
          <p className="text-sm pt-4">
            Realtime tee time management software for outdoor golf courses and
            simulator lounges
          </p>
        </div>
        <div className=" shadow-lg transition-transform transform hover:scale-105 w-full sm:w-72 bg-slate-500 bg-opacity-40 p-4 rounded-lg text-white flex flex-col items-center text-center">
          <div className="mb-4 w-48 h-32 relative">
            <Image
              src="/images/leadr_logo.png"
              alt="Tournament Scoring Software"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <h1 className="font-bold text-slate-900">
            Tournament Scoring Software
          </h1>
          <p className="text-sm pt-4">
            Realtime tournament scoring software for outdoor golf courses and
            simulator lounges
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
