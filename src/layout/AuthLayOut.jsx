import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
const AuthLayOut = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Logo></Logo>
      <div className="flex justify-between items-center mt-10">
        <div className="w-1/2">
          <Outlet></Outlet>
        </div>
        <img src={authImage} alt="" />
      </div>
    </div>
  );
};

export default AuthLayOut;
