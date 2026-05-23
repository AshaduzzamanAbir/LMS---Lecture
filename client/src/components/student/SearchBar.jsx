import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/course-list/${input}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full md:w-auto bg-white rounded-md shadow-md overflow-hidden"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="md:w-auto w-10 px-3"
        />
        <input
          type="text"
          placeholder="Search for courses, instructors, or topics"
          className="w-full text-gray-500 md:w-86 px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="capitalize px-6 md:px-10 m-1 py-2 bg-accent-emerald rounded cursor-pointer text-white font-medium hover:bg-green-700 transition-all active:scale-95"
          type="submit"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
