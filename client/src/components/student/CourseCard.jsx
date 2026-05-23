import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border rounded-xl border-gray-8s00 shadow-md overflow-hidden w-80 bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300 text-start"
    >
      <img src={course.courseThumbnail} alt="Course" />
      <div className="p-4 text-black">
        <h3 className="text-lg font-semibold mb-1">{course.courseTitle}</h3>
        <p className="text-md text-gray-500 mb-1">
          {course.educator.name || "Richard James"}
        </p>
        <div className="flex items-center gap-1 mb-2">
          <p className="text-md font-semibold text-gray-500 mt-1">
            {calculateRating(course)}
          </p>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt="Star"
                className="w-4 h-4 inline-block"
              />
            ))}
          </div>
          <span className="text-md text-gray-500 mt-1">
            ({course.courseRatings.length})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl text-gray-600 font-bold">
            {currency}
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
