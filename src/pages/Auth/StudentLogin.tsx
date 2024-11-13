import React from 'react'

const StudentLogin = () => {
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
            <div className="bg-white w-[624px] h-[380px] p-8 rounded-lg shadow-md">
             
    
              {/* Login Form */}
              <form>
                <div className="mb-4">
                  <label className="block text-sm mb-2 text-[#212529]">
                    Matrix Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm  mb-2 text-[#212529]">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
               
                <button className="w-[80px] bg-[#4154F1] text-white py-2 rounded">
                  Sign in
                </button>
                <div className="text-left mt-4">
                  <a href="#" className="text-xs text-[#6C757D]">
                    Forgot password?
                  </a>
                </div>
                <div className="text-left mt-4 text-base text-[#212529]">
                  Don't have an account?{" "}
                  <a href="#" className="text-[#0DCAF0] text-sm">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default StudentLogin