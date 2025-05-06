import React, { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={registerUser}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className=" w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
