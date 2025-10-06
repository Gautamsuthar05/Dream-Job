import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import moment from "moment";

const Apply = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJobData = () => {
    const numericId = Number(id);
    const job = jobs.find((job) => job.id === numericId);
    if (job) {
      setJobData(job);
      console.log("Job found:", job);
    } else {
      console.log("No job found for id:", numericId);
    }
  };

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      fetchJobData();
    }
  }, [id, jobs]);

  if (!jobData) return <Loading />;

  return (
    <>
      <Navbar />

      {/* ✅ Top Job Info Card */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 mt-[180px] lg:mt-[100px] p-5 sm:p-8 border bg-sky-50 border-sky-400 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center">
          {/* Left side */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {jobData.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start text-gray-700">
              <span className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/?size=100&id=hFxOoQSMxi28&format=png&color=000000"
                  alt="company-logo"
                  className="w-5 h-5"
                />
                <div>{jobData.company}</div>
              </span>

              <span className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/?size=100&id=85049&format=png&color=000000"
                  alt="location-logo"
                  className="w-5 h-5"
                />
                <div>{jobData.location}</div>
              </span>

              <span className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/?size=100&id=61703&format=png&color=000000"
                  alt="salary-logo"
                  className="w-5 h-5"
                />
                <div>{jobData.salary}</div>
              </span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <button className="border border-blue-600 px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all">
              Apply Now
            </button>
            <div className="text-gray-500 text-sm">
              Posted {moment(jobData.postedDate).fromNow()}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Job Description */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-10 flex flex-col">
        <h2 className="text-xl font-semibold pb-3 text-gray-800">
          Job Description:
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          {jobData.description}
        </p>
      </div>

      {/* ✅ Requirements */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-10 flex flex-col">
        <h2 className="text-xl font-semibold pb-3 text-gray-800">
          Requirements:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {jobData.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* ✅ Key Responsibilities */}
      {jobData.keyResponsibilities && (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-10 flex flex-col">
          <h2 className="text-xl font-semibold pb-3 text-gray-800">
            Key Responsibilities:
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {jobData.keyResponsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Bottom Apply Button */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-10 flex justify-center">
        <button className="border border-blue-600 px-8 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all w-full sm:w-auto">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default Apply;
