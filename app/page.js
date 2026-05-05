"use client";

import { useEffect } from "react";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import IntroSection from "./components/IntroSection";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import DevelopmentCycle from "./components/DevelopmentCycle";
import TestimonialsSection from "./components/TestimonialsSection";

const IndexPage = () => {
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth).catch((error) => {
          console.error("Anonymous sign-in failed", error);
        });
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=" +
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <Header />

      <main>
        <IntroSection />
        <ProductsSection />
        <ServicesSection />
        <DevelopmentCycle />
        <TestimonialsSection />

        <section
          id="contact"
          className="relative overflow-hidden border-t border-line bg-canvas section"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 100%, rgba(234,88,12,0.10) 0%, rgba(250,250,249,0) 70%)",
            }}
          />
          <div className="container-tight relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 heading-section">
                Pick a product, embed our stack, or build something new.
              </h2>
              <p className="mx-auto mt-4 max-w-prose text-base text-ink-muted sm:text-lg">
                Drop your email and we&apos;ll follow up with the right next
                step — a product demo, an integration plan, or a discovery call
                — within one business day.
              </p>
              <div className="mt-10 flex justify-center">
                <ContactUs
                  emailTo={["cody.husek@husoftsolutions.com"]}
                  template="contact_template"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
