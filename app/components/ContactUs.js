"use client";

import React, { useEffect, useState } from "react";
import { validateRecaptcha } from "../firebaseConfig";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.grecaptcha) {
      console.error("reCAPTCHA has not loaded");
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );
    try {
      const result = await validateRecaptcha({ recaptchaToken: token });

      if (result.data.success) {
        console.log(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=" +
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-t from-gray-900 to-white py-20"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-5xl font-semibold text-gray-900 mb-16 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className=" w-full sm:w-2/3 md:w-1/2 rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded focus:ring-slate-400 focus:border-slate-400 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded focus:ring-slate-400 focus:border-slate-400 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded focus:ring-slate-400 focus:border-slate-400 transition-all duration-200"
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-sm text-lg font-medium rounded text-white bg-slate-800 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-all duration-300"
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
