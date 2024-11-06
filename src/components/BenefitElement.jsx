import robotImage from "../assets/benefits/image-2.png";
import card1 from "../assets/benefits/card-1.svg";

export default function BenefitElement() {
  // we will have a div with background the robot + a div inside it with the borderimage as its background + a div inside it for the text
  // the div of the borderImage will have an opacity that changes depending on the hover effect (when hovering it lowers the opacity to show what behind)
  return (
    <div
      id="bg-form-border"
      className="border w-1/2 bg-cover bg-no-repeat bg-center p-5"
      style={{ backgroundImage: `url(${card1})` }}
    >
      <div
        id="bg-robot"
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${robotImage})` }}
      >
        <div id="text-here" className="p-10 min-h-80">
          <h1 className="text-2xl text-white font-bold pb-5">Ask anything</h1>
          <p className="">
            Lets users quickly find answers to their questions without having to
            search through multiple sources
          </p>
        </div>
      </div>
    </div>
  );
}
