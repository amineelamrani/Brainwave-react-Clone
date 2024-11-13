import robotImg from "../assets/hero/robot.jpg";
import loading01 from "../assets/loading.png";
import home from "../assets/home-smile.svg";
import file from "../assets/file-02.svg";
import search from "../assets/search-md.svg";
import plusSquare from "../assets/plus-square.svg";
import notifImage1 from "../assets/notification/image-1.png";
import notifImage2 from "../assets/notification/image-2.png";
import notifImage3 from "../assets/notification/image-3.png";
import notifImage4 from "../assets/notification/image-4.png";
import { useRef } from "react";

// How to do it :
// create div 1 => gradient
// create div 2 => blur
// create div3 => blurred also
//create a div with an absolute position and put it at the top of the divs

export default function RobotHeroHolder() {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  window.onscroll = scrollingEffect;

  function scrollingEffect() {
    let y = document.documentElement.scrollTop;
    if (y < 500) {
      myRef.current.style.top = `${y / 4 + 50}px`;
      myRef2.current.style.top = `${y / 4 + 100}px`;
    }
  }

  return (
    <div
      id="image-holder"
      className="relative h-[32rem] w-full mx-auto rounded-3xl"
    >
      <div className="bg-gradient-to-tr from-yellow-200 to-pink-600 h-[31.60rem] w-full rounded-3xl">
        <div className="h-10 backdrop-blur-xl bg-primary-content/80 rounded-t-3xl mx-[1px] sm:mx-1 translate-y-[1px]"></div>
        <div className="h-[29rem] backdrop-blur-xl bg-primary-content/50 mx-8 sm:mx-24 rounded-b-3xl"></div>

        <div className="h-[27rem] backdrop-blur-3xl bg-primary-content/80 mx-4 sm:mx-10 translate-y-[-29rem] rounded-b-3xl"></div>
      </div>
      <div
        className="absolute flex justify-center items-end top-10 left-[1px] sm:left-1 right-[1px] sm:right-1 h-[25rem] bg-cover bg-no-repeat bg-center rounded-b-3xl"
        style={{ backgroundImage: `url(${robotImg})` }}
      >
        <div className="flex gap-3 bg-black/70 w-11/12 sm:w-72 lg:w-96 px-5 py-3 rounded-3xl mb-8 text-white text-xl items-center">
          <img src={loading01} alt="" className="h-5" />
          <p>AI is generating</p>
        </div>

        <div
          id="home-file-search-icons"
          className="absolute top-1/2 -left-14 hidden lg:flex gap-8 px-8 py-7 rounded-2xl backdrop-blur-md bg-gray-500/20 items-center border-[1px] border-gray-500/20"
          style={{ top: "100px" }}
          ref={myRef2}
        >
          <img src={home} alt="" />
          <img src={file} alt="" />
          <img src={search} alt="" />
          <img src={plusSquare} alt="" />
        </div>

        <div
          id="code-generation-icon-section"
          className="hidden lg:flex absolute -right-14 gap-4 px-5 py-5 rounded-2xl backdrop-blur-md bg-gray-500/20 items-center border-[1px] border-gray-500/20"
          ref={myRef}
          style={{ top: "50px" }}
        >
          <img src={notifImage1} alt="" className="h-14 rounded-xl" />
          <div className="flex flex-col gap-1">
            <p className="text-white font-extrabold text-xl pr-5">
              Code generation
            </p>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img src={notifImage4} alt="" className="h-7 rounded-full" />
                <img src={notifImage3} alt="" className="h-7 rounded-full" />
                <img src={notifImage2} alt="" className="h-7 rounded-full" />
              </div>
              <p className="text-gray-500">1m ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 "></div> */}
    </div>
  );
}
