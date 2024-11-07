import robotImage from "../assets/benefits/image-2.png";
import gradientImage from "../assets/gradient.png";
import { useState } from "react";

export default function BenefitElement({
  title,
  cardId,
  text,
  iconId,
  styled = false,
}) {
  const [hovering, setHovering] = useState(false);

  function handleHover() {
    setHovering(true);
  }

  function handleLeave() {
    setHovering(false);
  }

  return (
    <div
      className=" mx-7 my-5"
      style={{
        boxShadow: styled ? "110px 20px 70px -60px rgb(26, 21, 60)" : "",
      }}
    >
      <div
        id="bg-form-border"
        className="relative bg-cover bg-no-repeat bg-center rounded-3xl min-h-96 h-[383.993px] w-[402.292px] bg-primary-content"
        style={{
          backgroundImage: `url(${cardId})`,
          clipPath: "polygon(90% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <div
          id="bg-robot"
          className={`bg-cover bg-no-repeat bg-center rounded-3xl ${
            hovering ? "opacity-20" : "opacity-0"
          } min-h-96 transition ease-in duration-600 `}
          style={{ backgroundImage: `url(${robotImage})` }}
        ></div>

        <div
          id="text-here"
          className="p-10 top-0 left-0 absolute right-0"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <h1 className="text-3xl text-white pb-5">{title}</h1>
          <p className="text-xl">{text}</p>
          <div className="flex justify-between pb-10 items-center absolute inset-x-0 px-12 top-72">
            <img src={iconId} alt="" />
            <div>
              <h2 className="font-bold text-white uppercase">
                Explore more <span className="pl-3 text-xl">{" >"}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// h-[383.993px] w-[402.292px]
