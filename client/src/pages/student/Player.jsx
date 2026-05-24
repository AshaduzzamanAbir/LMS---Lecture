import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);

  const [courseData, setCourseData] = useState();
  const [openSelection, setOpenSelection] = useState({});
  const [playerData, setPlayerData] = useState();
  const [flase, setFlase] = useState(false);

  const { courseId } = useParams();

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  };

  const toggleSelection = (index) => {
    setOpenSelection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  return (
    <>
      <div className="flex md:flex-row  flex-col-reverse justify-between gap-4 lg:gap-8 md:gap-8 px-4  sm:px-10 md:px-14 lg:px-36 py-6 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen">
        {/* left  */}
        <div>
          <div className="pt-8 text-white">
            <h3 className="font-semibold text-2xl mb-2">Course Structure</h3>
            <div>
              {courseData &&
                courseData.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className=" border border-gray-300 bg-white mb-3 rounded "
                  >
                    <div
                      onClick={() => toggleSelection(index)}
                      className="relative flex items-center justify-between px-4 py-3 cursor-pointer select-none "
                    >
                      <div className="flex items-center gap-2 cursor-pointer text-nowrap">
                        <IoIosArrowDown
                          className={`text-gray-600 w-6 h-6 mt-1 ${openSelection[index] ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                        />
                        <p className="text-gray-600 text-xl font-semibold">
                          {chapter.chapterTitle}
                        </p>
                      </div>
                      <p className="text-gray-600 text-xl ">
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
                                {lecture.lectureUrl && (
                                  <p
                                    onClick={() =>
                                      setPlayerData({
                                        ...lecture,
                                        chapter: index + 1,
                                        lecture: index + 1,
                                      })
                                    }
                                    className="cursor-pointer text-blue-600 hover:underline decoration-blue-600 transition-colors duration-300"
                                  >
                                    Watch
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
          <div className="pt-6 text-white flex items-center gap-4 ">
            <h3 className="font-semibold text-2xl mb-2">Rate this Course:</h3>
            <Rating initialRating={0} />
          </div>
        </div>

        {/* right  */}
        <div>
          <div className="max-w-[424px] mx-auto rounded-lg p-4 shadow-lg">
            {playerData ? (
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video rounded  "
              />
            ) : (
              <img
                src={courseData ? courseData.courseThumbnail : ""}
                alt={courseData?.courseTitle}
              />
            )}
            <div className="pt-4">
              <h4 className="font-mediam text-md mb-2">
                {playerData && (
                  <span>
                    {`${playerData.chapter}.${playerData.lecture} ${playerData.lectureTitle} : ${courseData?.courseTitle || ""}`}
                  </span>
                )}
              </h4>

              <button className=" bg-purple-800 w-full text-white px-4 py-2 my-4 rounded mt-4 hover:bg-purple-700 transition-colors duration-300 cursor-pointer active:scale-95">
                {flase ? "Completed" : "Mark Completed"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
