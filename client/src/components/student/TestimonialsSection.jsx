import React from "react";
import { dummyTestimonial, assets } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-14 sm:py-12 md:py-14 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden ">
      <div className="max-w-7xl mx-auto text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Testimonials
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>
      </div>

      <div
        className="w-full mx-auto mt-12 grid gap-6 items-center
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3"
      >
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md overflow-hidden w-full bg-white mt-10 mx-auto text-left"
          >
            <div className="flex items-center gap-4 bg-gray-300 p-4">
              <img
                className="w-14 h-14 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg text-gray-700 font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-md text-gray-600 mb-1">{testimonial.role}</p>
              </div>
            </div>
            <div className=" p-6">
              <div className="flex items-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="w-5"
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-md text-gray-800 italic mt-4 max-w-65">
                "{testimonial.feedback}"
              </p>

              <a
                href="#"
                className="inline-block underline cursor-pointer hover:text-accent-emerald transition-colors duration-200 font-semibold text-purple-600 mt-10"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
