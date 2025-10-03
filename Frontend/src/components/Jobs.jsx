import AppContext from "../context/AppContext";
import { useContext, useState } from "react";
function Jobs() {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <>
      <div className="flex w-full pt-[170px] lg:pt-[72px] flex-col md:flex-row ">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden p-2 bg-blue-500 mx-4 my-1 text-white rounded"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {/* Left Sidebar */}
        <div
          className={`w-full md:max-w-70 md:block p-6 overflow-y-auto bg-gray-100 rounded-lg shadow-md flex flex-col gap-4 ${
            showFilters ? "" : "hidden"
          }`}
        >
          {isSearched &&
            (searchFilter.title !== "" || searchFilter.type !== "") && (
              <>
                <h3>Current Search</h3>
                <div className="p-3 flex w-fit gap-0.5 bg-white border border-gray-300 rounded-md shadow-sm">
                  {searchFilter.title && (
                    <div className="flex items-center gap-2 bg-blue-300 w-fit p-2 rounded">
                      <h4 className="text-xs"> {searchFilter.title}</h4>
                      <svg
                        onClick={() =>
                          setSearchFilter({ ...searchFilter, title: "" })
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" opacity=".35"></circle>
                        <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"></path>
                        <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"></path>
                      </svg>
                    </div>
                  )}
                  {searchFilter.type && (
                    <div className="flex items-center gap-2 bg-pink-300 p-2 rounded w-fit">
                      <p className="text-xs">{searchFilter.type}</p>
                      <svg
                        onClick={() =>
                          setSearchFilter({ ...searchFilter, type: "" })
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" opacity=".35"></circle>
                        <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"></path>
                        <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </>
            )}
          <h1 className="text-2xl font-semibold">Filter</h1>

          {/* Job Type */}
          <div className="hidden md:block">
            <h2 className="text-lg font-medium mb-2">Job Type</h2>
            <form className="flex flex-col gap-1 pl-3">
              {[
                "Internship",
                "Full Time",
                "Part Time",
                "Freelance",
                "Contract",
                "Remote",
                "Apprenticeship",
                "Volunteer",
              ].map((type, index) => (
                <label
                  key={index}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input type="checkbox" name="jobType" id={`type-${index}`} />
                  {type}
                </label>
              ))}
            </form>
          </div>

          {/* Job Category */}
          <div>
            <h2 className="text-lg mt-2 font-medium mb-2">Job Category</h2>
            <form className="flex flex-col gap-1 pl-3">
              {[
                "Software Development",
                "UI/UX Design",
                "Data Science",
                "DevOps",
                "Product Management",
                "QA Testing",
              ].map((category, index) => (
                <label key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="jobCategory"
                    id={`category-${index}`}
                  />
                  {category}
                </label>
              ))}
            </form>
          </div>

          {/* Experience Level */}
          <div className="hidden md:block">
            <h2 className="text-lg font-medium mb-2">Experience Level</h2>
            <form className="flex flex-col gap-1 pl-3">
              {[
                "Entry Level",
                "Mid Level",
                "Senior Level",
                "Manager",
                "Director",
              ].map((level, index) => (
                <label key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="experience"
                    id={`exp-${index}`}
                  />
                  {level}
                </label>
              ))}
            </form>
          </div>

          {/* Location */}
          {/* <div className="hidden md:block">
            <h2 className="text-lg mt-2 font-medium mb-2">Location</h2>
            <form className="flex flex-col gap-1 pl-3">
              {["Remote", "Hybrid", "On-site (India)", "On-site (Global)"].map(
                (loc, index) => (
                  <label key={index} className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="location"
                      id={`loc-${index}`}
                    />
                    {loc}
                  </label>
                )
              )}
            </form>
          </div> */}

          {/* Salary Range */}
          {/* <div className="hidden md:block">
            <h2 className="text-lg font-medium mb-2">Salary Range</h2>
            <form className="flex flex-col gap-1 pl-3">
              {["₹0-₹20K", "₹20K-₹50K", "₹50K-₹1L", "₹1L+"].map(
                (range, index) => (
                  <label key={index} className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="salary"
                      id={`salary-${index}`}
                    />
                    {range}
                  </label>
                )
              )}
            </form>
          </div> */}

          {/* Tech Stack */}
          {/* <div className="hidden md:block">
            <h2 className="text-lg font-medium mb-2">Tech Stack</h2>
            <form className="flex flex-col gap-1 pl-3">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "Express",
                "TypeScript",
                "Next.js",
              ].map((tech, index) => (
                <label key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="techStack"
                    id={`tech-${index}`}
                  />
                  {tech}
                </label>
              ))}
            </form>
          </div> */}
        </div>
        <div className="w-full px-4 py-6 overflow-y-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage).map((job, index) => (
              <div
                key={index}
                id={`job-${index}`}
                className="border border-gray-300 rounded-md shadow-sm p-4 bg-white flex flex-col justify-center min-h-[120px]"
              >
                <h1 className=" text-lg font-semibold text-gray-700">
                  {job.title}
                </h1>
                <div className="flex gap-1">
                  <p className="bg-gray-200 p-1 rounded">
                    Location:{job.location}
                  </p>
                  <p className="bg-gray-200 p-1 rounded">Type:{job.type}</p>
                  <p className="bg-gray-200 p-1 rounded">Salary:{job.salary}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{job.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    Apply
                  </button>
                  <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded ml-2">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          {jobs.length === 0 && (
            <p className="text-center col-span-2">No jobs found.</p>
          )}
          {jobs.length > 0 && (
            <div className="flex justify-center mt-6">
              <a href="#job-list">
                <button
                  className="border border-gray-400 p-2 hover:bg-gray-200 rounded"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  Prev
                </button>
              </a>
              <a href="#job-list">
                <button className="mx-2 border border-gray-400 p-2 hover:bg-gray-200 rounded">
                  Page {currentPage}
                </button>
              </a>
              <a href="#job-list">
                <button
                  className="border border-gray-400 p-2 hover:bg-gray-200 rounded"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  Next
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Jobs;
