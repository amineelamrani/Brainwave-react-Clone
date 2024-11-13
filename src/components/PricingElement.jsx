import check from "../assets/check.svg";
import ContactUsButton from "./ContactUsButton";

export default function PricingElement({ plan, price, description, features }) {
  return (
    <div className="w-full md:w-1/3 border-[1px] border-gray-500 rounded-2xl px-5 py-8">
      <h1
        className={`${plan === "Basic" && "text-yellow-500"} ${
          plan === "Premium" && "text-[#853cfa]"
        } ${plan === "Enterprise" && "text-red-500"} text-4xl pb-5`}
      >
        {plan}
      </h1>
      <p className="text-neutral-content font-bold pb-8">{description}</p>
      <h3
        className={`text-4xl text-white font-bold pb-8 flex items-center ${
          plan === "Enterprise" && "invisible"
        }`}
      >
        $<span className="text-7xl">{price}</span>
      </h3>
      {(plan === "Basic" || plan === "Premium") && (
        <button className="text-primary-content bg-white w-full py-2 rounded-xl font-bold hover:text-primary mb-8">
          GET STARTED
        </button>
      )}
      {plan === "Enterprise" && <ContactUsButton />}

      <ul>
        <li className="flex items-start gap-4 py-5 border-t-[1px] border-gray-500">
          <img src={check} alt="" />
          <h3 className="text-white">{features[0]}</h3>
        </li>
        <li className="flex items-start gap-4 py-5 border-t-[1px] border-gray-500">
          <img src={check} alt="" />
          <h3 className="text-white">{features[1]}</h3>
        </li>
        <li className="flex items-start gap-4 py-5 border-t-[1px] border-gray-500">
          <img src={check} alt="" />
          <h3 className="text-white">{features[2]}</h3>
        </li>
      </ul>
    </div>
  );
}
