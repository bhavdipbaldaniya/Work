import React from "react";
import logo from '../assets/images/logoBlackFull.png'
import Button from "../elements/Button";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      {/* <p className="text-theme-blue text-4xl">
        CyberWave
        <span className="text-theme-purple">Infotech</span> */}
      {/* </p> */}

      <img
      className="ImgLogo"
        src={logo}
        alt="logo"
        height={100}
        width={100}
      />
    </Button>
  );
}
