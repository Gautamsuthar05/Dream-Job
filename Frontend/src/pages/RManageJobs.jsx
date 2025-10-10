import React from "react";
import manageJobs from "../assets/manageJobs.json";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const RManageJobs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" p-8 max-sm:p-2">
        <table className=" bg-white border border-gray-200 w-full max-w-2xl max-sm:text-sm">
          <thead>
            <tr className=" border-b">
              <th className="py-2 px-4 text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 text-left ">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Date</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Applicants</th>
              <th className="py-2 px-4 text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobs.map((data, idx) => {
              return (
                <tr className=" border-b" key={idx}>
                  <td className="py-2 px-4 text-left max-sm:hidden">
                    {idx + 1}
                  </td>
                  <td className="py-2 px-4 text-left ">{data.title}</td>
                  <td className="py-2 px-4 text-left max-sm:hidden">
                    {moment(data.date).format("ll")}
                    {/* {data.date} */}
                  </td>
                  <td className="py-2 px-4 text-left max-sm:hidden">
                    {data.location}
                  </td>
                  <td className="py-2 px-4 text-center">{data.applicants}</td>
                  <td className="py-2 px-4 text-center">
                    <input type="checkbox" className=" scale-125" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" mt-4 flex justify-end">
        <button className=" bg-black text-white px-4 py-2 rounded" onClick={()=>{navigate("/dashboard/add-jobs")}}>
          Add New Job
        </button>
      </div>
    </>
  );
};

export default RManageJobs;
