import SignInButton from "./SignInButton";
import brainwaveLogo from "../assets/brainwave-symbol.svg";
import notionLogo from "../assets/collaboration/notion.png";
import discordLogo from "../assets/collaboration/discord.png";
import figmaLogo from "../assets/collaboration/figma.png";
import framerLogo from "../assets/collaboration/framer.png";
import psLogo from "../assets/collaboration/photoshop.png";
import raindropLogo from "../assets/collaboration/raindrop.png";
import protopieLogo from "../assets/collaboration/protopie.png";
import slackLogo from "../assets/collaboration/slack.png";

export default function CircularPresentation() {
  return (
    <div className="my-10 sm:my-36 flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div
          id="outer-circle"
          className="flex justify-center items-center border-[1px] border-gray-500/50 p-16 sm:p-24 rounded-full origin-center"
        >
          <div
            id="circle1-logo"
            className="border-[1px] border-gray-500/50 p-10 sm:p-16 rounded-full flex justify-center items-center"
          >
            <SignInButton
              text={
                <img
                  src={brainwaveLogo}
                  className="min-h-10 min-w-10 sm:min-h-16 sm:min-w-16"
                />
              }
              full={true}
            />
          </div>
          <img
            src={figmaLogo}
            alt=""
            className="absolute -top-14 sm:-top-16 scale-[0.4] sm:scale-50 border-[1px] border-gray-500 rounded-2xl p-5 sm:p-7 bg-primary-content"
          />
          <img
            src={discordLogo}
            alt=""
            className="absolute scale-[0.4] sm:scale-50 border-[1px] border-gray-500 rounded-2xl p-7 sm:p-7 bg-primary-content -right-14 sm:-right-16"
          />
          <img
            src={framerLogo}
            alt=""
            className="absolute scale-[0.4] sm:scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content -left-14 sm:-left-16"
          />
          <img
            src={psLogo}
            alt=""
            className="absolute scale-[0.4] sm:scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content -bottom-14 sm:-bottom-16"
          />
          <img
            src={notionLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-[0.4] sm:scale-50 -top-4 -right-4 sm:top-0 sm:right-0"
          />
          <img
            src={raindropLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-[0.4] sm:scale-50 -top-4 -left-4 sm:top-0 sm:left-0"
          />
          <img
            src={protopieLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-[0.4] sm:scale-50 bottom-0 -left-5 sm:bottom-0 sm:left-0"
          />
          <img
            src={slackLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-[0.4] sm:scale-50 bottom-0 -right-5 sm:bottom-0 sm:right-0"
          />
        </div>
      </div>
    </div>
  );
}
