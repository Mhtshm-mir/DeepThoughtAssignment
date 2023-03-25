import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />;
      <Main />
    </div>
  );
}

export default Dashboard;
