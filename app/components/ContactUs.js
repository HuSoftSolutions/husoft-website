// "use client";

import React, { useEffect, useState } from "react";
import { validateRecaptcha, sendEmail } from "../firebaseConfig";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

const ContactUs = ({ emailTo, template }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(isValidEmail(e.target.value));
  };

  const handleButtonClick = async () => {
    if (isValid) {
      setIsLoading(true);
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
        toast.error("An error occurred while verifying recaptcha.");
        console.error(error);
        return;
      }

      try {
        await sendEmail(
          {
            emailTo: emailTo,
            template: template,
            email: email,
          },
          { auth: true }
        );
        toast.success("Contact us successfully sent!");
      } catch (error) {
        toast.error("An error occurred while sending the email.");
        console.log(error);
      } finally {
        setIsLoading(false);
        setEmail("");
        setIsValid(false);
      }
    }
  };

  return (
    <div className="relative w-full sm:w-1/2 md:w-1/3 px-8">
      <div className="flex mt-5 md:mt-0 font-normal text-[16px] sm:text-normal w-full">
        <input
          className="flex-grow border px-2 focus:outline-none border-gray-300 rounded-l-lg rounded-r-none "
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className={`whitespace-nowrap text-xs md:text-normal transition-all duration-500 flex justify-center w-1/3 ${
            email && isValid && !loading ? "bg-green-600" : "bg-gray-400"
          } p-2 text-white rounded-r-lg border-gray-300 border border-l-0`}
          disabled={!isValid || loading}
          onClick={handleButtonClick}
        >
          {!loading ? (
            "Contact us"
          ) : (
            <FaSpinner className="w-4 h-full animate-spin" />
          )}
        </button>
      </div>
      {email && !isValid && (
        <p className="absolute text-gray-500 mt-2 text-sm font-normal">
          Please enter a valid email address.
        </p>
      )}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
