import robotImage from "../assets/benefits/image-2.png";
import card1 from "../assets/benefits/card-1.svg";

export default function BenefitElement() {
  // we will have a div with background the robot + a div inside it with the borderimage as its background + a div inside it for the text
  // the div of the borderImage will have an opacity that changes depending on the hover effect (when hovering it lowers the opacity to show what behind)
  return (
    <div
      id="bg-form-border"
      className="relative min-w-96 w-full md:w-1/2 lg:w-1/3 bg-cover bg-no-repeat bg-center rounded-3xl"
      style={{
        backgroundImage: `url(${card1})`,
        clipPath: "polygon(90% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
      }}
    >
      <div
        id="bg-robot"
        className="bg-cover bg-no-repeat bg-center rounded-3xl opacity-0 hover:opacity-20 min-h-96 transition ease-in duration-600"
        style={{ backgroundImage: `url(${robotImage})` }}
      ></div>

      <div id="text-here" className="p-10 top-0 left-0 absolute">
        <h1 className="text-3xl text-white pb-5">Ask anything</h1>
        <p className="text-xl">
          Lets users quickly find answers to their questions without having to
          search through multiple sources
        </p>
      </div>
    </div>
  );
}
