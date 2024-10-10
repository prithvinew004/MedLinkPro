import React from "react";
import logo from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";

function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="w-full px-20">
          {" "}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start">
              <img
                src={logo}
                alt="MedLinkPro Logo"
                className="h-12 w-12 pt-2 "
              />
              <p className="text-2xl text-gray-950 p-3 font-bold">MedLinkPro</p>
            </div>

            <nav className="hidden md:flex gap-10 pt-3 text-lg text-gray-800 items-center">
              <a href="#">About</a>
              <p>/</p>
              <a href="#">Product</a>
              <p>/</p>
              <a href="#">QnA</a>
              <p>/</p>
              <a href="#">Contact</a>
            </nav>

            <img
              src={MenuIcon}
              alt="Menu Icon"
              className="h-10 w-10 pt-2 md:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
