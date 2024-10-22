import React from "react";

import Fade from "react-reveal/Fade";

import Button from "../elements/Button";

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <div className="flex" style={{ width: "100%", justifyContent: "center" }}>
        <div style={{ width: "100%" }}>
          <Fade bottom>
            <h1 className="text-5xl text-theme-blue text-center font-bold">
              Our Selected Project
            </h1>

            <p className="font-light text-lg text-gray-400 text-center mb-12">
              We are ready to scale up your business with our great work result.
            </p>
          </Fade>
        </div>

        {/* <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: "0px",
              width: "max-content",
              top: "34px",
            }}
            className="hidden lg:block"
          >
            <Button
              // className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
              className="MoreProject"
              type="link"
              href="/projects"
            >
              + More Project
            </Button>
          </div>
        </div> */}
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center"> */}
      <div className="MainDivForCart">
        {data.slice(0, 3).map((item, index) => (
          <Fade bottom delay={500 * index}>
            <Button type="link">
              <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
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

        {/* <div
          className="flex items-center text-theme-blue lg:hidden focus:outline-none p-2 bg-purple  hover:bg-dark-theme-purple hover:shadow-lg transition duration-300 hover:text-white"
          onClick={() => { }}
          href="/discuss-project"
        >
          <Button
            className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
            type="link"
            href="/projects"
          >
            + More Project
          </Button>



        </div> */}
      </div>
      <div className="MoeProjectBN">
        <Button
          className="MoreProject"
          type="link"
          href="/projects"
        >
          + More Project
        </Button>
      </div>
    </section>
  );
}
