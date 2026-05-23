import React, { useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-14 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden ">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Learn from the best
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Show all courses
        </Link>
      </div>

      {/* Cards */}
      <div
        className="max-w-7xl  mx-auto mt-12 grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4"
      >
        {allCourses.slice(0, 4).map((course, index) => (
          <div key={index} className="w-full flex justify-center">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
