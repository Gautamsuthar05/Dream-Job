import { createContext, useEffect, useState } from "react";
import jobsData from "../assets/jobs.json";
const AppContext = createContext();
import axios from "axios";
import { toast } from "react-toastify";
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({ title: "", type: "" });
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : false;
  });
  const [isSearched, setIsSearched] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const backendURI = import.meta.env.VITE_BACKEND_URI;
  axios.defaults.withCredentials = true;

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendURI + "/api/user/data");
      data.success
        ? (setUserData(data),
          setLoggedin(true),
          localStorage.setItem("userData", JSON.stringify(data)))
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to fetch jobs
  const fetchJobs = async () => {
    getUserData();
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
    if (userData) setLoggedin(true);
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    getUserData,
    backendURI,
    userData,
    setUserData,
    loggedin,
    setLoggedin,
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContext;
