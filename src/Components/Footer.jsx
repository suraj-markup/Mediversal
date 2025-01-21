import Logo from "../assets/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1D21] h-auto ">
      <div className="m-auto w-10/12 py-5 ">
        <h1 className="text-3xl text-white my-5 ">Join Find your maid</h1>
        <button className="text-[#8AEA7C] py-2 px-4 rounded-3xl border-solid border-2 border-[#8AEA7C]">
          Contact Us
        </button>

        <div className="flex flex-row justify-between mt-10">
          <div className="space-y-5">
            <p className="text-[#5F6160]">Products</p>
            <p className="text-[#BBBCB3]">Privacy Policy</p>
            <p className="text-[#BBBCB3]">Terms & Condition</p>
          </div>
          <div className="space-y-5">
            <p className="text-[#5F6160]">Need Help?</p>
            <p className="text-[#5F6160]">
              Call Us
              <p className="text-[#BBBCB3]">+(91) 9999912345</p>
            </p>
            <p className="text-[#5F6160]">
              Email Us
              <p type="email" className="text-[#BBBCB3]">
                abc.123@gmail.com
              </p>
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <Logo className="size-14" />
              <p className="text-white">
                Find Your <br />
                <span className="text-[#8AEA7C]">Maid</span>
              </p>
            </div>

            <div className="flex flex-row gap-x-5">
                <FaFacebook className="size-6 text-gray-500"/>
                <FaTwitter className="size-6 text-gray-500"/>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
