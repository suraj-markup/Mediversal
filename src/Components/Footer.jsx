// import Logo from "../assets/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-auto ">
      <div className="m-auto w-10/12 py-10  ">
       

        <div className="flex flex-col  md:flex-row md:justify-between mt-10 gap-y-10">

          <div className="space-y-5 flex flex-col justify-start items-start">
          <div className="flex flex-row gap-x-2 justify-center items-center">
              <img src="https://www.mediversal.in/logo.png" className="w-64" />
              
            </div>
            <div className="flex flex-row justify-center   gap-x-5 text-white">
              <img src='https://www.mediversal.in/email.svg'/>
              <p>
              24/7 Support
              <br/>
              info@mediversal.in
              </p>

            </div>

            <div className="flex flex-row justify-center   gap-x-5 text-white">
              <img src='https://www.mediversal.in/phone.svg'/>
              <p>
              Call Us Free
              <br/>
              0612-3500010 <br/> 0612-3500110  <br/> 0612-3500111
              </p>

            </div>

            <div className="flex flex-row justify-center  gap-x-5 text-white">
              <img src='https://www.mediversal.in/location-2.png' className="size-5"/>
              <p>
              
              Hospital Address
              <br/>
              Mediversal Multi<br/> Superspeciality Hospital<br/> Doctors&apos; Colony, Kankarbagh,<br/> Patna - 800 020, Bihar
              </p>

            </div>
          </div>

          <div className="space-y-5 text-white w-full md:w-1/2 ">
           <h1 className="text-4xl font-bold">Mediversal App</h1>
           <p>Get medicine delivered at home, home sample collection, video consultation, and book homecare services effortlessly. Download the Mediversal App now for convenient and comprehensive healthcare at your fingertips.</p>
          </div>
          <div className="space-y-5">
            
            <p className="text-blue-500 text-2xl">Follow Us On</p>
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
