import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);

  const [progressBar, setProgressBar] = useState([
    { totalLectures: 2, completedLectures: 5 },
    { totalLectures: 5, completedLectures: 5 },
    { totalLectures: 4, completedLectures: 5 },
    { totalLectures: 3, completedLectures: 5 },
    { totalLectures: 2, completedLectures: 4 },
    { totalLectures: 5, completedLectures: 5 },
    { totalLectures: 4, completedLectures: 5 },
    { totalLectures: 3, completedLectures: 5 },
    { totalLectures: 2, completedLectures: 4 },
    { totalLectures: 1, completedLectures: 5 },
    { totalLectures: 1, completedLectures: 3 },
    { totalLectures: 2, completedLectures: 2 },
  ]);

  return (
    <>
      <div className=" justify-center px-4 sm:px-10 md:px-14 lg:px-36 py-6 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-6">My Enrollments</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-t border-l border-gray-300/30 px-4 max-sm:px-0 py-2">
                Course Name
              </th>
              <th className="border-t border-b max-sm:hidden border-gray-300/30 px-4 py-2">
                Duration
              </th>
              <th className="border-t border-b max-sm:hidden md:hidden border-gray-300/30 px-4 py-2">
                Completed
              </th>
              <th className="border-t border-b border-r max-sm:text-right border-gray-300/30 px-4 max-sm:px-0 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, idx) => (
              <tr key={idx} className="border-b border-gray-500/30">
                <td className=" border-t border-b border-l border-gray-300/30 px-4 py-2 max-sm:px-0">
                  <div className="flex items-start md:items-center lg:items-center flex-col md:flex-row lg:flex-row  gap-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-14 sm:w-24 md:w-28  object-cover rounded"
                    />
                    <div className="">
                      <p className="mb-2 max-sm:max-w-[180px] max-sm:text-sm text-nowrap font-semibold text-gray-200">
                        {" "}
                        {course.courseTitle}{" "}
                      </p>
                      <Line
                        className="bg-blue-500 rounded h-1"
                        percent={
                          progressBar[idx]
                            ? (progressBar[idx]?.totalLectures * 100) /
                              progressBar[idx]?.completedLectures
                            : 0
                        }
                        strokeWidth={2}
                        strokeColor="#9719FA"
                      />
                    </div>
                  </div>
                </td>
                <td className="border-t border-b max-sm:hidden border-gray-300/30 max-sm:px-0 px-4 py-2">
                  {calculateCourseDuration(course)}
                </td>
                <td className="border-t text-nowrap border-b md:hidden max-sm:hidden text-center border-gray-300/30 max-sm:px-0 px-4 py-2">
                  {progressBar[idx]?.totalLectures || 0}/
                  {progressBar[idx]?.completedLectures || 0}
                  <span className="px-2">Lectures</span>
                </td>
                <td className="border-t border-b border-r max-sm:text-right text-center border-gray-300/30 max-sm:px-0 px-4 py-2">
                  <button
                    onClick={() => navigate(`/player/` + course._id)}
                    className={`px-4 py-1 rounded cursor-pointer ${progressBar[idx]?.completedLectures === progressBar[idx]?.totalLectures ? "bg-purple-700 hover:bg-purple-800" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                  >
                    {progressBar[idx]?.completedLectures ===
                    progressBar[idx]?.totalLectures
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyEnrollments;
