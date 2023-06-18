// Add more projects as needed
const ProjectsSection = () => {
  return (
    <section id="products" className="w-full bg-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold text-[#1F2937] mb-4 sm:mb-8">
        Projects Showcase
      </h2>
      {/* Render projects here */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Render project cards */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum ex sed tortor dignissim, in egestas lorem fringilla.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum ex sed tortor dignissim, in egestas lorem fringilla.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum ex sed tortor dignissim, in egestas lorem fringilla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
