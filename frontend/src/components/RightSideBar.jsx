import React from "react";
import cross from "../assets/cross-Icon.svg";
function RightSideBar() {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        right: 0,
      }}
    >
      <div
        style={{
          height: "394px",
          width: "50px",
          backgroundColor: "black",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "14px",
          }}
        >
          <img src={cross} alt="" />
          <h1
            style={{
              textOrientation: "upright",
              writingMode: "vertical-lr",
              color: "white",
              fontWeight: "400",
              fontStyle: "Poppins",
              fontSize: "16px",
              letterSpacing: "2%",
              marginTop: "20px",
              marginLeft: "1px",
              color: "#FFFFFF",
            }}
          >
            Notice Board
          </h1>
        </div>
      </div>
      <div
        style={{
          height: "394px",
          width: "50px",
          boxShadow:
            "0px 4px 4px 0px rgba(0,0,0,0.25), 0px -4px 4px 0px rgba(0,0,0,0.25)",
        }}
      ></div>
    </div>
  );
}

export default RightSideBar;
