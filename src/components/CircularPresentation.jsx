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
    <div className="my-36 flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div
          id="outer-circle"
          className="flex justify-center items-center border-[1px] border-gray-500 p-24 rounded-full origin-center"
        >
          <div
            id="circle1-logo"
            className="border-[1px] border-gray-500 p-16 rounded-full flex justify-center items-center"
          >
            <SignInButton
              text={<img src={brainwaveLogo} className="min-h-16 min-w-16" />}
              full={true}
            />
          </div>
          <img
            src={figmaLogo}
            alt=""
            className="absolute -top-16 scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content"
          />
          <img
            src={discordLogo}
            alt=""
            className="absolute scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content -right-16"
          />
          <img
            src={framerLogo}
            alt=""
            className="absolute scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content -left-16"
          />
          <img
            src={psLogo}
            alt=""
            className="absolute scale-50 border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content -bottom-16"
          />
          <img
            src={notionLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-50 top-0 right-0"
          />
          <img
            src={raindropLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl-[1px] p-7 bg-primary-content scale-50 top-0 left-0"
          />
          <img
            src={protopieLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-50 bottom-0 left-0"
          />
          <img
            src={slackLogo}
            alt=""
            className="absolute border-[1px] border-gray-500 rounded-2xl p-7 bg-primary-content scale-50 bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}
