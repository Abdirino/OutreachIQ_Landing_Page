const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-[#826afb]">
      <form className="max-w-[600px] w-full bg-white p-10 rounded-md text-gray-700 m-10">
        <h2 className="text-[30px] text-center">Contact US</h2>
        <div className="mt-5">
          <label>Full Name</label>
          <input
            type="text"
            className="w-full h-5 bg-transparent border border-gray-400 outline-none rounded-sm p-2 text-[16px] text-gray-700 mt-2"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="inputBox">
          <label>Email Address</label>
          <input
            type="email"
            className="w-full h-5 bg-transparent border border-gray-400 outline-none rounded-sm p-2 text-[16px] text-gray-700 mt-2"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="inputBox">
          <label>Your Message</label>
          <textarea
            name=""
            id=""
            className="w-full h-[200px] resize-none bg-transparent border border-gray-400 outline-none rounded-sm p-2 text-[16px] text-gray-700 mt-2"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button className="w-full h-[55px] bg-[#826afb] rounded-sm cursor-pointer text-[16px] text-white font-bold mt-5" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
