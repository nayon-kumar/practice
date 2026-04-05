import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {isNavigation && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
