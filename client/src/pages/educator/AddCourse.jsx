import React, { useEffect, useRef, useState } from "react";
import Loading from "../../components/student/Loading";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { assets } from "../../assets/assets";
import { v4 as uuidv4 } from "uuid";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef();

  const [courses, setCourses] = useState(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    inPreviewFree: false,
  });

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  // handleChapter

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter chapter title");
      if (title) {
        const newChapter = {
          chapterId: uuidv4(),
          chapterTitle: title,
          collapsed: false,
          chapterContent: [],
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };

        setChapters([...chapters, newChapter]);
      }
    } else if (action === "remove") {
      setChapters(
        chapters.filter((chapter) => chapter.chapterId !== chapterId),
      );
    } else if (action === "toggle") {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter,
        ),
      );
    }
  };

  // add chapter function will be here
  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqueId(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      }),
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      inPreviewFree: false,
    });
  };

  const uniqueId = () => {
    return uuidv4();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleLecture = (action, chapterId, index) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(index, 1);
          }
          return chapter;
        }),
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col gap-3 mb-4">
          <p>Course Title</p>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Type Here"
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-500"
          />
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <p>Course Description</p>
          <div ref={editorRef} className="h-40" />
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <p>Course Price</p>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              placeholder="0"
              min="0"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-500"
            />
          </div>
          <div className="flex items-center gap-1 pt-6">
            <p>Course Thumbnail</p>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700"
            >
              <img
                src={assets.file_upload_icon}
                alt="file_upload_icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              />
            </label>
            <input
              type="file"
              id="thumbnail"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              hidden
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-500"
            />
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://via.placeholder.com/150"
              }
              alt="Thumbnail_preview"
              className=" w-12 h-12 object-cover rounded-md"
            />
          </div>
        </div>
        <div className=" mb-4 ">
          <p className="mb-2">Discount %</p>
          <input
            type="number"
            value={discount}
            min="0"
            max="100"
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="0"
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-500"
          />
        </div>

        {/* adding chapters and lectures   */}
        <div className="flex flex-col  gap-4 mb-4  w-full">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden rounded-md mb-4"
            >
              <div className=" p-4 border-b border-gray-200 ">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="flex items-center gap-2 ">
                    <img
                      onClick={() =>
                        handleChapter("toggle", chapter.chapterId, index)
                      }
                      src={assets.dropdown_icon}
                      alt="dropdown_icon"
                      width={12}
                      className={`cursor-pointer transition-transform duration-300 ${chapter.collapsed && "-rotate-90"}`}
                    />
                    <span className="text-md font-medium text-gray-700 capitalize">
                      {index + 1}. {chapter.chapterTitle}
                    </span>
                  </div>
                  <span className="text-sm  text-gray-500">
                    {chapter.chapterContent.length} Lectures
                  </span>
                  <img
                    onClick={() =>
                      handleChapter("remove", chapter.chapterId, index)
                    }
                    src={assets.cross_icon}
                    alt=""
                    className="cursor-pointer  hover:rotate-90 transition-transform duration-300"
                  />
                </div>

                {!chapter.collapsed && (
                  <div className="ml-8 ">
                    {chapter.chapterContent.map((lecture, lectureIndex) => (
                      <div
                        key={lectureIndex}
                        className="flex justify-between py-2 items-center gap-2"
                      >
                        <span>
                          {lectureIndex + 1}. {lecture.lectureTitle} -{" "}
                          {lecture.lectureDuration} mins -{" "}
                          <a
                            href={lecture.lectureUrl}
                            target="_blank"
                            className="text-blue-500"
                          >
                            Link
                          </a>{" "}
                          - {lecture.inPreviewFree ? "Free Preview" : "Paid"}
                        </span>
                        <img
                          onClick={() =>
                            handleLecture(
                              "remove",
                              chapter.chapterId,
                              lectureIndex,
                            )
                          }
                          src={assets.cross_icon}
                          alt=""
                          className="cursor-pointer hover:rotate-90 transition-transform duration-300"
                        />
                      </div>
                    ))}

                    <div
                      className="inline-flex items-center justify-center bg-blue-500 p-2 cursor-pointer rounded-md mt-2 text-white"
                      onClick={() =>
                        handleLecture(
                          "add",
                          chapter.chapterId,
                          chapter.chapterContent.length,
                        )
                      }
                    >
                      + ADD lecture +
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* add chapter and  buttons */}
          <div
            className="flex items-center justify-center bg-blue-300 p-2 cursor-pointer rounded-md mt-2"
            onClick={() => handleChapter("add")}
          >
            + ADD CHAPTER
          </div>

          {/* show popup for adding lecture */}

          <div>
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800/75 p-2 rounded-md bg-opacity-50">
                <div className="bg-white  text-gray-700 p-4 rounded relative w-full max-w-80">
                  <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>
                  <div className="mb-4">
                    <p className="capitalize ">lecture title</p>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray"
                      value={lectureDetails.lectureTitle}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureTitle: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <p>Duration (minutes) </p>
                    <input
                      type="number"
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray"
                      value={lectureDetails.lectureDuration}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureDuration: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <p>lecture URL</p>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray"
                      value={lectureDetails.lectureUrl}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureUrl: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <p>Is Preview Free?</p>
                    <input
                      type="checkbox"
                      className="mt-1 scale-125 border-gray-300 rounded focus:ring-blue-500 focus:border-transparent text-gray cursor-pointer"
                      checked={lectureDetails.inPreviewFree}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          inPreviewFree: e.target.checked,
                        })
                      }
                    />
                  </div>
                  <button
                    onClick={() => addLecture()}
                    type="button"
                    className="bg-black text-white font-sm py-2 px-8 uppercase rounded cursor-pointer transition duration-300 ease-in-out"
                  >
                    Add
                  </button>
                  <img
                    className="absolute right-4 top-6 cursor-pointer hover:rotate-90 transition-transform duration-300"
                    onClick={() => setShowPopup(false)}
                    src={assets.cross_icon}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>

          {/* <div
            onClick={() => handleChapter("add")}
            className="flex items-center justify-center bg-blue-500 p-2 cursor-pointer rounded-md mt-2 text-white"
          >
            + ADD LECTURE
          </div> */}
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-blue-500 text-white font-medium py-2 px-8 uppercase rounded cursor-pointer transition duration-300 ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
