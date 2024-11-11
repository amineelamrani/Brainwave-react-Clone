import brainwave from "../assets/brainwave.svg";
import MenuSvg from "../assets/svg/MenuSvg";
import SignInButton from "./SignInButton";
import { useState } from "react";

// for that strange border I have come with an idea => having four different div one inside the other and for each one we display a border side (top or bottom ...) and we do that gradient principle as outlined

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const menu_style = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  function handleClick() {
    setOpenNav((tt) => !tt);
  }

  return (
    <header className="backdrop-blur-xl py-7 px-10 h-24 w-full flex items-center justify-between bg-primary-content/50 border-b-[1px] border-gray-500/50 fixed top-0 z-50 text-xs">
      <div className="">
        <a href="">
          <img src={brainwave} alt="" className="min-w-40" />
        </a>
      </div>

      <ul className="hidden lg:flex items-center md:gap-8 lg:gap-5 px-5 uppercase font-bold text-neutral-content">
        <li>
          <a className="transition hover:text-white" href="#">
            Features
          </a>
        </li>

        <li>
          <a className=" transition hover:text-white" href="#">
            Pricing
          </a>
        </li>

        <li>
          <a className=" transition hover:text-white " href="#">
            How to use
          </a>
        </li>

        <li>
          <a className="transition hover:text-white" href="#">
            roadmap
          </a>
        </li>
      </ul>

      <div className="flex items-center">
        <div className="hidden lg:flex md:gap-1 items-center">
          <a
            className="px-2 uppercase font-bold text-neutral-content transition hover:text-white"
            href="#"
          >
            new account
          </a>
          <SignInButton text="sign in" />
          {/* <div className="hidden sm:flex"> */}
        </div>

        <div className="block lg:hidden">
          {/* <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
          {/* <MenuSvg /> */}
          <SignInButton
            text={<MenuSvg openNavigation={openNav} />}
            handleClick={handleClick}
          />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
