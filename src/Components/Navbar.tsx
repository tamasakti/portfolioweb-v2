"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const pathname = usePathname();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="max-w-6xl mx-auto h-[9rem] ">
        <div className="flex flex-row w-full h-full ">
          <div className="flex items-center flex-1 ml-10 lg:flex">
            <Image
              src="/logo-tama.webp"
              alt="logo tamasakti"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-1">
            <ul className="flex-row items-center justify-end hidden w-10/12 h-full space-x-10 font-semibold cursor-pointer lg:flex font-Poppins">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "bg-slate-800 px-4 py-2 text-white rounded-lg"
                    : ""
                }`}
              >
                Home
              </Link>

              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "bg-slate-800 px-4 py-2 text-white rounded-lg"
                      : ""
                  }`}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`${
                    pathname === "/work"
                      ? "bg-slate-800 px-4 py-2 text-white rounded-lg"
                      : ""
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact "
                  className={`${
                    pathname === "/contact"
                      ? "bg-slate-800 px-4 py-2 text-white rounded-lg"
                      : ""
                  }`}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
            <div className="flex-1 lg:hidden flex w-full h-full justify-center items-center">
              {!active ? (
                <RxHamburgerMenu
                  onClick={handleClick}
                  className="text-4xl cursor-pointer transition duration-700 ease-out text-font-primary"
                />
              ) : (
                <GrClose
                  onClick={handleClick}
                  className="text-4xl transition duration-700 ease-in-out cursor-pointer text-font-primary"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          !active
            ? "h-[0.1rem] space-y-6 hidden transition ease-out duration-300"
            : "bg-font-primary w-full transition flex duration-300 ease-in-out h-[26rem] lg:hidden space-y-6 mb-10"
        }`}
      >
        <ul
          className={
            !active
              ? "hidden"
              : "text-white w-full h-full flex justify-center flex-col items-centers"
          }
        >
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "p-5 text-xl bg-white text-font-primary cursor-pointer"
                : "p-5 text-xl hover:bg-white hover:text-font-primary cursor-pointer"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "p-5 text-xl bg-white text-font-primary cursor-pointer"
                : "p-5 text-xl hover:bg-white hover:text-font-primary cursor-pointer"
            }`}
          >
            About Me
          </Link>
          <Link
            href="/work"
            className={`${
              pathname === "/work"
                ? "p-5 text-xl bg-white text-font-primary cursor-pointer"
                : "p-5 text-xl hover:bg-white hover:text-font-primary cursor-pointer"
            }`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "p-5 text-xl bg-white text-font-primary cursor-pointer"
                : "p-5 text-xl hover:bg-white hover:text-font-primary cursor-pointer"
            }`}
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
