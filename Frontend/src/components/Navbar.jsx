import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // ✅ Add heroicons for hamburger

function Navbar() {
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ New state for mobile nav
  const [loggedin, setLoggedin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectTerm, setselectTerm] = useState("default");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    console.log("Select Term:", selectTerm);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev); // ✅ Toggle mobile nav

  return (
    <nav className="shadow fixed top-0 left-0 z-50 w-full bg-gray-800 text-white px-4 py-3 flex flex-wrap justify-between items-center">
      {/* Logo + Hamburger */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-3">
          <img
            src="/public/images/icons8-permanent-job-48.png"
            alt="Job-Portal-Logo"
            className="w-10"
          />
          <div className="text-xl font-medium">Dream Job</div>
        </div>

        {/* ✅ Hamburger Icon */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex lg:items-center lg:w-auto mt-3 lg:mt-0"
      >
        <div className="flex px-4 py-2 border rounded-full flex-col lg:flex-row w-full gap-2 lg:gap-0">
          <select
            className="rounded px-3 py-1 focus:outline-none hidden lg:block"
            value={selectTerm}
            onChange={(e) => setselectTerm(e.target.value)}
          >
            <option value="default" disabled={false} className="text-black">
              Select job type
            </option>
            <option value="internship" className="text-black">
              Internship
            </option>
            <option value="fulltime" className="text-black">
              Full-Time
            </option>
            <option value="parttime" className="text-black">
              Part-Time
            </option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Here"
            className="px-4 py-1 rounded w-full lg:w-80 outline-none"
          />
          <button
            type="submit"
            className="border rounded-full bg-blue-900 hover:bg-blue-800 py-1 px-3 "
          >
            Search
          </button>
        </div>
      </form>

      {/* Nav Links */}
      <div
        className={`w-full lg:w-auto mt-4 lg:mt-0 ${
          mobileMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        {loggedin && (
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-start lg:items-center">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>

            <li className="relative cursor-pointer" onClick={toggleDropdown}>
              <span className="hover:text-yellow-400">Jobs ▾</span>
              {DropdownOpen && (
                <ul className="absolute bg-white text-black shadow-md rounded mt-2 w-40 z-10">
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Internships
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Fresher Jobs
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Remote Roles
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/applications" className="hover:text-yellow-400">
                Applied Jobs
              </Link>
            </li>
          </ul>
        )}

        {!loggedin && (
          <div className="flex flex-col lg:flex-row gap-2">
            <Link to="/login">
              <button className="border py-1 px-3 rounded-lg bg-blue-900 hover:bg-blue-800">
                Recruiter Login
              </button>
            </Link>
            <button className="border py-1 px-3 rounded-lg bg-blue-900 hover:bg-blue-800">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
