import React from "react";
import { list } from "./styling";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import RunningText from "src/Components/RunningText";
import CardSkills from "./CardSkills";
import { CgIfDesign } from "react-icons/cg";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiHook } from "react-icons/gi";
import { GiPulleyHook } from "react-icons/gi";
import { SiRedux } from "react-icons/si";
import { GiMatterStates } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

const page = () => {
  return (
    <>
      <div style={list}>
        <div className="flex flex-col w-full h-full justify-center items-center ">
          <h1 className="text-4xl lg:text-6xl text-white font-Poppins font-bold">
            <RunningText />
          </h1>
          <p className="md:text-xl sm:text-lg lg:text-2xl text-white  font-Poppins mt-5 font-semibold">
            {" "}
            Frontend Developer & UI / UX Enthusiast
          </p>
          <p className="text-sm text-white  font-Poppins w-7/12 mt-3 text-center font-normal">
            I design, code and focused on minimal and clean design
          </p>
          <div className="flex flex-row space-x-6 mt-5">
            {" "}
            <BsFacebook className="text-white text-2xl hover:text-blue-900 cursor-pointer" />
            <RiInstagramFill className="text-white text-2xl hover:text-pink-500 cursor-pointer" />
            <BsTwitter className="text-white text-2xl" />
          </div>
        </div>
      </div>
      <div className="w-full h-[25rem] mt-2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl text-font-primary font-Poppins font-bold mb-10 underline">
          Summary
        </h1>

        <h2 className="text-font-primary font-semibold lg:text-4xl text-2xl text-center">
          Hi, i’m Tamasakti, nice to meet u
        </h2>
        <p className="text-center  w-10/12 lg:w-[70rem] lg:text-xl text-sm mt-10 text-font-primary font-normal">
          Since beginning my journey as a Graphic Designer more than 3 years in
          college, involved in various events and organization agenda. I’m also
          learning programming last 6 months, focused on front-end developing
          and UI/UX fields Eventually graduated from coding bootcamp and had
          experienced of building couple of projects using HTML, CSS,
          Javascript, React, and Typescript programming language
        </p>
      </div>
      <h1 className="text-4xl  font-Poppins font-bold text-font-primary text-center mb-10 underline">
        Technical Skills
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center mb-20">
        <CardSkills
          backTitle="Tools & Framework"
          icon={
            <>
              <CgIfDesign className="text-6xl text-white" />
            </>
          }
          title="Beautify Tools"
          icon1={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <SiAdobexd className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Adobe XD</span>
            </p>
          }
          icon2={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <CgFigma className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Figma</span>
            </p>
          }
          icon3={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <SiAdobephotoshop className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Photoshop</span>
            </p>
          }
          icon4={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <DiCss3 className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">CSS</span>
            </p>
          }
          icon5={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <SiTailwindcss className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Tailwind</span>
            </p>
          }
        />
        <CardSkills
          backTitle="Languages"
          icon={
            <>
              <AiFillCode className="text-6xl text-white" />
            </>
          }
          title="Programming Language"
          icon1={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <IoLogoJavascript className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Javascript</span>
            </p>
          }
          icon2={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <FaReact className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">React Js</span>
            </p>
          }
          icon3={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <SiTypescript className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Typescript</span>
            </p>
          }
          icon4={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <TbBrandNextjs className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Next.Js</span>
            </p>
          }
        />

        <CardSkills
          backTitle="State Management & Other Skills"
          icon={
            <>
              <GiMatterStates className="text-6xl text-white" />
            </>
          }
          title="State Management & Other Skills"
          icon1={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <GiHook className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">React Hooks</span>
            </p>
          }
          icon2={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <GiPulleyHook className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Context</span>
            </p>
          }
          icon3={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <SiRedux className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">Redux Toolkit</span>
            </p>
          }
          icon4={
            <p className=" text-white font-semibold p-2 rounded-lg">
              <span>
                <TbApi className="mx-auto mb-2 text-xl" />
              </span>
              <span className="text-md">API Integration</span>
            </p>
          }
        />
      </div>
    </>
  );
};
export default page;
