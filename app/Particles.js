"use client";

import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    import("particles.js").then((module) => {
      window.particlesJS.load("particles-js", "/particles.json", function () {
        console.log("callback - particles.js config loaded");
      });
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    ></div>
  );
};

export default Particles;
