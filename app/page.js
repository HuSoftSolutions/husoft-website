/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Script from "next/script";

import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import ContactUs from "./components/ContactUs";
import TeamSection from "./components/TeamSection";
import dynamic from "next/dynamic";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

const DynamicParticles = dynamic(() => import("../app/Particles"), {
  ssr: false,
});

import IntroSection from "./components/IntroSection";
import CompaniesSection from "./components/CompaniesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnersSection from "./components/PartnersSection";
import DevelopmentCycle from "./components/DevelopmentCycle";

const IndexPage = () => {
  useEffect(() => {
    if (!auth) return;
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out
        signInAnonymously(auth)
          .then(() => {
            // Do nothing, user is signed in anonymously.
            // console.log("signed in anon");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);

            // ...
          });
      }
      // ...
    });
  }, []);

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
    <div className="bg-gray-300 flex flex-col min-h-screen w-screen">
      <Header />

      <main className="flex flex-col items-start justify-center">
        {/* <Script
          src="https://chatbot-ai-c2ead.web.app/static/js/main.js"
          strategy="afterInteractive" // Loads the script after the page becomes interactive
          onLoad={() => {
            // Optional: Initialize the chat app if needed
            window.initializeChatApp &&
              window.initializeChatApp("chat-app-container");
          }}
        /> */}

        <IntroSection />
        <CompaniesSection />
        <ProjectsSection />
        <DevelopmentCycle />
        {/* <PartnersSection /> */}
        {/* <TeamSection /> */}
        <TestimonialsSection />
        <div id="contact" className="flex justify-center items-center w-full h-48">
          <ContactUs
            emailTo={["cody.husek@husoftsolutions.com"]}
            template="contact_template"
          />
        </div>
      </main>
      {/* <div id="chat-app-container" /> */}

      <Footer />
    </div>
  );
};

export default IndexPage;
