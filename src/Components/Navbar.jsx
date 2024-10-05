import React from "react";
import logo from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";

function Navbar() {
  return (
    <>
      <div className="px-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex">
              <img src={logo} alt="" className="h-12 w-12 pt-2" />
              <p className="text-2xl text-gray-950 p-3 text-bold">MedLinkPro</p>
            </div>
            <img src={MenuIcon} alt="" className="h-10 w-10 pt-2 md:hidden" />
            <nav className="hidden md:flex gap-10 pt-3 text-lg text-gray-800 items-center">
              <a href="#">About</a>
              <p>/</p>
              <a href="#">Product</a>
              <p>/</p>
              <a href="#">QnA</a>
              <p>/</p>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
