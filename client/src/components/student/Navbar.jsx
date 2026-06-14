import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  const { navigate, isEducator } = useContext(AppContext);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex justify-between items-center gap-4 px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b bg-gray-500 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      } `}
    >
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

        <h2 className="text-2xl font-bold text-white tracking-wide font-roboto">
          Ash_Abir
        </h2>
      </div>

      {/* desktop view  */}
      <div className="hidden md:flex items-center gap-4 text-gray-800">
        <div className="flex items-center gap-4 font-medium capitalize ">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="whitespace-nowrap cursor-pointer hover:text-indigo-600 transition-colors"
              >
                {isEducator ? "Educator Dashboard" : "Became an Educator"}
              </button>
              |
              <Link to="/my-enrollments" className="whitespace-nowrap">
                My Enrollments
              </Link>
            </>
          )}

          {user ? (
            <div className="flex items-center gap-4  border-gray border-3 rounded-full  cursor-pointer">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "2.2rem",
                      height: "2.2rem",
                    },
                  },
                }}
              />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="capitalize cursor-pointer px-6 py-2 bg-indigo-600 text-white font-medium rounded-full shadow-lg shadow-black-500/90 hover:shadow-indigo-500/90 hover:bg-indigo-700 transition-all"
            >
              Create account
            </button>
          )}
        </div>
      </div>
      {/* mobile view  */}
      <div className="flex md:hidden items-center gap-4 sm:gap-5 text-black">
        <div className="flex items-center gap-4 font-medium capitalize ">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="whitespace-nowrap"
              >
                {isEducator ? "Dashboard" : "Became Educator"}
              </button>
              |
              <Link to="/my-enrollments" className="whitespace-nowrap">
                Enroll
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "2rem",
                  height: "2rem",
                },
              },
            }}
          />
        ) : (
          <button onClick={() => openSignIn()}>
            <img
              src={assets.user_icon}
              alt="user_icon"
              className="w-10 text-black cursor-pointer"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
