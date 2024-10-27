import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b-[#778fb663]">
      <div className="text-center w-full p-2 bg-black">
        <h6 className="text-white font-light lg:text-sm text-xs tracking-wide">
          Automate. Engage. Convert Smarter | Get started now for only $19/m →
        </h6>
      </div>
      <div className="container px-4 m-auto relative text-sm">
        <div className="flex lg:justify-around justify-between items-center">
          <div className="flex items-center justify-center flex-shrink-0">
            <a href="#">
              <img className="w-24 h-24" src={logo} alt="" />
            </a>
            {/* <span className="text-xl tracking-tight font-bold">OutreachIQ</span> */}
          </div>
          <ul className="hidden lg:flex ml-10 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="text-[15px]">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center text-[15px] items-center space-x-4">
            {/* <a href="#" className="py-3 px-3 border rounded-md">
              Sign In
            </a> */}
            <a href="#" className="bg-[#f1c40f] px-3 py-3 border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
              Get started
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {drawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {drawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-3 px-3 border rounded-md">
                Sign In
              </a>
              <a href="#" className="bg-[#f1c40f] px-3 py-3 rounded-md">
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
