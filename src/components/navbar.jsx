"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import { Menu, Close } from "@mui/icons-material";

function Navbar() {
  const [openSidebar, SetOpenSidebar] = useState(false);
  const pathname = usePathname();
  const isActive = pathname;

  const handleOpen = () => {
    SetOpenSidebar(!openSidebar);
  };
  return (
    <div className=" sticky flex w-screen bg-white top-0 shadow-bottom-gray z-50  ">
      <div className=" flex justify-between items-center flex-1 py-5 px-5 md:px-10 z-50 bg-white h-17">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex ">
          <ul className="hidden lg:flex gap-10 align-items-center h-6 ">
            <li
              className={`hover:border-b-2 hover:border-blue-800 transition-all duration-150 ${
                isActive === "/" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/" className=" active">
                Home
              </Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-800 transition-all duration-150 ${
                isActive === "/about" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/about" className=" active">
                About
              </Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-800 transition-all duration-150 ${
                isActive === "/services" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/services"> Services</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-800 transition-all duration-150 ${
                isActive === "/projects" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/projects"> Projects</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-900 transition-all duration-150 ${
                isActive === "/products" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/products"> Products</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-900 transition-all duration-150 ${
                isActive === "/partners" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/partners"> Partners</Link>
            </li>
            <li
              className={`hover:border-b-2 hover:border-blue-900 transition-all duration-150 ${
                isActive === "/contact" ? "border-b-2 border-blue-900" : ""
              }`}
            >
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>
          <button className="text-3xl lg:hidden " onClick={handleOpen}>
            {openSidebar ? (
              <Close className="text-4xl" />
            ) : (
              <Menu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
      {openSidebar && <Sidebar />}
    </div>
  );
}
export default Navbar;
