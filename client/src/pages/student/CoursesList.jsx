import React, { useContext, useState, useEffect } from "react";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import Footer from "../../components/student/Footer";
import { assets } from "../../assets/assets";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const { input } = useParams();

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourses(
            tempCourses.filter((course) =>
              course.courseTitle.toLowerCase().includes(input.toLowerCase()),
            ),
          )
        : setFilteredCourses(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="flex flex-col  justify-center  px-4 sm:px-10 md:px-14 lg:px-36 py-6 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white  overflow-hidden ">
        <div className="flex items-start flex-col lg:items-center lg:flex-row  justify-between gap-4 w-full">
          <div className="">
            <h1 className="font-semibold text-2xl whitespace-nowrap">
              Course List
            </h1>
            <p className="font-md text-xl whitespace-nowrap">
              <span
                onClick={() => navigate("/")}
                className="text-white font-semibold hover:underline cursor-pointer"
              >
                Home
              </span>{" "}
              / <span className="text-gray-300">Courses List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        <div className="pt-12">
          {input && (
            <p className="text-white mt-4 text-sm sm:text-base">
              Showing {filteredCourses.length} of {allCourses.length} courses
            </p>
          )}

          <div>
            {input &&
              (filteredCourses.length > 0 ? (
                <h4 className="text-xl text-start font-medium capitalize text-white">
                  Results found for :
                </h4>
              ) : (
                <h4 className="text-xl text-start font-medium capitalize text-red-200">
                  No results found for :
                </h4>
              ))}

            {input && (
              <div className="inline-flex items-center gap-2 mt-2 bg-white text-gray-800 px-5 py-1 pb-2 text-xl font-base  rounded-full">
                {" "}
                {input}{" "}
                <img
                  onClick={() => navigate("/course-list")}
                  src={assets.cross_icon}
                  alt="cross_icon"
                  className="cursor-pointer mt-1"
                />{" "}
              </div>
            )}
          </div>

          {/* Cards */}
          <div
            className="max-w-7xl  mx-auto mt-12 grid gap-6 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4"
          >
            {filteredCourses.map((course, index) => (
              <div key={index} className="w-full flex justify-center">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
        <a
          href="/course-list"
          className="border border-gray-200 text-lg mt-8 px-16 py-4 inline-block mx-auto"
        >
          Show More
        </a>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
