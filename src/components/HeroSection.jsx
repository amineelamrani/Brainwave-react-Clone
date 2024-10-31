import React from "react";
import yourlogo from "../assets/yourlogo.svg";
import curve from "../assets/hero/curve.png";
import RobotHeroHolder from "./RobotHeroHolder";

/*   Outline it :
1. we will create that text : a fixed pt + a z-20 + immediately that image  of the robot
2. The circles chof how to do them + some circles(like planets) chattered (they will be hidden in md) / I tink they will have the same width
3. the image in the background taken all the width

*/

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center">
      <div
        id="top-layer text-and-image"
        className="py-36 flex flex-col items-center px-14 md:px-24 lg:px-36"
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

        <div>
          <h2>Helping people create beautiful content at</h2>
          <div>
            <img src={yourlogo} alt="" />
            <img src={yourlogo} alt="" />
            <img src={yourlogo} alt="" />
            <img src={yourlogo} alt="" />
            <img src={yourlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
