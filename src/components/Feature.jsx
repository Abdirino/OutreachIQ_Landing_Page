const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-[#f1c40f] rounded-md h-6 text-sm font-medium py-3 px-3 uppercase tracking-wide">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-7 lg:mt-20 tracking-wide text-black">
          Unlock the power of
          <span className="bg-gradient-to-r from-[#2ecc71] to-[#268f52] bg-clip-text text-transparent">
            {" "}
            AI-driven sales automation.
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Feature;
