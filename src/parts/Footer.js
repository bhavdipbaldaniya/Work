import React from "react";

import BrandIcon from "../parts/BrandIcon";
import Button from "../elements/Button";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";


export default function Footer() {
  return (
    <>
      {/* <div className="bg-gray-50 border-t border-gray-200 pb-6">
        <div className="container flex-col mx-auto ">
          <div className="flex flex-col sm:flex-row mt-8 justify-center">
            <div className="w-1/3 flex-col ml-16 mr-8">
              <BrandIcon />
              <p className="w-full text-lg text-gray-400 font-light">
                Growing Your Business <br />
              </p>
            </div>

            <div className="w-1/3 ml-16 sm:ml-0 mt-0">
              <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
              <Button
                href="https://www.facebook.com/profile.php?id=61563576510199"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                Facebook
              </Button>
              <Button
                href="https://www.instagram.com/cyberwave.infotech?igsh=OXN5bjAweW53bXh1"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                Instagram
              </Button>
              <Button
                href="https://www.linkedin.com/company/cyberwave-infotech/"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                LinkedIn
              </Button>

            </div>
          </div>
          <div className="flex-col text-center mt-7">
            <p className="text-lg text-gray-400 font-light">
              Copyright <span className="text-theme-purple">©Cyberwave</span> all
              rights reserved 2023-2024
            </p>
          </div>
        </div>
      </div> */}

      <div className='MaindivForFoter'>
        <div>
          <div className="MainDivForFooterLogo">
            <div>

              <BrandIcon />
              <div className="GrowingYourBusineshText">Growing Your Business</div>
            </div>


            <div>
              <div className="w-1/3 ml-16 sm:ml-0 mt-0">
                <h1 className="SocialText">Social</h1>

                <div className="maindivforfotersocialicon">
                  <Button
                    href="https://www.facebook.com/profile.php?id=61563576510199"
                    type="link"
                    target="_blank"
                    className="flex text-lg text-gray-400 font-light hover:underline"
                    isExternal
                  >
                    <img
                      className="ImageIconHover"
                      src={facebook}
                      alt="facebook"
                      height={100}
                      width={100}
                    />
                  </Button>
                  <Button
                    href="https://www.instagram.com/cyberwave.infotech?igsh=OXN5bjAweW53bXh1"
                    type="link"
                    target="_blank"
                    className="flex text-lg text-gray-400 font-light hover:underline"
                    isExternal
                  >
                    <img
                      className="ImageIconHover"
                      src={instagram}
                      alt="instagram"
                      height={100}
                      width={100}
                    />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/company/cyberwave-infotech/"
                    type="link"
                    target="_blank"
                    className="flex text-lg text-gray-400 font-light hover:underline"
                    isExternal
                  >
                    <img
                      className="ImageIconHover"
                      src={linkedin}
                      alt="instagram"
                      height={100}
                      width={100}
                    />
                  </Button>
                </div>

              </div>
            </div>
          </div>
          <div className="CyberwaveCopyright">
            <p className="TextCopyright">
              Copyright <span className="Text_Cyberwave">©Cyberwave</span> all
              rights reserved 2023-2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
