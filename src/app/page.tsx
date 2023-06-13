"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen">
        <div>
          <div className="max-w-6xl  mx-auto flex flex-col-reverse md:flex-col-reverse sm:flex-col-reverse lg:flex-row w-full min-h-screen">
            <div className="flex flex-1  justify-center items-center flex-col relative">
              <h1 className="w-10/12 lg:max-w-md lg:mt-0 -mt-24 font-bold font-Poppins text-2xl  lg:text-4xl leading-relaxed">
                Front-End Developers & UI/UX Enthusiast
              </h1>
              <p className="w-10/12 lg:max-w-md font-normal font-Poppins text-sm mt-5 leading-loose">
                Hi, Im Tama, Passionate Front-End Developer & UI/UX Enthusiast
                <br />
                Based in Indonesia
              </p>
              <div className="w-10/12 lg:ml-8 float-left mt-8 ">
                <Link href="/cv.pdf" target="_blank">
                  <button className="bg-black text-white text-sm p-4 border-2 border-black font-Poppins rounded-lg hover:border-black hover:border-2 hover:bg-white hover:text-black hover:duration-200 hover:transition hover:ease-out">
                    {" "}
                    Download My CV
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center ">
              <Image
                src="/imga.webp"
                width={400}
                height={400}
                alt="image right"
                className="mix-blend-multiply lg:flex w-9/12 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
