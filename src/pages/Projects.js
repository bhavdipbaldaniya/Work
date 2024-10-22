import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Fade from "react-reveal/Fade";
import Data from "../json/landingPage.json";
import Button from "../elements/Button";

const Projects = ({ props }) => {
  return (
    <div>
      <Header {...props} />
      <div className="grid grid-rows-3 xl:px-44 gap-8 mt-28 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-26 ">
        {Data?.portfolio?.map((item, index) => (
          <Fade bottom delay={500 * index}>
            <Button type="link">
              <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-90 portofolio-card">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt="Portfolio"
                    className="rounded-t-2xl z-0"
                  />
                </div>
                <div className="py-4">
                  <h2 className="text-theme-blue text-center text-xl">
                    {item.title}
                  </h2>
                  <p className="font-light text-gray-400 text-center">
                    {item.type}
                  </p>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
