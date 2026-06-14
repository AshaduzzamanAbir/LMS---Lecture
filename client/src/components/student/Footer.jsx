import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-gray-800 w-full ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-1">
              {/* Logo */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full flex items-center justify-center w-11 h-11 shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-white tracking-wide font-roboto">
                Ash_Abir
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-400 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white ">Company</h3>

            <ul className="space-y-3 text-sm flex gap-4 justify-center flex-row lg:flex-col md:flex-col sm:flex-col">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-500 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-purple-500 transition duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-500 transition duration-300"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#privacy"
                  className="hover:text-purple-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>

            <p className="text-sm leading-6 text-gray-400">
              Subscribe to get the latest news, articles, and resources
              delivered directly to your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-[#1e293b] border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-medium text-white transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2026 Ash_Abir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
