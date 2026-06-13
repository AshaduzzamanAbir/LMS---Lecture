import React, { useContext, useState, useEffect } from "react";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setCourses(allCourses);
  };

  return courses ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <h2 className="text-lg font-medium text-gray-800">MyCourses</h2>
      <div className="mt-6 flex flex-col w-full max-w-4xl items-center overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-card">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 w-full">
            <tr className="text-left">
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                All Courses
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                Earnings
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                Course Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-3 flex items-center gap-2]:">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <span>{course.courseTitle}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {currency}{" "}
                  {Math.floor(
                    course.enrolledStudents.length *
                      (course.coursePrice -
                        (course.discount * course.coursePrice) / 100),
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.enrolledStudents.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(course.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
