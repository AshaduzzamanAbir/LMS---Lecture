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
          <div className="flex items-center gap-2 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {deshboardData.enrolledStudentsData.length}
              </p>
              <p className="text-md text-gray-500">Total Enrolled</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.appointments_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {deshboardData.totalCourses}
              </p>
              <p className="text-md text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-54 rounded-md">
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className="text-xl text-bold text-gray-600">
                {currency} {deshboardData.totalEarnings}
              </p>
              <p className="text-md text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Deshboard;
