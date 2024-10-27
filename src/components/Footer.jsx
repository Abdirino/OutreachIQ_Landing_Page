// import { resourcesLinks, platformLinks, communityLinks } from "../constants";
// import SocialX from "../assets/social-x.svg"
// import SocialInstagram from "../assets/social-insta.svg"
// import SocialLinkedIn from "../assets/social-linkedin.svg"
// import SocialPin from "../assets/social-pin.svg"
// import SocialYouTube from "../assets/social-youtube.svg"
import Logo from "../assets/website icon.png"

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="">
        <div className=" inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#fd8fe)] before:absolute">
          <img src={Logo} alt="LogoSaaS" className="relative h-28 w-28" />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-3">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Updates</a>
          <a href="#">Policy</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6">
          {/* <SocialX />
          <SocialInstagram />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYouTube /> */}
        </div>
        <p className="mt-6">&copy; 2024 OutreachIQ Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
