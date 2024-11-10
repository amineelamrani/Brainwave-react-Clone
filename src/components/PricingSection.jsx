import stars from "../assets/pricing/stars.svg";
import small4 from "../assets/4-small.png";
import PricingElement from "./PricingElement";

export default function PricingSection() {
  return (
    <div className="w-full flex flex-col justify-center px-10">
      <div
        id="Pricing-Picture-shown-large-screen"
        className="hidden lg:flex justify-center py-24"
        style={{ backgroundImage: `url(${stars})` }}
      >
        <img src={small4} alt="" className="w-60" />
      </div>
      <div>
        <p className="text-base text-center pt-5">
          [ Get started with brainwave ]
        </p>
        <h1 className="text-white text-3xl lg:text-7xl text-center text-wrap leading-tight pb-14">
          Pay once, use forever
        </h1>
        <div
          id="pricing-plans-section"
          className="w-full flex flex-col md:flex-row gap-2"
        >
          <PricingElement
            plan="Basic"
            price={0}
            description="AI chatbot, personalized recommendations"
            features={[
              "An AI chatbot that can understand your queries",
              "Personalized recommendations based on your preferences",
              "Ability to explore the app and its features without any cost",
            ]}
          />
          <PricingElement
            plan="Premium"
            price={9.99}
            description="Advanced AI chatbot, priority support, analytics dashboard"
            features={[
              "An advanced AI chatbot that can understand complex queries",
              "An analytics dashboard to track your conversations",
              "Priority support to solve issues quickly",
            ]}
          />
          <PricingElement
            plan="Enterprise"
            price={"X"}
            description="Custom AI chatbot, advanced analytics, dedicated account"
            features={[
              "An AI chatbot that can understand your queries",
              "Personalized recommendations based on your preferences",
              "Ability to explore the app and its features without any cost",
            ]}
          />
        </div>
        <p className="uppercase text-center my-10 text-white font-bold underline underline-offset-4 cursor-pointer">
          SEE the full details
        </p>
      </div>
    </div>
  );
}
