import React from "react";

import Fade from "react-reveal/Fade";

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Why Choose Cyberwave 🌊
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="my-flex-container">
          <div className="flex-col">
            {data[0].map((item, index) => (
              <Fade bottom delay={500 * index}>
                <div>
                  <div className="my-container">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                      <p className="font-light text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {data[1].map((item, index) => (
              <Fade bottom delay={500 * index}>
                <div>
                  <div className="my-container">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                      <p className="font-light text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
