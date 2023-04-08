import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBarApp";
import Home from "./Home";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
