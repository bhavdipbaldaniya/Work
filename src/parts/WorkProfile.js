import React from "react";
import Fade from "react-reveal/Fade";

const WorkProfile = ({ data }) => {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Based On <span> 1000+ </span> Reviews on
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            Trusted by industry leaders and the rising starts like
          </p>
        </Fade>
      </div>
      <div className="grid grid-rows-5 px-10 sm:grid-cols-5 sm:grid-rows-1 sm:gap-6 xl:gap-14 justify-center mt-5">
        {data?.map((itm, index) => (
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <img
              style={{
                "object-fit": "contain",
                justifyContent: "center",
                display: "flex",
              }}
              height={"100%"}
              width={"150px"}
              src={itm.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProfile;
