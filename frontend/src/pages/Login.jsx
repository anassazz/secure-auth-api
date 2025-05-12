import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

    const [data,setData]=useState({
        email:'',
        password:'',
    })


  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const {data}= await axios.post('/login',{ email, password });
      if(data.error){
        toast.error(data.error);
      }else{
        setData({});
        navigate('/dashboard');
        toast.success(data.message);

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginUser}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
            value={data.email}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email"
            onChange={(e)=>setData({...data,email: e.target.value})}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={data.password}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
            onChange={(e)=>setData({...data,password: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
