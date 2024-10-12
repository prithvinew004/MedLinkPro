import React from "react";
import logo from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";

function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between px-4 w-full">
          <div className="flex items-center">
            <img src={logo} alt="MedLinkPro Logo" className="h-12 w-12" />
            <p className="text-2xl text-gray-950 font-bold ml-2">
              MedLinkPro
            </p>{" "}
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

          <div className="md:hidden">
            <img src={MenuIcon} alt="Menu Icon" className="h-10 w-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
