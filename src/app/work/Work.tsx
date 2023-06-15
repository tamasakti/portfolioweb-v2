"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prevState) => !prevState);
    console.log(active);
  }

  return (
    <div className="flex mt-10 lg:mt-0 flex-col lg:flex-row gap-7 justify-center w-full min-h-screen items-center">
      <div className="flex flex-col justify-center items-center w-[20rem] h-[20rem] shadow-lg hover:scale-110 bg-white gap-6">
        <h1 className="text-font-primary text-xl font-Poppins font-semibold">
          MusicLab - Id
        </h1>
        <Image
          src="/undraw_more_music_w70e.webp"
          alt="icon-logo"
          width={200}
          height={200}
        />
        <button className="border-2 border-font-primary text-lg bg-font-primary text-white px-8 py-2 rounded-lg hover:bg-white hover:text-font-primary transition duration-200 ease-in-out">
          <Link href="https://musiclab-id.vercel.app" target="_blank">
            View Demo
          </Link>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-[20rem] h-[20rem] shadow-lg hover:scale-110 bg-white gap-6">
        <h1>StayApp</h1>
        <p>On Progress</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[20rem] h-[20rem] shadow-lg hover:scale-110 bg-white gap-6">
        <h1>SocialOne</h1>
        <p>On Progress</p>
      </div>
    </div>
  );
};

export default Work;
