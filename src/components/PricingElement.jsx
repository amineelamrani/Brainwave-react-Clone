import check from "../assets/check.svg";
import ContactUsButton from "./ContactUsButton";
import SignInButton from "./SignInButton";

export default function PricingElement({ plan, price }) {
  return (
    <div className="w-full md:w-1/3 border-[1px] border-gray-500 rounded-2xl px-5 py-14">
      <h1
        className={`${plan === "Basic" && "text-yellow-500"} ${
          plan === "Premium" && "text-[#853cfa]"
        } ${plan === "Enterprise" && "text-red-500"} text-4xl pb-5`}
      >
        {plan}
      </h1>
      <p className="text-neutral-content font-bold pb-8">
        AI chatbot, personalized recommendations
      </p>
      <h3
        className={`text-4xl text-white font-bold pb-8 flex items-center ${
          plan === "Enterprise" && "invisible"
        }`}
      >
        $<span className="text-8xl">{price}</span>
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
          <h3 className="text-white">
            An AI chatbot that can understand your queries
          </h3>
        </li>
        <li className="flex items-start gap-4 py-5 border-t-[1px] border-gray-500">
          <img src={check} alt="" />
          <h3 className="text-white">
            Personalized recommendations based on your preferences
          </h3>
        </li>
        <li className="flex items-start gap-4 py-5 border-t-[1px] border-gray-500">
          <img src={check} alt="" />
          <h3 className="text-white">
            Ability to explore the app and its features without any cost
          </h3>
        </li>
      </ul>
    </div>
  );
}
