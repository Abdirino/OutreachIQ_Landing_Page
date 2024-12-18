import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="container px-10 mt-40">
      <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl mx-5 text-clip my-8 tracking-wide">
        Pricing
      </h1>
      <div className="flex flex-wrap items-end justify-end">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-[#dbdada] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
              <span className="text-3xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r text-xl pl-2 from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
                    (Most Popular)
                  </span>
                )}
              </span>
              <p className="mb-8">
                <h1 className="text-5xl mt-6 mr-2">{option.price}</h1>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 size={24}/>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20
               tracking-tight text-xl hover:bg-[#f1c40f] border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] transition duration-200"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
