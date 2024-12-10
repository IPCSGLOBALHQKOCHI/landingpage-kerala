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
              <FaPhoneSquareAlt className="w-6 h-5" />
              <span>+91 9846770771</span>
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineGlobal className="w-6 h-6" />
              <span>www.ipcsglobal.com</span>
            </span>
          </p> 
          <h5 className="mt-4 font-semibold text-xl text-black text-center lg:text-left">
            Follow us
          </h5>
          <div className="flex mt-2 gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="#"
              className="flex items-center text-gray-900 text-xl"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 text-xl"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900  text-xl"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="#"
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
              { name: "Kochi", link: "/locations/kochi" },
              { name: "Calicut", link: "/locations/calicut" },
              { name: "Trivandrum", link: "/locations/trivandrum" },
              { name: "Attingal", link: "/locations/attingal" },
              { name: "Kollam", link: "/locations/kollam" },
              { name: "Kannur", link: "/locations/kannur" },
              { name: "Thrissur", link: "/locations/thrissur" },
              { name: "Perinthalmanna", link: "/locations/perinthalmanna" },
              { name: "Kottayam", link: "/locations/kottayam" },
              { name: "Pathanamthitta", link: "/locations/pathanamthitta" },
              { name: "Palakkad", link: "/locations/palakkad" },
              { name: "Dubai", link: "/locations/dubai" },
              { name: "Riyadh", link: "/locations/riyadh" },
              { name: "Chennai", link: "/locations/chennai" },
              { name: "Tambaram", link: "/locations/tambaram" },
              { name: "Trichy", link: "/locations/trichy" },
              { name: "Madurai", link: "/locations/madurai" },
              { name: "Hyderabad", link: "/locations/hyderabad" },
              { name: "Erode", link: "/locations/erode" },
              { name: "Tirunelveli", link: "/locations/tirunelveli" },
              { name: "Bangalore", link: "/locations/bangalore" },
              { name: "Mangalore", link: "/locations/mangalore" },
              { name: "Ranchi", link: "/locations/ranchi" },
              { name: "Raipur", link: "/locations/raipur" },
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
      <div className="bg-[#E0FFF1] border-t py-4 text-center text-sm text-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <span>© IPCS Global</span>
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-900 hover:text-gray-700">
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
      </div>
    </footer>
  );
};

export default Footer;
