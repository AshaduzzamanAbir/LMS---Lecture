import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  // Set currency from environment variable or default to "$"
  const currency = import.meta.env.VITE_CURRENCY || "$";

  // Initialize navigate function from react-router-dom
  const navigate = useNavigate();

  // State to hold all courses
  const [allCourses, setAllCourses] = useState([]);

  // for educator dashboard, can be added in the future
  const [isEducator, setIsEducator] = useState(true);

  // for educator courses in the future
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  //rating and reviews can be added here in the future
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) return 0;

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  // Fetch all courses from the backend when the component mounts
  const fetchAllCourses = async () => {
    try {
      setAllCourses(dummyCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // function for calculate course chupter time
  const calculateChapterTime = (chapter) => {
    let totalTime = 0;
    chapter.chapterContent.map((lecture) => {
      totalTime += lecture.lectureDuration;
      return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
    });
  };

  // function for calculate course duration
  const calculateCourseDuration = (course) => {
    let totalTime = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map(
        (lecture) => (totalTime += lecture.lectureDuration),
      ),
    );
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateOfLecture = (course) => {
    let totalLecture = 0;

    course?.courseChapters?.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecture += chapter.chapterContent.length;
      }
    });

    return totalLecture;
  };

  //  fetch all Enrolled courses
  const fetchEnrolledCourses = async () => {
    try {
      setEnrolledCourses(dummyCourses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
    fetchEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateOfLecture,
    enrolledCourses,
    fetchEnrolledCourses,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
