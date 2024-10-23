import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-20">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Boost Your Sales with
        <span className="bg-gradient-to-r from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
          {" "}
          AI-Powered OutreachIQ
        </span>
      </h1>
      <p className="mt-10 text-2xl sm:text-lg text-center text-neutral-600 max-w-4xl">
        Automate tasks, personalize emails, and close more deals.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-[#f1c40f] py-3 px-4 mx-3 rounded-md"
        >
          Start Your Free 7-Day Trial
        </a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">
          Explore Plans
        </a>
      </div>
      <div className="flex my-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border shadow-[#f1c40f] mx-2 my4"
        >
          {" "}
          <source src={Video1} type="video/mp4" />{" "}
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-[#f1c40f] mx-2 my4"
        >
          {" "}
          <source src={Video2} type="video/mp4" />{" "}
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Hero;
