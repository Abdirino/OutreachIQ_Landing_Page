import { features } from "../constants";

const Feature = () => {
  return (
    <div className="flex flex-col items-center m-20 border-b border-neutral-800 min-h-[800px] max-w-[1800px]">
      <div className="text-center">
        <span className="bg-[#f1c40f] border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] h-6 text-sm font-medium py-3 px-3 uppercase tracking-wide">
          Features
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-7 mx-5 lg:mt-20 tracking-wide">
          Get Results,
          <span className="bg-gradient-to-r from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
            {" "}
            Not Complex Tools.
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-5 lg:mt-32">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex justify-center">
              <div className="flex mx-6 h-10 w-10 text-[#3b82f6] justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-2xl text-[#268f52]">
                  {feature.text}
                </h5>
                <p className="text-md mb-20 text-neutral-700">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
