import React, { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      (
      {!open && (
        <div
          onClick={toggle}
          style={{
            position: "absolute",
            top: "91px",
          }}
        >
          <div
            className="top-side-nav"
            style={{
              width: "132px",
              height: "50px",
              backgroundColor: "black",
              borderTopRightRadius: "20px",
            }}
          ></div>
          <div
            className=""
            style={{
              width: "132px",
              height: "750px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: "2px 7px 6px 0px rgba(0,0,0,0.25)",
            }}
          >
            {" "}
            <div
              style={{
                position: "absolute",
                marginTop: "40px",
                marginLeft: "32px",
                border: "1px solid #0029FF",
                width: "68px",
                height: "68px",
                borderRadius: "20px",
              }}
            >
              <h1
                style={{
                  color: "#0029ff",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "36px",
                  lineHeight: "54px",
                  letterSpacing: "2%",
                  textAlign: "center",
                  position: "relative",
                  top: "-15px",
                }}
              >
                1
              </h1>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div
          onClick={toggle}
          style={{
            position: "absolute",
            top: "91px",
          }}
        >
          <div
            className="top-side-nav"
            style={{
              width: "392px",
              height: "50px",
              backgroundColor: "black",
              borderTopRightRadius: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "18px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "16px",
                  letterSpacing: "2%",
                  lineHeight: "24px",
                }}
              >
                Journey Board
              </h1>
            </div>
          </div>
          <div
            className=""
            style={{
              width: "392px",
              height: "750px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: "2px 7px 6px 0px rgba(0,0,0,0.25)",
              backgroundColor: "#FDFDFD",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "15px",
              }}
            >
              <ul>
                <li
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Explore the world of mangement
                </li>
                <br></br>
                <li
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Technical Project Management
                </li>
                <li
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Threadbuild
                </li>
                <li
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Structure your pointers
                </li>
                <li
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  4SA Method
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      );
    </div>
  );
}
