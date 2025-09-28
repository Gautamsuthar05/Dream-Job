import Applications from "../components/Applications";

function Home() {
  return (
    <>
      <div className="flex w-full pt-[160px] lg:pt-[72px]">
        <div className="w-full hidden md:block max-w-70 p-6 overflow-y-auto bg-gray-100 rounded-lg shadow-md flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Sort By</h1>

          {/* Job Type */}
          <div>
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
            <h2 className="text-lg font-medium mb-2">Job Category</h2>
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
          <div>
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
          <div>
            <h2 className="text-lg font-medium mb-2">Location</h2>
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
          </div>

          {/* Salary Range */}
          <div>
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
          </div>

          {/* Tech Stack */}
          <div>
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
          </div>
        </div>
        <Applications />
      </div>
    </>
  );
}

export default Home;
