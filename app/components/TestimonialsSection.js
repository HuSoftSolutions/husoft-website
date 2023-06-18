/* eslint-disable react/no-unescaped-entities */
// Add more testimonials as needed
const TestimonialsSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-8">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Render testimonial cards */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
            HUSOFT's expertise and innovative solutions have greatly helped our
            business grow. Their team is highly professional, responsive, and a
            pleasure to work with.
          </p>
          <p className="text-gray-500 mt-4">- John Doe, CEO of ABC Company</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
            Working with HUSOFT has been a game-changer for our organization.
            Their software solutions have streamlined our operations and
            improved our efficiency.
          </p>
          <p className="text-gray-500 mt-4">- Jane Smith, CTO of XYZ Inc.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
            We are extremely satisfied with the services provided by HUSOFT.
            Their technical expertise and attention to detail have exceeded our
            expectations.
          </p>
          <p className="text-gray-500 mt-4">
            - Michael Johnson, COO of Acme Corp
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
