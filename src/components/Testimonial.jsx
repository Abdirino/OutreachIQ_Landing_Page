import { testimonials } from "../constants";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="px-10 lg:px-20 tracking-wide mt-10 lg:mt-20 max-w-[1200px] text-center">
      <span className="bg-[#f1c40f] border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] h-6 text-lg font-medium py-2 px-3 uppercase tracking-wide">
        Testimonials
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 mx-5 lg:mt-20 tracking-wide">
        What our
        <span className="bg-gradient-to-r from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
          {" "}
          customers say.
        </span>
      </h1>

      <div className="flex flex-wrap mt-10 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md text-md border border-neutral-200 font-thin relative isolate py-8 px-4 shadow-lg transition-all">
              <Quote className="absolute right-2 top-2 bottom-5"/>
              <p className="text-start mt-5">{testimonial.text}</p>
              <div className="flex flex-col gap-2 mt-10 items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 h-12 mr-3 rounded-full border border-neutral-300"
                />
                <div className=" flex flex-col">
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="max-w-[1200px] m-auto p-10 text-center">

    //   {testimonials.map((testimonial, index) => (
    //     <div key={index}>
    //       <div className="grid grid-cols-3 gap-6">
    //         <div className="relative isolate hidden py-8 px-4 bg-white rounded-md shadow-lg transition-all">
    //           <span>
    //             <i className="ri-double-quotes-l"></i>
    //           </span>
    //           <h4>Love the simplicity</h4>
    //           <p>
    //             They understood our brand and created stunning website designs.
    //             Professional, responsive, and om-time delivery. Highly
    //             recommend!
    //           </p>
    //           <img
    //             src={testimonial.image}
    //             alt={testimonial.user}
    //             className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
    //           />
    //           <h6>{testimonial.user}</h6>
    //           <span className="text-sm font-normal italic text-neutral-600">
    //             {testimonial.company}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Testimonial;
