import React, { useEffect, useState } from "react";
import AssetsContainer from "./AssetsContainer";
import axios from "axios";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
function Main() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setData(res.data[0].assets);
      setTitle(res.data[0].task_title);
      setDescription(res.data[0].task_description);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div>
        <div>
          <div className="main-header">
            <div className="header">
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "28px",
                  lineHeight: "42px",
                  color: "#0029FF",
                  marginTop: "18px",
                  marginLeft: "180px",
                }}
              >
                Technical Project Management
              </h1>
              <button>Submit task</button>
            </div>
            <div className="item1">
              <div>
                <h1>{title}</h1>
              </div>

              <p>{description}</p>
            </div>
          </div>
          <div className="asset-container">
            {data.map((item, index) => {
              return (
                <AssetsContainer
                  index={index}
                  id={item.asset_id}
                  title={item.asset_title}
                  description={item.asset_description}
                  content={item.asset_content}
                />
              );
            })}
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default Main;
