import React from "react";
import Logo from "../../src/assets/images/image 26.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#E0FFF1] pt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 lg:flex lg:justify-between">
        {/* Left Section */}
        <div className="lg:w-1/3 text-gray-900 ml-8 ">
          <img src={Logo} alt="Logo" className="w-32 mb-7 mt-0" />
          <p className="text-left">
  3rd floor, Rema Plaza, SS Kovil Rd, <br />
  Overbridge, Santhi Nagar, <br />
  Thampanoor, Thiruvananthapuram, <br />
  Kerala 695001
</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-900"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-900"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-900"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-900"
            >
              <IoLogoYoutube />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3">
          <h4 className="text-xl font-semibold text-center  text-black mb-4">
            Our Locations
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-left">
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
        <div className="max-w-screen-xl mx-16 px-4 flex flex-wrap justify-between">
          <span>© IPCS Global</span>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="text-gray-900">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
