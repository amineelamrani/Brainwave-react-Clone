import BenefitElement from "./BenefitElement";
import card1 from "../assets/benefits/card-1.svg";
import icon1 from "../assets/benefits/icon-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import icon2 from "../assets/benefits/icon-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import icon3 from "../assets/benefits/icon-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import icon4 from "../assets/benefits/icon-4.svg";

export default function BenefitsSection() {
  return (
    <div className="flex flex-col items-center py-10 sm:py-14 justify-center sm:border-b-[1px] border-gray-500/50 relative">
      <p className="hidden md:flex absolute -bottom-3 -left-2 text-xl font-bold">
        +
      </p>
      <p className="hidden md:flex absolute -bottom-3 -right-2 text-xl font-bold">
        +
      </p>
      <div className="container mx-auto">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold text-center text-wrap leading-tight pb-10 px-5">
          Chat Smarter, Not Harder with Brainwave
        </h1>
        <div className="flex flex-wrap w-full justify-center">
          <BenefitElement
            title="Ask anything"
            text="Lets users quickly find answers to their questions without having to search through multiple sources."
            cardId={card1}
            iconId={icon1}
          />
          <BenefitElement
            title="Improve everyday"
            text="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
            cardId={card2}
            iconId={icon2}
            styled={true}
          />
          <BenefitElement
            title="Connect everywhere"
            text="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
            cardId={card3}
            iconId={icon3}
          />
          <BenefitElement
            title="Fast responding"
            text="Lets users quickly find answers to their questions without having to search through multiple sources."
            cardId={card4}
            iconId={icon4}
            styled={true}
          />
          <BenefitElement
            title="Ask anything"
            text="Lets users quickly find answers to their questions without having to search through multiple sources."
            cardId={card1}
            iconId={icon1}
          />
          <BenefitElement
            title="Improve everyday"
            text="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
            cardId={card2}
            iconId={icon2}
          />
        </div>
      </div>
    </div>
  );
}
