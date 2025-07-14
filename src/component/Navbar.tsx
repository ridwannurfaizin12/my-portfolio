import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Stacks", path: "/stacks" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="max-w-screen-2xl mx-auto 
  px-4 sm:px-6 lg:px-[100px] xl:px-[150px] 2xl:px-[200px] 
  py-2 my-4 rounded-xl shadow-mfont-ibm max-md:rounded-none"
      >
        <div className="flex items-center justify-between bg-primary px-4 py-3 rounded-2xl">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl text-accent">
            RNF
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm sm:text-base font-medium ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Me Button - Desktop */}
          <div className="">
            <button className="mr-4 border-1 border-gray-400 text-black px-4 py-2 hover:border-accent hover:text-accent rounded-lg transition duration-500 max-md:hidden cursor-pointer">
              Read Resume
            </button>
            <button className=" bg-accent px-4 py-2 text-white rounded-lg hover:bg-purple-950 transition duration-700 cursor-pointer max-md:hidden">
              Contact Me
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none w-10 h-10 flex items-center justify-center"
            >
              {/* Hamburger icon */}
              <svg
                className={`absolute transition-all duration-300 ease-in-out w-6 h-6 ${
                  isOpen
                    ? "opacity-0 scale-90 rotate-45"
                    : "opacity-100 scale-100 rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              {/* X icon */}
              <svg
                className={`absolute transition-all duration-300 ease-in-out w-6 h-6 ${
                  isOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-90 rotate-45"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={` md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 py-4 space-y-3 bg-primary rounded-b-xl shadow ${
          isOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block text-sm sm:text-base font-medium ${
                isActive ? "text-indigo-600" : "text-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-amber-300 transition">
          Contact Me
        </button> */}
      </div>
    </nav>
  );
}
