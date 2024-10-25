import { CheckCircle2 } from "lucide-react";
import codeIMG from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-4xl mx-5 text-center lg:text-5xl text-clip mt-6 mb-12 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
          {" "}
          AI-Powered OutreachIQ
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
            <img src={codeIMG} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                    <div className="text-green-600 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                        <p className="text-md text-neutral-700">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
