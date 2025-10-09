import React, { useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

function RDashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-gray-800 text-white">
        <nav className="px-4 py-3 flex justify-between items-center">
          {/* Logo and Brand */}
          <div
            onClick={(e) => navigate("/")}
            className="flex items-center gap-3"
          >
            <img
              src="/images/icons8-permanent-job-48.png"
              alt="Dream Job Logo"
              className="w-10 h-10 cursor-pointer"
            />
            <span className="text-xl font-semibold cursor-pointer">
              Dream Job
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative flex items-center gap-1">
            <p>Welcome User</p>
            <img
              width="30px"
              onClick={(e) => {
                setDropdownOpen((prev) => !prev);
              }}
              src="https://img.icons8.com/?size=100&id=114015&format=png&color=000000"
              alt=""
            />

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 z-20"
                role="menu"
              >
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  View Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="flex items-start pt-16">
        {/* Left sidebar with option to add job, manage jobs, view application */}
        <div className="border-r-2 inline-block min-h-screen">
          <ul className="flex flex-col items-start pt-5 pl-1 text-gray-800">
            <NavLink
              to={"add-jobs"}
              className={({ isActive }) =>
                `hover:bg-blue-100 flex items-center justify-start p-1 w-full ${
                  isActive && "bg-blue-100 p-3 border-r-4 border-blue-500"
                }`
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xb6BIWuGB9xH&format=png&color=000000"
                alt=""
                className=" min-w-4 w-8"
              />
              <p className=" max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              to={"manage-jobs"}
              className={({ isActive }) =>
                `hover:bg-blue-100 flex items-center justify-start p-1 w-full${
                  isActive && "bg-blue-100 p-3 border-r-4 border-blue-500"
                }`
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=104081&format=png&color=000000"
                alt=""
                className=" min-w-4 w-8"
              />
              <p className=" max-sm:hidden">Manage Job</p>
            </NavLink>
            <NavLink
              to={"view-applications"}
              className={({ isActive }) =>
                `hover:bg-blue-100 flex items-center justify-start p-1 w-full ${
                  isActive && "bg-blue-100 p-3 border-r-4 border-blue-500"
                }`
              }
            >
              <img
                src="https://img.icons8.com/?size=100&id=13758&format=png&color=000000"
                alt=""
                className=" min-w-4 w-8"
              />
              <p className=" max-sm:hidden">View Job</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RDashboard;
