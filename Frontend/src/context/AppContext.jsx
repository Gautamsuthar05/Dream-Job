import { createContext, useEffect, useState } from "react";
import jobsData from "../assets/jobs.json";
const AppContext = createContext();
import axios from "axios";
import { toast } from "react-toastify";
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({ title: "", type: "" });
  const [jobs, setJobs] = useState([]);
  const [userData, setUserData] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const backendURI = import.meta.env.VITE_BACKEND_URI;
  axios.defaults.withCredentials = true;

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendURI + "/api/user/data");
      data.success ? setUserData(data.userData) : toast.error(data.message);
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContext;
