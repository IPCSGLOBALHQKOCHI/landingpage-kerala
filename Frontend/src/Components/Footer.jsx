import React from "react";
import Logo from "../../src/assets/images/image 26.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#E0FFF1] pt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 lg:flex lg:justify-between lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/3 text-gray-900 mb-8 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-8">
          <img src={Logo} alt="Logo" className="w-32 mb-4 sm:mb-6" />
          <p className="text-center lg:text-left mb-4 sm:mb-6 flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <IoIosMail className="w-6 h-6" />
              <span>Info@ipcsglobal.com</span>
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneSquareAlt className="w-6 h-6" />
              <span>+91 9846770771</span>
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineGlobal className="w-6 h-6" />
              <a
                href="https://www.ipcsglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.ipcsglobal.com
              </a>
            </span>
          </p>
          <h5 className="mt-4 font-semibold text-xl text-black text-center lg:text-left">
            Follow us
          </h5>
          <div className="flex mt-2 gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="https://www.facebook.com/ipcsglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900 text-xl"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/ipcsglobal.kerala/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900 text-xl"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://in.linkedin.com/company/ipcs-global"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900  text-xl"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/c/IPCSAutomationPLCSCADABMSCCTVCADTraining"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900 text-xl"
            >
              <IoLogoYoutube className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3">
          <h4 className="text-xl font-semibold text-center lg:text-center text-black mb-4">
            Our Locations
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center lg:text-left">
            {[
              {
                name: "Kochi",
                link: "#contactSection",
              },
              {
                name: "Calicut",
                link: "#contactSection",
              },
              {
                name: "Trivandrum",
                link: "#contactSection",
              },
              {
                name: "Attingal",
                link: "#contactSection",
              },
              {
                name: "Kollam",
                link: "#contactSection",
              },
              {
                name: "Kannur",
                link: "#contactSection",
              },
              {
                name: "Thrissur",
                link: "#contactSection",
              },
              {
                name: "Perinthalmanna",
                link: "#contactSection",
              },
              {
                name: "Kottayam",
                link: "#contactSection",
              },
              {
                name: "Pathanamthitta",
                link: "#contactSection",
              },
              {
                name: "Palakkad",
                link: "#contactSection",
              },
              {
                name: "Dubai",
                link: "#contactSection",
              },
              {
                name: "Riyadh",
                link: "#contactSection",
              },
              {
                name: "Chennai",
                link: "#contactSection",
              },
              {
                name: "Tambaram",
                link: "#contactSection",
              },
              {
                name: "Trichy",
                link: "#contactSection",
              },
              {
                name: "Madurai",
                link: "#contactSection",
              },
              {
                name: "Hyderabad",
                link: "#contactSection",
              },
              {
                name: "Erode",
                link: "#contactSection",
              },
              {
                name: "Tirunelveli",
                link: "#contactSection",
              },
              {
                name: "Bangalore",
                link: "#contactSection",
              },
              {
                name: "Mangalore",
                link: "#contactSection",
              },
              {
                name: "Ranchi",
                link: "#contactSection",
              },
              {
                name: "Raipur",
                link: "#contactSection",
              },
            ].map((location, index) => (
              <a
                key={index}
                href={location.link}
                className="text-gray-900 hover:underline cursor-pointer"
              >
                {location.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="bg-[#E0FFF1] border-t py-4 text-center text-sm text-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <span>© IPCS Global</span>
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <a href="https://ipcsglobal.com/privacy-policy/" className="text-gray-900 hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              Terms of Service
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              Cookies Settings
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
