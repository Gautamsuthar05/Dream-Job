import React from "react";

const AddJob = () => {
  return <div className="p-4">
    <div>
      <label htmlFor="title" className="flex gap-2">
        <p className="">Job Title</p>
        <input type="text" placeholder="Enter Job Title" className="border rounded-lg px-2" />
      </label>
    </div>
  </div>;
};

export default AddJob;
