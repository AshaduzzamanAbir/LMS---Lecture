import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Deshboard = () => {
  const [deshboardData, setDeshboardData] = useState();
  const { currency } = useContext(AppContext);

  const fetchDeshboardData = async () => {
    setDeshboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDeshboardData();
  }, []);

  return deshboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-1 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {deshboardData.enrolledStudentsData.length}
              </p>
              <p className="text-md text-gray-500">Total Enrolled</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.appointments_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {deshboardData.totalCourses}
              </p>
              <p className="text-md text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {currency} {deshboardData.totalEarnings}
              </p>
              <p className="text-md text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium text-gray-800">Latest Enrolments</h2>
        <div className="mt-6 flex flex-col w-full max-w-4xl items-center overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-card">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 w-full">
              <tr className="text-left">
                <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                  Student name
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                  Course Title
                </th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deshboardData.enrolledStudentsData.map((student, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-3 flex items-center gap-2]:">
                    <img
                      src={student.student.imageUrl}
                      alt={student.student.name}
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <span>{student.student.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.courseTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Aug, 2024
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Deshboard;
