import { useState } from "react";
// import Logo from "../assets/Logo";
function Header({ onLoginClick }) {
    const [language, setLanguage] = useState("English");
    const [menuOpen, setMenuOpen] = useState(false); 
    
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

return (
    <div className="h-20 fixed bg-white w-full flex flex-row  justify-between md:justify-around items-center z-20">
        <div className="p-2 flex flex-row gap-x-2 justify-center items-center">
            <Logo className="size-14"/>
            <p>Find Your <br/>
            <span className="text-[#8AEA7C]">Maid</span></p>
        </div>
        <div className="hidden md:block">
            <ul className="flex flex-row gap-5 ">
                <li className="p-2">Home</li>
                <li className="p-2">Who we are</li>
                <li className="p-2">Get in touch</li>
            </ul>

        </div>
        <div className="hidden md:flex flex-row gap-5 ">
                <select
                value={language}
                onChange={handleLanguageChange}
                className="px-4 py-2    bg-white text-sm "
            >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                
            </select>

            <button className="p-2 px-4 bg-[#8AEA7C] rounded-[20px] text-[#12555D] hover:bg-[#12555D] hover:text-[#8AEA7C]">
                Become a maid
            </button>

            <button  onClick={onLoginClick} className="p-2 px-4 bg-gray-200 rounded-[20px] text-[#153F2B] ">
            Login
            </button>

        </div>

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
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
            </svg>
            </button>
        </div>
        
    </div>
)
}

export default Header