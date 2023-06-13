"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { RiChatForwardFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";

type formvalues = {
  name: string;
  email: string;
  message: string;
};
const Form = () => {
  const form = useForm<formvalues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { register, formState, watch } = form;
  return (
    <div className="w-[80%] shadow-lg mx-auto flex flex-row justify-center items-center rounded-lg">
      <div className="w-10/12 lg:w-[85%] bg-white h-[40rem] flex flex-col justify-center lg:ml-20">
        <h1 className="text-4xl text-font-primary font-bold font-Poppins">
          Contact Me
        </h1>
        <p className="w-10/12 lg:w-6/12 font-normal font-Poppins mt-3">
          Feel free to contact me any time. We will get back to you as soon as i
          can
        </p>
        <form className="flex flex-col mt-5 space-y-3 10/12 lg:w-8/12">
          <label className="font-Poppins font-normal">Name</label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Please tell me your name",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-2 mt-2 p-2"
          />
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please put valid email format with (@)",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-2 mt-2 p-2"
          />
          <label>Message</label>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Please tell your intention",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-8 mt-2 p-2"
          ></textarea>
          <button className="bg-font-primary text-white border-2 border-font-primary p-3 font-Poppins font-semibold hover:bg-white hover:text-font-primary rounded-lg">
            SEND
          </button>
        </form>
      </div>
      <div className="hidden lg:w-[15%] bg-font-primary h-[40rem] transition-all duration-300 ease-in-out"></div>
      {/* <div
        className={`${
          !active
            ? "w-[15%] bg-white h-[40rem] transition-all duration-300 ease-in-out"
            : "w-[40%] bg-font-primary h-[40rem] transition-all duration-300 ease-in"
        }`}
      >
        {!active ? (
          ""
        ) : (
          <div className="space-y-5 ml-4">
            <h1 className="text-white font-bold font-Poppins text-4xl">Info</h1>
            <div className="flex flex-row space-x-5">
              <MdEmail className="text-white text-2xl" />
              <p className="text-white text-lg">gumilangtamasakti@gmail.com</p>
            </div>
            <div className="flex flex-row space-x-5">
              <BsFillPhoneVibrateFill className="text-white text-2xl" />
              <p>+62-897-92440-266</p>
            </div>
            <div className="flex flex-row space-x-5">
              <BiCurrentLocation className="text-white text-2xl" />
              <p>Sukabumi, Jawa Barat</p>
            </div>
            <div className="flex flex-row space-x-5">
              <TfiLinkedin className="text-white text-2xl" />
              <p>linkedin/in/tamasakti</p>
            </div>
          </div>
        )}

        <div className="w-full h-full flex justify-start items-center">
          {!active ? (
            <BsFillArrowLeftSquareFill
              onClick={handleClick}
              className=" text-font-primary text-2xl cursor-pointer"
            />
          ) : (
            <RiChatForwardFill
              onClick={handleClick}
              className=" text-white text-2xl cursor-pointer"
            />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Form;
