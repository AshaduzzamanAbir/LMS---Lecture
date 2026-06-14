import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between md:flex-row flex-col-reverse text-left w-full p-4 border-t border-gray-500">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center gap-1">
          {/* Logo */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full flex items-center justify-center w-11 h-11 shadow-md">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-black tracking-wide font-roboto">
            Ash_Abir
          </h2>
        </div>
        | <p>All right reserved. Copyright @Ash_Abir.</p>
      </div>
      <div className="flex items-center gap-3 ">
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
