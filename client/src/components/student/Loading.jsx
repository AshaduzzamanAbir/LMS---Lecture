import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full  bg-gradient-to-r from-blue-500 to-purple-600 text-white gap-4">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
      </div>
      <span className="text-xl font-semibold">Loading...</span>
    </div>
  );
};

export default Loading;
