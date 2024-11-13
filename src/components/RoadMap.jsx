import React from "react";
import SignInButton from "./SignInButton";
import MilestoneElement from "./MilestoneElement";
import image1 from "../assets/roadmap/image-1.png";
import image2 from "../assets/roadmap/image-2.png";
import image3 from "../assets/roadmap/image-3.png";
import image4 from "../assets/roadmap/image-4.png";
import gradientEffect from "../assets/gradient.png";

export default function RoadMap() {
  return (
    <div className="container mx-auto w-full px-10 pb-24 flex flex-col items-center relative">
      <p className="text-xl text-center pt-10">[ ready to get started ]</p>
      <h1 className="text-white text-3xl lg:text-7xl text-center text-wrap leading-tight pt-5 pb-10">
        What we're working on
      </h1>
      <div className="mb-14 md:mb-44 w-full flex flex-row flex-wrap">
        <MilestoneElement
          highlighted={true}
          image={image1}
          title="Voice recognition"
          text="Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
        />
        <MilestoneElement
          wrapIt={true}
          image={image2}
          title="Gamification"
          text="Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
        />
        <MilestoneElement
          image={image3}
          title="Chatbot customization"
          text="Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
        />
        <MilestoneElement
          image={image4}
          wrapIt={true}
          title="Integration with APIs"
          text="Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."
        />
      </div>
      <SignInButton text="our roadmap" />
      <div className="absolute top-24 -left-96 opacity-15">
        <img src={gradientEffect} alt="" className="h-[700px]" />
      </div>
    </div>
  );
}
