import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-20 bg-white w-full flex flex-row justify-between md:justify-around items-center z-20 relative">
      <div className="p-2 flex flex-row gap-x-2 justify-center items-center">
        <img src="https://www.mediversal.in/logo.png" className="w-48" />
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-5">
          <li className="p-2">About Us</li>
          <li className="p-2">Diagnostics</li>
          <li className="p-2">Online Services</li>
          <li className="p-2">Careers</li>
          <li className="p-2">Blogs</li>
        </ul>
      </div>
      <div className="hidden md:flex flex-row gap-5">
        <button className="p-2 px-4 border-blue-700 border-[3px] rounded-[20px] hover:bg-blue-600 hover:text-white">
          Contact Us
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col bg-white z-30 shadow-md`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li className="p-2 text-[#153F2B] hover:text-[#8AEA7C] cursor-pointer">
          About Us
          </li>
          <li className="p-2 text-[#153F2B] hover:text-[#8AEA7C] cursor-pointer">
          Diagnostics
          </li>
          <li className="p-2 text-[#153F2B] hover:text-[#8AEA7C] cursor-pointer">
          Online Services
          </li>
          <li className="p-2 text-[#153F2B] hover:text-[#8AEA7C] cursor-pointer">
          Careers
          </li>
          <li className="p-2 text-[#153F2B] hover:text-[#8AEA7C] cursor-pointer">
          Blogs 
          </li>
        </ul>
        <div className="flex flex-col items-center p-4 gap-4">
          <button className="p-2 px-4 border-blue-700 border-[3px] rounded-[20px] hover:bg-blue-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden mr-5">
        <button
          onClick={toggleMenu}
          className="text-[#153F2B] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
