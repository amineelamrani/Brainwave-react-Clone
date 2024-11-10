import service1 from "../assets/services/service-1.png";
import service2 from "../assets/services/service-2.png";
import gradientEffect from "../assets/gradient.png";
import check from "../assets/check.svg";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing";

export default function ServicesSection() {
  return (
    <div className="w-full h-full px-10">
      <h1 className="text-white text-3xl lg:text-7xl text-center text-wrap leading-tight pb-5 md:mx-40 lg:mx-64">
        Generative AI made for creators.
      </h1>
      <p className="pb-16 text-center text-xl">
        Brainwave unlocks the potential of AI-powered applications
      </p>
      <div
        id="first-image"
        className="border-[1px] border-gray-500 relative w-full flex justify-end rounded-2xl"
      >
        {/* div for the image make it absolute
        div for the content also absolute
        div for the gradient in the background make it also absolute but with a z-index lower than the background image
        */}
        <img
          src={service1}
          alt=""
          className="absolute top-0 bottom-0 left-0 w-full md:w-1/2 h-full z-10"
        />
        <img
          src={gradientEffect}
          alt=""
          className="absolute top-0 bottom-0 left-0 w-full md:w-1/2 h-full z-0"
        />
        <div className="py-44 z-20 pr-0 md:pr-16 flex w-3/4 md:w-5/12 flex-col">
          <h1 className="text-3xl text-white font-bold pb-5">Smartest AI</h1>
          <p className="text-xl  pb-5">
            Brainwave unlocks the potential of AI-powered applications
          </p>
          <ul>
            <li className="flex gap-4 py-5 border-t-[1px] border-gray-500">
              <img src={check} alt="" />
              <h3 className="text-white">Photo generating</h3>
            </li>
            <li className="flex gap-4 py-5 border-t-[1px] border-gray-500">
              <img src={check} alt="" />
              <h3 className="text-white">Photo enhance</h3>
            </li>
            <li className="flex gap-4 py-5 border-t-[1px] border-gray-500">
              <img src={check} alt="" />
              <h3 className="text-white">Seamless integration</h3>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="w-full my-5 flex flex-col lg:flex-row gap-5"
        id="div-two-slides"
      >
        <div
          id="left-side"
          className="w-full lg:w-1/2 h-[680px] border-[1px] border-gray-500 rounded-2xl flex items-end relative"
        >
          <div className="px-16 pb-16 pt-96 z-10 rounded-b-2xl bg-gradient-to-t from-black/80 to-black/0">
            <h1 className="text-4xl text-white py-5">Photo editing</h1>
            <p className="text-xl">
              Automatically enhance your photos using AI app's photo editing
              feature. Try it now!
            </p>
          </div>
          <img
            src={service2}
            alt=""
            className="w-full h-full absolute z-0 rounded-2xl"
          />
          <div className="absolute top-20 right-5 md:right-24 bg-black text-white mx-5 p-5 w-72 rounded-xl flex">
            <h1 className="text-xl">Hey Brainwave, enhance this photo</h1>
            <div className="absolute bottom-0 -right-4">
              <ChatBubbleWing />
            </div>
          </div>
        </div>

        <div
          id="right-side"
          className="w-full lg:w-1/2 h-[680px] rounded-2xl bg-base-100"
        >
          <div>
            <h1>Video generation</h1>
            <p>
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
