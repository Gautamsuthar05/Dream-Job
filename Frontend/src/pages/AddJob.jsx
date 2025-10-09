import React from "react";
import { useState } from "react";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner level");
  const [salary, setSalary] = useState("0");

  return (
    <div className="p-8">
      <form className="flex flex-col gap-3">
        <label htmlFor="title" className="flex flex-col gap-1">
          <p className="">Job Title</p>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter Job Title"
            className="border rounded-lg py-1 px-3"
          />
        </label>
        <label htmlFor="title" className="flex flex-col gap-1">
          <p className="">Job Description</p>
          <textarea
            name=""
            rows="3"
            cols={"40"}
            id="title"
            placeholder="Enter Your Description"
            className="border rounded-lg px-3 py-1"
          ></textarea>
        </label>
        <div className="flex gap-3">
          <label htmlFor="category" className="flex flex-col gap-1 w-fit">
            <p>Job category</p>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg py-1 px-3"
            >
              {[
                "Programming",
                "Data Science",
                "Designing",
                "Networking",
                "Management",
                "Marketing",
                "Cybersecurity",
              ].map((categoryItem, index) => (
                <option key={index} value={categoryItem}>
                  {categoryItem}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="level" className="flex flex-col gap-1">
            <p className="">Experience Level</p>
            <select
              name="level"
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="border rounded-lg py-1 px-3"
            >
              {[
                "Internship",
                "Entry level",
                "Beginner level",
                "Mid level",
                "Senior level",
                "Manager level",
                "Director level",
              ].map((levelItem, index) => (
                <option key={index} value={levelItem}>
                  {levelItem}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="location" className="flex flex-col gap-1">
            <p className="">Job Location</p>
            <select
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg py-1 px-3"
            >
              {[
                "Bangalore",
                "Hyderabad",
                "Mumbai",
                "Delhi",
                "Chennai",
                "Pune",
                "Remote",
              ].map((locItem, index) => (
                <option key={index} value={locItem}>
                  {locItem}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label htmlFor="salary" className="flex flex-col w-fit gap-1">
          <p className="">Expected Salary(per month)</p>
          <input
            type="number"
            id="salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="e.g. 50000"
            min="5000"
            step="1000"
            className="border rounded-lg py-1 px-3"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-4 self-start"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
