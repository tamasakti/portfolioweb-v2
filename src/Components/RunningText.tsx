"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const RunningText = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hi, I am Tama")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2000)
          .deleteAll()
          .callFunction(() => {
            console.log("All Strings were deleted");
          })
          .start();
      }}
    />
  );
};

export default RunningText;
