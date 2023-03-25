import { useEffect, useState } from "react";
import image from "../../assets/youtube.svg";
import arrow from "../../assets/Vector.svg";
import downarr from "../../assets/down-arrow.svg";
import bulb from "../../assets/bulb.svg";
import flower from "../../assets/flower.svg";
import msg from "../../assets/msg.svg";
import ques from "../../assets/ques.svg";
import leftarr from "../../assets/leftarr.svg";
import rightarr from "../../assets/rightarr.svg";
import dot from "../../assets/dot.svg";
import multiplearr from "../../assets/multiplearr.svg";
function Box({ index, content }) {
  let [firstBox, setFirstBox] = useState(false);
  let [secondBox, setSecondBox] = useState(false);
  let [thirdBox, setThirdBox] = useState(false);
  let [fourthBox, setFourthBox] = useState(false);
  let [arrToggle, setArrToggle] = useState(false);
  let [desToggle, setDesToggle] = useState(false);
  let [aToggle, setAToggle] = useState(false);
  const threadToggle = () => {
    setArrToggle(!arrToggle);
  };
  const descToggle = () => {
    setDesToggle(!desToggle);
  };
  const threadAtoggle = () => {
    setAToggle(!aToggle);
  };

  useEffect(() => {
    if (index === 0) {
      setFirstBox(true);
      setSecondBox(false);
      setThirdBox(false);
      setFourthBox(false);
    } else if (index === 1) {
      setFirstBox(false);
      setSecondBox(true);
      setThirdBox(false);
      setFourthBox(false);
    } else if (index === 2) {
      setFirstBox(false);
      setSecondBox(false);
      setThirdBox(true);
      setFourthBox(false);
    } else if (index === 3) {
      setFirstBox(false);
      setSecondBox(false);
      setThirdBox(false);
      setFourthBox(true);
    }
  }, []);

  return (
    <div>
      {firstBox && (
        <a href={content}>
          <img src={image} alt="yt" />
        </a>
      )}
      {fourthBox && (
        <div>
          <div>
            <div
              style={{
                display: "flex",
                width: "90%",
                margin: "auto",
                backgroundColor: "#D1CeCe",
              }}
            >
              <button
                onClick={descToggle}
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {!desToggle ? (
                  <img src={arrow} />
                ) : (
                  <img style={{ width: "10px" }} src={downarr} />
                )}
              </button>
              <h1
                style={{
                  marginLeft: "5px",
                  fontFamily: "Open Sans",
                  fontWeight: "600",
                  lineHeight: "21.79px",
                  letterSpacing: "2%",
                  letterSpacing: "2%",
                  fontSize: "16px",
                }}
              >
                Introduction
              </h1>
            </div>
            {!desToggle && (
              <div style={{ marginLeft: "34px" }}>
                <h2
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  The 4SA Method , How to bring a idea into progress ?{" "}
                </h2>
                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                    marginLeft: "330px",
                    lineHeight: "19.07px",
                    letterSpacing: "2%",
                    color: "#606161",
                  }}
                >
                  See More
                </p>
              </div>
            )}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                width: "90%",
                margin: "auto",
                height: "43px",
                border: "1px solid#D9D7D7",
                marginTop: "10px",
              }}
            >
              <button
                onClick={threadToggle}
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {!arrToggle ? (
                  <img src={arrow} />
                ) : (
                  <img style={{ width: "10px" }} src={downarr} />
                )}
              </button>
              <h1
                style={{
                  marginLeft: "5px",

                  fontFamily: "Open Sans",
                  fontWeight: "600",
                  lineHeight: "21.79px",
                  letterSpacing: "2%",
                  fontSize: "16px",
                }}
              >
                Thread A
              </h1>
            </div>

            {!arrToggle && (
              <div style={{ marginLeft: "34px" }}>
                <h2
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  How are you going to develop your stratergy ? Which method are
                  you going to use to develop a stratergy ? What if the project
                  is lengthy?
                </h2>
                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                    marginLeft: "330px",
                    lineHeight: "19.07px",
                    letterSpacing: "2%",
                    color: "#606161",
                  }}
                >
                  See More
                </p>
                <div
                  style={{
                    width: "392px",
                    height: "43px",
                    backgroundColor: "FCFCFC",
                    border: "1px solid#D9D7D7",
                    marginLeft: "20px",
                    marginTop: "46px",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "24px",
                      letterSpacing: "2%",
                      color: "#000000",
                    }}
                  >
                    Example 1
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {thirdBox && (
        <div>
          <div
            style={{
              marginLeft: "31px",
              marginTop: "28px",
            }}
          >
            <h1
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                lineHeight: "21.79px",
                letterSpacing: "2%",
                fontSize: "16px",
              }}
            >
              Title
            </h1>
            <div
              style={{
                boxShadow: "-2px 2px 6px 0px rgba(0,0,0,0.15)",
                width: "422px",
                height: "43px",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <div
            style={{
              marginLeft: "31px",
              marginTop: "28px",
            }}
          >
            <h1
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                lineHeight: "21.79px",
                letterSpacing: "2%",
                fontSize: "16px",
              }}
            >
              Content
            </h1>
            <div
              style={{
                boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.18)",
                width: "422px",
                height: "82px",
                backgroundColor: "#FCFBFB",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                    marginLeft: "20px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    File
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Edit
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    View
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Insert{" "}
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Format
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Tools
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Table
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    Help
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "12px",
                    marginLeft: "20px",
                  }}
                >
                  <img src={leftarr} />
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "12px",
                  }}
                >
                  <img src={rightarr} />
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "12px",
                  }}
                >
                  <img src={multiplearr} />
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    marginRight: "12px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#EBEBEB",

                      fontFamily: "Poppins",
                      fontWeight: "12px",
                      lineHeight: "18px",
                      letterSpacing: "2%",
                      fontSize: "12px",
                    }}
                  >
                    paragraph
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginRight: "8px",
                    marginTop: "15px",
                    gap: "2px",
                  }}
                >
                  <img src={dot} />
                  <img src={dot} />
                  <img src={dot} />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "422px",
              height: "142px",
              boxShadow: "-2px 2px 6px 0px rgba(0,0,0,0.15)",
              marginLeft: "31px",
            }}
          ></div>
        </div>
      )}
      {secondBox && (
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              margin: "auto",
              height: "43px",
              backgroundColor: "rgba(254, 255, 192, 0.2)",
              border: "0.1px solid rgba(0, 0, 0, 0.1)",
              borderWidth: "0.1px",
              outline: "none",
            }}
          >
            <button
              onClick={threadAtoggle}
              style={{
                outline: "none",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              {!arrToggle ? (
                <img src={arrow} />
              ) : (
                <img style={{ width: "10px" }} src={downarr} />
              )}
            </button>
            <h1
              style={{
                marginLeft: "71px",
                fontFamily: "Open Sans",
                fontWeight: "700",
                lineHeight: "27px",
                letterSpacing: "2%",
                fontSize: "20px",
                marginTop: "6px",
              }}
            >
              Thread A
            </h1>
          </div>
          {!aToggle && (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  position: "relative",
                  marginLeft: "27px",
                  marginTop: "30px",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#333333",
                    height: "65px",
                    boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                    outline: "none",
                    width: "199px",
                    borderRadius: "10px",
                    background: " rgba(0, 0, 0, .1)",
                  }}
                >
                  <h1
                    style={{
                      color: "#000000",
                      fontFamily: " Open Sans",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "16.34px",
                      paddingLeft: "6.92px",
                      paddingTop: "5px",
                    }}
                  >
                    Sub thread 1
                  </h1>
                </div>
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                    height: "70px",
                    top: "30px",
                    outline: "none",
                    width: "199px",
                    opactiy: "50%",
                    borderRadius: "10px",
                    border: "0.1px solid rgba(0, 0, 0, 0.1)",
                    borderWidth: "0.1px",
                  }}
                >
                  {" "}
                  <input
                    placeholder="Enter text here"
                    style={{
                      outline: "none",
                      marginTop: "5px",
                      marginLeft: "4px",
                      borderRadius: "10px",
                      border: "none",
                      paddingTop: "5px",
                      paddingRight: "15px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  margin: "27px",
                  marginTop: "30px",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#333333",
                    height: "65px",
                    boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                    outline: "none",
                    width: "199px",

                    borderRadius: "10px",
                    background: " rgba(0, 0, 0, .1)",
                  }}
                >
                  <h1
                    style={{
                      color: "#000000",
                      fontFamily: " Open Sans",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "16.34px",
                      paddingLeft: "6.92px",
                      paddingTop: "5px",
                    }}
                  >
                    Sub Interpretation 1
                  </h1>
                </div>
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                    height: "70px",
                    top: "30px",
                    outline: "none",
                    width: "199px",

                    opactiy: "50%",
                    borderRadius: "10px",
                    border: "0.1px solid rgba(0, 0, 0, 0.1)",
                    borderWidth: "0.1px",
                  }}
                >
                  {" "}
                  <input
                    placeholder="Enter text here"
                    style={{
                      outline: "none",
                      marginTop: "5px",
                      marginLeft: "4px",
                      borderRadius: "10px",
                      border: "none",
                      paddingTop: "5px",
                      paddingRight: "15px",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="icons">
            <img src={bulb} alt="" />
            <img src={msg} alt="" />
            <img src={ques} alt="" />
            <img src={flower} alt="" />
            <div className="select-tag-div">
              <select className="select-tag">
                <option>
                  <h1>Select Categ</h1>
                </option>
              </select>
              <select className="select-tag">
                <option>Select Proces</option>
              </select>
            </div>
          </div>
          <div
            className="btn-div"
            style={{
              marginTop: "30px",
              marginLeft: "27px",
              paddingBottom: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#0029FF",
                color: "white",
                width: "97px",
                height: "36px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              + Sub-thread
            </button>
          </div>
          <div
            style={{
              position: "relative",
              marginLeft: "27px",
              outline: "none",
            }}
          >
            <div
              style={{
                backgroundColor: "#333333",
                height: "65px",
                boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                outline: "none",
                width: "425px",
                borderRadius: "10px",
                background: " rgba(0, 0, 0, .1)",
              }}
            >
              <h1
                style={{
                  color: "#000000",
                  fontFamily: " Open Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16.34px",
                  paddingLeft: "6.92px",
                  paddingTop: "5px",
                }}
              >
                Summary for Thread A
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#ffffff",
                boxShadow: "1px 3px 8px 0px rgba(0,0,0,0.25)",
                height: "83px",
                top: "30px",
                outline: "none",
                width: "425px",
                opactiy: "50%",
                borderRadius: "10px",
                border: "0.1px solid rgba(0, 0, 0, 0.1)",
                borderWidth: "0.1px",
              }}
            >
              {" "}
              <input
                placeholder="Enter text here"
                style={{
                  outline: "none",
                  marginTop: "5px",
                  marginLeft: "4px",
                  borderRadius: "10px",
                  border: "none",
                  paddingTop: "5px",
                  paddingRight: "15px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Box;
