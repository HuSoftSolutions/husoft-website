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
      className="w-full bg-gradient-to-b from-gray-900 to-gray-300 py-20"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-5xl font-semibold text-white mb-16 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className=" w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-2xl focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="mb-6 inline-flex justify-center py-4 px-6 border border-transparent shadow-sm text-lg font-medium rounded-2xl text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300"
                >
                  Send Message
                </button>
                <div className="text-xs flex">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA logo"
                    className="mr-2"
                  />
                  <p>
                    This site is protected by reCAPTCHA and the Google
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
