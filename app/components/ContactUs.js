import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-300 py-20"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-5xl font-semibold text-white mb-16 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className=" w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-2xl focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-2xl focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-2xl focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-4 px-6 border border-transparent shadow-sm text-lg font-medium rounded-2xl text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
