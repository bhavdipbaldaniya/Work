import React from "react";

import Fade from "react-reveal/Fade";

import BuildWebsite from "../assets/images/Startup.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Growing Your Business <br />
            With Wave 🌊
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            We provide developers & designers using latest technologies to help
            you scale up your business.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}
