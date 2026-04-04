import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
