import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between md:flex-row flex-col-reverse text-left w-full p-4 border-t border-gray-500">
      <div className="flex items-center gap-3">
        <img src={assets.logo} alt="logo" />|{" "}
        <p>All right reserved. Copyright @Ash_Abir.</p>
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
