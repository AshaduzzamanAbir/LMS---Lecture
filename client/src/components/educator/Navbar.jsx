import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { dummyEducatorData } from "../../assets/assets";

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-6 md:px-8 border-b border-gray-500 py-3">
      <Link to="/" className="flex items-center gap-1">
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
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p> Hi! {user ? user.fullName : "Developer"} </p>
        {user ? (
          <UserButton />
        ) : (
          <Link to="/create-account">
            <img
              src={assets.profile_img}
              alt="user_icon"
              className="max-w-10"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
