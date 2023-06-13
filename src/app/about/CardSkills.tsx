import React from "react";
import Image from "next/image";
import "./cardFlip.css";

interface CardProps {
  title: string;
  icon: JSX.Element;
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  icon3?: JSX.Element;
  icon4?: JSX.Element;
  icon5?: JSX.Element;
  icon6?: JSX.Element;
  backTitle: string;
}

const CardSkills = ({
  title,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  backTitle,
}: CardProps) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center space-y-3">
            <h2 className="font-Poppins text-lg text-white font-semibold ">
              {title}
            </h2>
            <div className="w-full flex justify-center">{icon}</div>
            <p className="text-sm text-white font-Poppins font-normal">
              Flip The Card to see{" "}
            </p>
          </div>
          <div className="flip-card-back flex items-center h-full flex-col justify-center">
            <h1 className="font-Poppins text-lg text-white font-semibold mt-2">
              {backTitle}
            </h1>
            <div className="grid grid-cols-3 mt-3">
              {icon1}
              {icon2}
              {icon3}
              {icon4}
              {icon5}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkills;
