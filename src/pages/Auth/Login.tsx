import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto min-h-screen grid grid-cols-12 bg-[#EDF1F7] p-8 items-center">
      {/* Left Section */}
      <div className="col-span-6 p-8">
        <h1 className="text-6xl font-bold">Attendance</h1>
        <h1 className="text-6xl text-[#012970] font-bold">for your business</h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at
          cupiditate quis eum maiores libero veritatis? Dicta facilis sint
          aliquid ipsum atque?
        </p>
      </div>

      {/* Right Section */}
      <div className="col-span-6 flex justify-center">
        <div className="bg-white w-[400px] p-8 rounded-lg shadow-md">
          {/* Role Selection */}
          <div className="flex justify-between mb-6">
            <div className="flex items-center p-4 border border-[#5F6EF1] rounded cursor-pointer">
              <input
                type="radio"
                name="user-role"
                className="w-4 h-4 text-blue-600"
              />
              <label className="ms-2 text-sm font-medium text-[#3C4EF1]">
                Teacher
              </label>
            </div>
            <div className="flex items-center p-4 border border-[#5F6EF1] rounded cursor-pointer">
              <input
                type="radio"
                name="user-role"
                className="w-4 h-4 text-blue-600"
              />
              <label className="ms-2 text-sm font-medium text-[#3C4EF1]">
                Admin
              </label>
            </div>
          </div>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-0 focus:ring-offset-0"
              />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">
              Sign in
            </button>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
