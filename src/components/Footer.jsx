import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import Logo from "../assets/website icon.png";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="">
        <div className=" inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#fd8fe)] before:absolute">
          <img src={Logo} alt="LogoSaaS" className="relative h-24 w-24" />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Updates</a>
          <a href="#">Policy</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 m-8 text-3xl">
          <FaLinkedin className="cursor-pointer" />
          <FaFacebookSquare className="cursor-pointer" />
          <FaSquareXTwitter className="cursor-pointer" />
          <FaSquareInstagram className="cursor-pointer" />
          <AiFillTikTok className="cursor-pointer" />
          <FaYoutubeSquare className="cursor-pointer" />
        </div>
        <p className="mt-6">&copy; 2024 OutreachIQ Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
