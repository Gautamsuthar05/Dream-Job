import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";

const Apply = () => {
  const { id } = useParams(); // Get job ID from URL parameters
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  // Fetch job data based on the job ID
  const fetchJobData = async () => {
    const data = jobs.filter((job) => job.id === Number(id));
    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobData();
    }
  }, [id, jobs]);

  return jobData ? <div></div> : <Loading />;
};

export default Apply;
