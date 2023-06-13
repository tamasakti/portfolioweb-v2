import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-start p-6 mx-auto ml-5 space-x-4 font-semibold font-Poppins">
        <h2 className="cursor-pointer hover:text-blue-600 hover:underline ">
          <Link href="https://github.com/tamasakti" target="_blank">
            {" "}
            Github
          </Link>
        </h2>
        <p> /</p>
        <h2 className="cursor-pointer hover:text-blue-900 hover:underline">
          <Link href="https://www.linkedin.com/in/tamasakti/" target="_blank">
            {" "}
            LinkedIn{" "}
          </Link>
        </h2>
        <p> /</p>
        <h2 className="cursor-pointer hover:text-red-500 hover:underline">
          <Link href="https://instagram.com/gumilangtama" target="_blank">
            Instagram
          </Link>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Footer;
