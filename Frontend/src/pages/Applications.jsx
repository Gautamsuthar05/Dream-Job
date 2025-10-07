import { useState } from "react";
import Navbar from "../components/Navbar";
import AppliedJobs from "../assets/Applied.json";
import moment from "moment";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className="lg:pt-[80px] pt-[100px] px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex mb-6 mt-3 gap-2">
          {isEdit ? (
            <>
              <label
                htmlFor="resumeUpload"
                className="border border-blue-400 px-2 py-1 rounded-lg"
              >
                <div className="flex">
                  <p className="bg-blue-100 text-blue-600 px-4 py-2 mr-4 rounded-lg">
                    Select Resume
                  </p>
                  <input
                    id="resumeUpload"
                    onChange={(e) => setResume(e.target.files[0])}
                    type="file"
                    accept="application/pdf"
                    hidden
                  />
                  <img
                    src="https://img.icons8.com/?size=100&id=hwKgsZN5Is2H&format=png&color=000000"
                    alt=""
                    width="20px"
                  />
                </div>
              </label>
              <button
                onClick={(e) => setIsEdit(false)}
                className="bg-green-100 px-2 py-1 rounded-lg border border-green-400"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                href=""
                className="bg-blue-100 text-blue-600 rounded-lg px-4 py-2"
              >
                Resume
              </a>
              <button
                onClick={() => {
                  setIsEdit(true);
                }}
                className="rounded-lg text-gray-500 bg-gray-300 px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl mb-4 font-semibold">Applied Jobs</h2>
        <table className="bg-white rounded-lg border min-w-full">
          <thead>
            <tr>
              <th className="border-b px-4 py-3 text-left">Company Name</th>
              <th className="border-b px-4 py-3 text-left">Job Title </th>
              <th className="border-b px-4 py-3 text-left max-sm:hidden">
                Location{" "}
              </th>
              <th className="border-b px-4 py-3 text-left max-sm:hidden">
                Date
              </th>
              <th className="border-b px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {AppliedJobs.map((job, index) =>
              job ? (
                <tr key={job["Job ID"] || index}>
                  <td className="border-b px-4 py-3 text-left">
                    {job["Company Name"]}
                  </td>
                  <td className="border-b px-4 py-3 text-left">
                    {job["Job Title"]}
                  </td>
                  <td className="border-b px-4 py-3 text-left max-sm:hidden">
                    {job.Location}
                  </td>
                  <td className="border-b px-4 py-3 text-left max-sm:hidden">
                    {moment(job.Date).format("ll")}
                  </td>
                  <td className="border-b px-4 py-3 text-left">
                    <span
                      className={`${
                        job.Status === "Accepted"
                          ? "bg-green-100"
                          : job.Status === "Rejected"
                          ? "bg-red-100"
                          : "bg-blue-100"
                      } px-4 py-1.5 rounded`}
                    >
                      {job.Status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;
