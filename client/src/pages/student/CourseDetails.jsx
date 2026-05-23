import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/student/Footer";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import humanizeDuration from "humanize-duration";
import { FiClock } from "react-icons/fi";
import { GiSpellBook } from "react-icons/gi";
import { LuAlarmClock } from "react-icons/lu";
import YouTube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSelection, setOpenSelection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(true);
  const [playerData, setPlayerData] = useState(null);

  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateOfLecture,
  } = useContext(AppContext);

  const fetchCourseData = () => {
    const course = allCourses.find((course) => course._id === id);
    setCourseData(course);
  };

  const toggleSelection = (index) => {
    setOpenSelection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const course = allCourses.find((course) => course._id === id);

    if (course) {
      setCourseData(course);
    }
  }, [id, allCourses]);
  return courseData ? (
    <>
      <div className="flex md:flex-row  flex-col-reverse justify-center gap-4 lg:gap-8 md:gap-8 px-4 sm:px-10 md:px-14 lg:px-36 py-6 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen">
        <div className="absolute top-0 left-0 w-full -z-1 h-section-height bg-gradient-to-0  from-cyan-100/70"></div>
        {/* left column  */}
        <div className="flex-1">
          <h1 className="font-bold mb-4 md:text-course-details-heading-large text-course-details-heading-small relative mx-auto ">
            {courseData?.courseTitle}
          </h1>
          <p
            className="text-lg mb-4 max-w-xl mx-auto "
            dangerouslySetInnerHTML={{ __html: courseData?.courseDescription }}
          ></p>
          <div className="flex items-center gap-2 mb-2 mt-4">
            <p className="text-md font-semibold text-white">
              {calculateRating(courseData)}
            </p>
            {courseData && (
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(calculateRating(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="Star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            )}
            <p className="text-lg ">
              {courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length === 1 ? " student" : " students"}
            </p>
          </div>
          <p className="text-lg mb-4 max-w-xl mx-auto ">
            Course by{" "}
            <span className="text-purple-600 font-semibold">Ash_Abir</span>
          </p>

          <div className="pt-8 text-white">
            <h3 className="font-semibold text-2xl mb-2">Course Structure</h3>
            <div>
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className=" border border-gray-300 bg-white mb-3 rounded "
                >
                  <div
                    onClick={() => toggleSelection(index)}
                    className="relative flex items-center justify-between px-4 py-3 cursor-pointer select-none "
                  >
                    <div className="flex items-center gap-2 cursor-pointer ">
                      <IoIosArrowDown
                        className={`text-gray-600 w-6 h-6 mt-1 ${openSelection[index] ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                      />
                      <p className="text-gray-600 text-xl font-semibold">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-gray-600 text-xl">
                      {chapter.chapterContent.length} - Lectures
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden bg-gray-300 transition-all duration-300 ease-in-out ${
                      openSelection[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className=" px-8">
                      {chapter.chapterContent.map((lecture, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600 text-lg mb-2 py-2"
                        >
                          <MdOutlineSlowMotionVideo className="inline-block w-8 h-8 mr-2" />
                          <div className="flex items-center justify-between w-full">
                            <p className="font-medium">
                              {lecture.lectureTitle}
                            </p>
                            <div className="flex items-center gap-4">
                              {lecture.isPreviewFree && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                  className="cursor-pointer text-blue-600 hover:underline decoration-blue-600 transition-colors duration-300"
                                >
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] },
                                )}{" "}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 text-white">
            <h3 className="font-semibold text-2xl mb-2">Course Description</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: courseData?.courseDescription,
              }}
              className="text-lg text-gray-200 mb-4 max-w-xl mx-auto "
            ></p>
          </div>
        </div>
        {/* right column  */}
        <div className="">
          <div className="max-w-[424px] mx-auto rounded-lg p-4 shadow-lg">
            {playerData ? (
              <YouTube
                videoId={playerData.videoId}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video rounded  "
              />
            ) : (
              <img
                src={courseData?.courseThumbnail}
                alt={courseData?.courseTitle}
              />
            )}
            <div>
              <p className="flex items-center gap-2 text-sm text-white pt-4">
                <LuAlarmClock className="inline-block w-6 h-6 mr-2" />
                <span>5 days</span> left at this price!
              </p>
              <div className="flex items-center gap-3 py-4">
                {" "}
                <h3>$10.99</h3> <h5>$19.99</h5> <h5>50% off</h5>{" "}
              </div>
              <div className="flex items-center gap-3">
                <img src={assets.star} alt="star" /> <p>4.5</p> | <FiClock />{" "}
                <p>30 hours</p> | <GiSpellBook /> <p>54 lessons</p>{" "}
              </div>
              <button className=" bg-purple-800 w-full text-white px-4 py-2 my-4 rounded mt-4 hover:bg-purple-700 transition-colors duration-300 cursor-pointer active:scale-95">
                {isAlreadyEnrolled ? "Go to Course" : "Enroll Now"}
              </button>
            </div>
            <div>
              <h2 className="font-semibold text-2xl mb-2">
                What’s in the course?
              </h2>
              <ul className="list-disc list-inside flex gap-2 pt-2 flex-col text-gray-300 ">
                <li>Comprehensive video lectures covering all topics.</li>
                <li>Downloadable resources and code samples.</li>
                <li>Quizzes and assignments for practice.</li>
                <li>Access to a community of learners.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
