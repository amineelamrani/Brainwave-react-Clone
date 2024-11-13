import React from "react";
import yourlogo from "../assets/yourlogo.svg";
import curve from "../assets/hero/curve.png";
import RobotHeroHolder from "./RobotHeroHolder";
import heroBg from "../assets/hero/hero-background.jpg";
import stars from "../assets/pricing/stars.svg";

/*   Outline it :
1. we will create that text : a fixed pt + a z-20 + immediately that image  of the robot
2. The circles chof how to do them + some circles(like planets) chattered (they will be hidden in md) / I tink they will have the same width
3. the image in the background taken all the width

*/

export default function HeroSection() {
  return (
    <div className="mx-auto relative">
      <p className="hidden md:flex absolute -top-4 -left-2 text-xl z-40 font-bold">
        +
      </p>
      <p className="hidden md:flex absolute -top-4 -right-2 text-xl z-40 font-bold">
        +
      </p>
      <div className="mx-auto flex flex-col relative items-center overflow-y-clip ">
        <div
          id="top-layer text-and-image"
          className="container pt-36 flex flex-col items-center px-14 md:px-24 lg:px-36 justify-center z-30 "
        >
          <h1 className="text-white text-7xl font-bold text-center text-wrap  leading-tight ">
            Explore the Possibilites of AI Chatting with{" "}
            <span
              className="bg-contain bg-no-repeat bg-bottom pb-2"
              style={{ backgroundImage: `url(${curve})` }}
            >
              Brainwave
            </span>
          </h1>

          <p className="pt-10 pb-16 text-center text-2xl">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <button className="bg-white text-primary-content px-8 py-3 mb-16 rounded-lg hover:text-primary font-bold uppercase">
            GET STARTED
          </button>

          <RobotHeroHolder />

          <div className="hidden lg:flex lg:flex-col py-5 items-center">
            <h2 className="uppercase font-bold text-neutral-content text-xl py-14">
              Helping people create beautiful content at
            </h2>
            <div className="flex justify-between w-full gap-10">
              <img src={yourlogo} alt="" />
              <img src={yourlogo} alt="" />
              <img src={yourlogo} alt="" />
              <img src={yourlogo} alt="" />
              <img src={yourlogo} alt="" />
            </div>
          </div>
        </div>

        <div
          id="robot-background"
          className="absolute top-0 right-0 left-0 z-0"
        >
          <img src={heroBg} alt="" className="w-full" />
        </div>

        <div className="absolute top-0 right-0 left-0 z-10 bottom-0 bg-gradient-to-t from-primary-content to-transparent"></div>

        <div
          id="stars-background-holder"
          className="hidden md:flex absolute top-0 h-screen z-20 w-full lg:border-b-[1px] lg:border-gray-500/50"
        >
          <img src={stars} alt="" />
          <p className="hidden lg:flex absolute -bottom-3 -left-2 text-xl font-bold z-50">
            +
          </p>
          <p className="hidden lg:flex absolute -bottom-3 -right-2 text-xl font-bold z-50">
            +
          </p>
        </div>

        <div
          id="orbite-background-holder"
          className="absolute top-14 z-10 border-[1px] p-24 border-gray-500 rounded-full opacity-45"
        >
          <div className="border-[1px] p-44 border-gray-500 rounded-full">
            <div className="border-[1px] p-44 border-gray-500 rounded-full">
              <div className="border-[1px] p-24 border-gray-500 rounded-full">
                <div className="w-14 h-14 border-[1px] p-24 border-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
