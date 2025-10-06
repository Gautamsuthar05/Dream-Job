import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

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
      <div className="m-[80px] mt-[130px] p-[50px] border border-gray-400 rounded-lg">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col">
            <h1>{jobData.title}</h1>
            <div className="flex gap-3">
              <span className="flex gap-1">
                <img
                  src="https://img.icons8.com/?size=100&id=hFxOoQSMxi28&format=png&color=000000"
                  alt="company-logo"
                  height="10px"
                  width="20px"
                />
                <div>{jobData.company}</div>
              </span>
              <span className="flex gap-1">
                <img
                  src="https://img.icons8.com/?size=100&id=85049&format=png&color=000000"
                  alt="location-logo"
                  height="10px"
                  width="20px"
                />
                <div>{jobData.location}</div>
              </span>
              <span className="flex gap-1">
                <img
                  src="https://img.icons8.com/?size=100&id=61703&format=png&color=000000"
                  alt="salary-logo"
                  height="10px"
                  width="20px"
                />
                <div>{jobData.salary}</div>
              </span>
            </div>
          </div>
          <button className="border px-4 py-2 rounded-lg bg-blue-400">Apply now</button>
        </div>
      </div>
    </>
  );
};

export default Apply;
