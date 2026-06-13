import React, { useState, useEffect } from "react";
import Loading from "../../components/student/Loading";
import { dummyStudentEnrolled } from "../../assets/assets";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    // Simulate an API call to fetch enrolled students
    setEnrolledStudents(dummyStudentEnrolled);
  };
  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="mt-6 flex flex-col w-full max-w-4xl items-center overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-card">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 w-full">
            <tr className="text-left">
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 capitalize tracking-wider">
                Student Name
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
            {enrolledStudents.map((student, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-3 flex items-center gap-2">
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
                  {new Date(student.purchaseDate).toLocaleDateString()}
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

export default StudentsEnrolled;
