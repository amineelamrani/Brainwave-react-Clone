import brainwave from "../assets/brainwave.svg";
import MenuSvg from "../assets/svg/MenuSvg";
import SignInButton from "./SignInButton";

// for that strange border I have come with an idea => having four different div one inside the other and for each one we display a border side (top or bottom ...) and we do that gradient principle as outlined

export default function NavBar() {
  return (
    <header className="py-7 px-10 w-full flex items-center justify-between border-b-[1px] border-gray-500">
      <div className="">
        <a href="">
          <img src={brainwave} alt="" className="min-w-40" />
        </a>
      </div>

      <ul className="hidden md:flex items-center md:gap-10 lg:gap-5 px-5 uppercase font-bold text-neutral-content">
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
          <a className=" transition hover:text-white" href="#">
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
        <div className="hidden md:flex md:gap-1 items-center">
          <a
            className="px-2 uppercase font-bold text-neutral-content transition hover:text-white"
            href="#"
          >
            new account
          </a>
          <SignInButton />
          {/* <div className="hidden sm:flex"> */}
        </div>

        <div className="block md:hidden">
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
          <MenuSvg />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
