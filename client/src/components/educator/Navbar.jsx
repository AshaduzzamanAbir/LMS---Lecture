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
      <Link>
        <img src={assets.logo} alt="logo" className="w-28 lg:w-32" />
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
