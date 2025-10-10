import viewApplications from "../assets/ViewApplications.json";

const RViewApplication = () => {
  return (
    <>
      <div className=" max-sm:p-2 p-8 mx-auto">
        <div className=" overflow-x-auto">
          <table className=" bg-white border border-gray-200 w-full max-w-2xl max-sm:text-sm">
            <thead>
              <tr className=" border-b">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
                <th className="py-2 px-4 text-left">Resume</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {viewApplications.map((applicant, idx) => {
                return (
                  <tr key={idx} className=" text-gray-700">
                    <td className="py-2 px-4 text-left border-b">{idx + 1}</td>
                    <td className="py-2 px-4 text-left border-b">
                      {applicant["user name"]}
                    </td>
                    <td className="py-2 px-4 text-left border-b max-sm:hidden">
                      {applicant["Job-title"]}
                    </td>
                    <td className="py-2 px-4 text-left border-b max-sm:hidden">
                      {applicant.Location}
                    </td>
                    <td className="py-2 px-4 text-left border-b">
                      <a
                        href=""
                        target="_blank"
                        className=" bg-blue-50 text-blue-400 rounded px-3 py-1 inline-flex gap-2 items-center"
                      >
                        Resume
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b relative">
                      <div className=" relative inline-block text-left group">
                        <button className=" text-gray-500 action-button">
                          ...
                        </button>
                        <div className=" hidden z-10 absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border rounded shadow border-gray-200 group-hover:block">
                          <button className=" w-full px-4 py-2 block text-left text-blue-500 hover:bg-gray-100">
                            Accept
                          </button>
                          <button className=" w-full px-4 py-2 block text-left text-red-500 hover:bg-gray-100">
                            Reject
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RViewApplication;
