import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import logo from "../assets/logo.svg";
import im1 from "../assets/im1.svg";
import im2 from "../assets/im2.svg";
import im3 from "../assets/im3.svg";
import dot from "../assets/redot.svg";
function Navbar() {
  return (
    <div className="nav">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div className="right-side-nav-icons">
        <div id="icons-styling">
          <FaHome
            style={{
              color: "#FFFFFF",
              width: "17px",
              height: "18.34px",
              marginLeft: "7px",
              marginTop: "7px",
            }}
          />
        </div>
        <div id="icons-styling">
          <FaTools
            style={{
              color: "#FFFFFF",
              width: "17px",
              height: "18.34px",
              marginLeft: "7px",
              marginTop: "7px",
            }}
          />
        </div>
        <div className="bell">
          <img src={im2} alt="" />
        </div>
        <div>
          <img src={im3} alt="" />
        </div>
        <div id="dot">
          <img src={dot} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            gap: "2.99px",
          }}
        >
          <img src={im1} alt="" />
          <img src={im1} alt="" />
          <img src={im1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
