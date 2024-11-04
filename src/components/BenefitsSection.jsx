import BenefitElement from "./BenefitElement";

export default function BenefitsSection() {
  return (
    <div className="flex flex-col items-center py-14 px-14 md:px-24 lg:px-36 justify-center">
      <h1 className="text-white text-7xl font-bold text-center text-wrap leading-tight pb-10">
        Chat Smarter, Not Harder with Brainwave
      </h1>
      <div>
        <BenefitElement />
      </div>
    </div>
  );
}
