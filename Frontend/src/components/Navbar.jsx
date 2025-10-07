import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // ✅ Add heroicons for hamburger
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Navbar() {
  const [logoutButton, setLogoutButton] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ New state for mobile nav
  const {
    setIsSearched,
    setSearchFilter,
    userData,
    loggedin,
    setLoggedin,
    backendURI,
    setUserData,
    setShowRecruiterLogin,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const typeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value.toUpperCase(),
      type: typeRef.current.value.toUpperCase(),
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      type: typeRef.current.value,
    });
  };

  const logout = async () => {
    try {
      const { data } = await axios.post(backendURI + "/api/auth/logout");
      if (data.success) {
        toast.success(data.message);
        setLoggedin(false);
        localStorage.removeItem("userData");
        setUserData(false);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleLogout = () => setLogoutButton((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev); // ✅ Toggle mobile nav

  return (
    <nav className="shadow fixed top-0 left-0 z-50 w-full bg-gray-800 text-white px-4 py-3 flex flex-wrap justify-between items-center">
      {/* Logo + Hamburger */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-3">
          <img
            src="/images/icons8-permanent-job-48.png"
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
        <div className="flex px-4 py-2 border rounded-full lg:flex-row w-full gap-2 lg:gap-0">
          <select
            className="rounded px-3 py-1 focus:outline-none hidden lg:block"
            ref={typeRef}
          >
            <option value="" disabled={false} className="text-black">
              Select job type
            </option>
            <option value="Internship" className="text-black">
              Internship
            </option>
            <option value="Full-Time" className="text-black">
              Full-Time
            </option>
            <option value="Part-Time" className="text-black">
              Part-Time
            </option>
          </select>
          <input
            type="text"
            ref={titleRef}
            placeholder="Search Here"
            className="px-4 py-1 rounded w-full lg:w-80 outline-none"
          />
          <button
            onClick={onSearch}
            type="submit"
            className="border w-20 rounded-full bg-blue-900 hover:bg-blue-800 py-1 px-3 "
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
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-center lg:items-center">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/applications" className="hover:text-yellow-400">
                Applied Jobs
              </Link>
            </li>
            <div className="relative">
              <button
                onClick={toggleLogout}
                className="px-3 py-1 rounded-lg bg-gray-700"
              >
                {userData?.name?.charAt(0)?.toUpperCase() || "U"}
              </button>

              {logoutButton && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-20">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>
        )}

        {!loggedin && (
          <div className="flex flex-col lg:flex-row gap-2">
            <Link to="/rec-login">
              <button
                onClick={(e) => {
                  setShowRecruiterLogin(true);
                }}
                className="border py-1 px-3 rounded-lg bg-blue-900 hover:bg-blue-800"
              >
                Recruiter Login
              </button>
            </Link>
            <Link to="/login">
              <button className="border py-1 px-3 rounded-lg bg-blue-900 hover:bg-blue-800">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
