import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-14 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Testimonials
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="capitalize px-6 md:px-10 m-1 py-2 bg-accent-emerald rounded cup transition-colors duration-200 font-semibold cursor-pointer hover:bg-white hover:text-purple-600"
            type="submit"
          >
            Get started
          </button>
          <button
            className="capitalize flex items-center gap-2 px-6 md:px-10 m-1 py-2 hover:text-purple-600 rounded cup transition-colors duration-200 font-semibold text-white cursor-pointer"
            type="submit"
          >
            Learn more <img src={assets.arrow_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
