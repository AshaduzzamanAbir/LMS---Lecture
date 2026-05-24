import React, { useState, useEffect } from "react";

const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div className="flex flex-row-reverse items-center gap-1 -mt-2">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleRating(starValue)}
            className={`text-xl sm:text-2xl md:text-3xl transition-colors cursor-pointer ${starValue >= rating ? "text-yellow-500" : "text-gray-500"}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
