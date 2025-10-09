/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const Recruiter = () => {
  const [state, setState] = useState("Sign-up");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [istxtDataSubmt, setistxtDataSubmt] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state !== "Login" && !istxtDataSubmt) {
      setistxtDataSubmt(true);
    }
  };

  return (
    <>
      <div className="min-h-screen shadow-lg flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Recruiter {state}
            </h2>
            {state !== "Login" && istxtDataSubmt && (
              <label
                htmlFor="upload"
                className="flex cursor-pointer gap-4 flex-col items-center"
              >
                <img
                  width="90px"
                  className="rounded-full border-2 p-1"
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://img.icons8.com/?size=100&id=1851&format=png&color=000000"
                  }
                  alt=""
                />
                <input
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  type="file"
                  id="upload"
                  hidden
                />
                <p>Upload company logo</p>
              </label>
            )}
            {state === "Login" ? (
              <></>
            ) : istxtDataSubmt ? (
              <></>
            ) : (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}
            {istxtDataSubmt && state !== "Login" ? (
              <></>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="password"
                    required
                  />
                </div>
              </>
            )}
            <div className="flex items-center justify-between">
              {state === "Login" ? (
                <></>
              ) : (
                !istxtDataSubmt && (
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                )
              )}
              {state === "Login" && (
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              {state === "Login"
                ? "Login"
                : istxtDataSubmt
                ? "Next"
                : "Create Account"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            {state === "Login" ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    setState("Sign-up");
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={(e) => {
                    setState("Login");
                  }}
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Recruiter;
