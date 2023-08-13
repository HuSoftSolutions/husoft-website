/* eslint-disable react/no-unescaped-entities */
// Add more testimonials as needed
const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white text-gray-900 p-8 sm:p-16">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-8">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Render testimonial cards */}
        <div className=" shadow-lg transition-transform transform hover:scale-105 bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
            HUSOFT's expertise and innovative solutions have greatly helped our
            business grow. Their team is highly professional, responsive, and a
            pleasure to work with.
          </p>

          <p className="text-gray-200 italic mt-4">
            - Rich Scott, Fox Run Golf Club
          </p>
        </div>
        <div className=" shadow-lg transition-transform transform hover:scale-105 bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
					Cody and the entire team at Husoft Solutions have been incredible to work with over the past 2 years. They have delivered tremendous value through their products and services offered. I highly recommend Husoft Solutions.
          </p>
          <p className="text-gray-200 italic mt-4">- Gabe August, The Bunker</p>
        </div>
        <div className=" shadow-lg transition-transform transform hover:scale-105 bg-gray-800 p-4 rounded-lg">
          <p className="text-lg text-gray-300">
            We are extremely satisfied with the services provided by HUSOFT.
            Their technical expertise and attention to detail have exceeded our
            expectations.
          </p>
          <p className="text-gray-200 italic mt-4">
            - Ken Handy, Merchant Preferred
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
