import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Transition } from "@headlessui/react";
import Button from "../elements/Button";
import BrandIcon from "../parts/BrandIcon";
import logo from '../assets/images/logo.jpg'

export default function Header(props) {
  const [isCollapse, setIsCollapse] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  let pathName = new URL(window.location.href).pathname;

  const handleCollapseToggle = () => {
    setIsCollapse(!isCollapse);
  };
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <header className="header">
      <Fade>
        <div className="flex justify-between px-4 lg:px-0">
          <BrandIcon />
          {/* <div >

            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 mr-2"
            />
          </div> */}

          <a
            className="flex items-center text-theme-blue lg:hidden focus:outline-none p-2 bg-purple  hover:bg-dark-theme-purple hover:shadow-lg transition duration-300 hover:text-white"
            onClick={handleCollapseToggle}
            href="/discuss-project"
          >
            <img
              src="./assets/images/chat.png"
              alt="Chat"
              className="w-6 h-6 mr-2"
            />
          </a>
        </div>



        <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
          {/* <div className='maindivForAllButton'>
            <Button className={`${true === "/" ? "ActiveNavBarManu" : ""
              } ActiveNavBarManu`} type="link" href="/">Home</Button>
            <Button className='ActiveNavBarManu' type="link" href="/">About Us</Button>
            <Button className='ActiveNavBarManu' type="link" href="/">Contact Us</Button>
          </div> */}

          <div className="maindivForAllButton">
            {["Home", "About Us", "Contact Us"].map((label, index) => (
              <Button
                key={index}
                className={`${activeIndex === index ? "ActiveNavBarManudefolt" : "ActiveNavBarManu"
                  }`} // Condition based class
                type="link"
                href="/"
                onClick={() => handleButtonClick(index)} // Button click handle karva
              >
                {label}
              </Button>
            ))}
          </div>
          {/* <li>
            <Button
              className={`${true === "/" ? "active_linkButton" : ""
                } text-lg px-4 no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          */}

          {pathName != "/discuss-project" && (
            <li>
              <Button
                // className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
                type="link"
                className='buttonDiscussProject
'
                href="/discuss-project"
              >
                Discuss Project
              </Button>
            </li>
          )}
        </ul>
      </Fade>
    </header>
  );
}
