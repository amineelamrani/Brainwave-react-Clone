import check from "../assets/check.svg";
import CircularPresentation from "./CircularPresentation";
import SignInButton from "./SignInButton";
import curve from "../assets/collaboration/curve-1.svg";
import curve2 from "../assets/collaboration/curve-2.svg";

export default function Collaboration() {
  return (
    <div className="container relative flex flex-col lg:flex-row gap-14 lg:gap-24 mx-auto w-full py-14 lg:py-24 px-10 md:px-24">
      <div
        id="Seamless-collaboration"
        className="w-full lg:w-1/2 pt-5 lg:pt-10"
      >
        <h1 className="text-3xl sm:text-5xl text-white font-bold pb-10">
          AI Chat App for seamless collaboration
        </h1>
        <ul>
          <li className="flex flex-col py-5">
            <div className="flex gap-4 pb-4">
              <img src={check} alt="" />
              <h3 className="text-white">Seamless Integration</h3>
            </div>
            <p>
              With smart automation and top-notch security, it's the perfect
              solution for teams looking to work smarter.
            </p>
          </li>
          <li className="flex gap-4 py-5">
            <img src={check} alt="" />
            <h3 className="text-white">Smart Automation</h3>
          </li>
          <li className="flex gap-4 py-5">
            <img src={check} alt="" />
            <h3 className="text-white">Top-notch Security</h3>
          </li>
        </ul>
        <div className="flex py-10">
          <SignInButton text="TRY IT NOW" />
        </div>
      </div>
      <div id="collaboration-representation" className="w-full lg:w-1/2 pb-10">
        <p>
          With smart automation and top-notch security, it's the perfect
          solution for teams looking to work smarter.
        </p>
        <div
          id="circular-presentation"
          className="flex justify-center items-center"
        >
          <CircularPresentation />
        </div>
      </div>
      <img
        src={curve}
        alt=""
        className="hidden lg:block absolute bottom-80 right-1/2 translate-x-14"
      />
      <img
        src={curve2}
        alt=""
        className="hidden lg:block absolute bottom-[430px] -right-5"
      />
    </div>
  );
}
