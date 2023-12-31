import Image from "next/image";

const TeamSection = () => {
  return (
    <section id="team" className="w-full bg-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8">
        Meet Our Team
      </h2>
      {/* Render team members here */}

      <div className="flex flex-col lg:flex-row justify-around ">
        {/* Render team member cards */}
        <div className="p-2 flex w-full lg:w-1/4">
          <div className="shadow-lg transition-transform transform hover:scale-105 bg-slate-500 bg-opacity-40 p-4 rounded-lg w-full">
            <div className="mb-4 relative w-40 h-40 mx-auto">
              <Image
                src="/images/team/cody_headshot.jpeg"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cody Husek</h3>
            <p className="text-gray-800">Co-Founder, Lead Developer</p>
          </div>
        </div>
        <div className="p-2 flex w-full lg:w-1/4">
          <div className=" shadow-lg transition-transform transform hover:scale-105 bg-slate-500 bg-opacity-40 p-4 rounded-lg w-full">
            <div className="mb-4 relative w-40 h-40 mx-auto">
              <Image
                src="/images/team/tom_headshot.jpeg"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tom Mittler</h3>
            <p className="text-gray-800">Co-Founder, Director of Operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
