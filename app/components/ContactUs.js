"use client";

import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setIsLoading(true);
    if (!window.grecaptcha) {
      console.error("reCAPTCHA has not loaded");
      setIsLoading(false);
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );

    try {
      const result = await validateRecaptcha({ recaptchaToken: token });
      if (!result.data.success) {
        toast.error("Verification failed. Please try again.");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      toast.error("An error occurred while verifying reCAPTCHA.");
      console.error(error);
      setIsLoading(false);
      return;
    }

    try {
      await sendEmail(
        { emailTo, template, email },
        { auth: true }
      );
      toast.success("Thanks — we'll be in touch shortly.");
      setEmail("");
      setIsValid(false);
    } catch (error) {
      toast.error("An error occurred while sending. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="contact-email" className="sr-only">
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={handleEmailChange}
            className="h-12 w-full rounded-full border border-line bg-surface px-5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          disabled={!isValid || loading}
          className="btn-primary h-12 sm:px-7 disabled:cursor-not-allowed disabled:bg-ink-subtle disabled:hover:bg-ink-subtle"
        >
          {loading ? (
            <FaSpinner className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>
      {email && !isValid && (
        <p className="mt-2 pl-5 text-xs text-ink-muted">
          Please enter a valid email address.
        </p>
      )}
      <ToastContainer position="bottom-center" theme="light" />
    </div>
  );
};

export default ContactUs;
