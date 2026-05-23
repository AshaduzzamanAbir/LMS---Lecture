import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  text-center md:pt-36 pt-20 pb-16 md:pb-24 px-14 md:px-0 space-y-7 bg-gradient-to-r from-blue-500 to-purple-600 text-white  overflow-hidden">
      <h1 className=" font-bold mb-4 md:text-course-details-heading-large text-course-details-heading-small relative max-w-3xl mx-auto ">
        Empower your future with the courses designed to fit your choice.
        <span className="absolute -bottom-4 hidden md:inline-block -right-14">
          <img src={assets.sketch} alt="sketch" />
        </span>
      </h1>
      <p className="text-md mb-4 max-w-xl mx-auto ">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
