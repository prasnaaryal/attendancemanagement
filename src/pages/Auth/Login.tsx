import axios from "../../config/axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginDataRequest } from "../../redux/api/apiActions";
import { RootState } from "../../redux/rootReducer";


interface LoginData {
  email: string;
  password: string;
  redirect_url: string;

}

const Login = () => {

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.api);

  const {
    register,
    
    formState: { errors },
  } = useForm<LoginData>();

  const handleSubmit = (loginData: LoginData) => {
    const payload = {
      ...loginData,
      redirect_url: "https://www.instagram.com/direct/t/17844355349713509/"
    };
    dispatch(loginDataRequest(payload));
  };

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
        <div className="bg-white w-[500px] p-8 rounded-lg shadow-md">
          {/* Role Selection */}
          <div className="flex justify-between mb-6">
            <div className="flex items-center p-4 w-[200px] bg-[#F0F4FB] border border-[#5F6EF1] rounded cursor-pointer">
              <input
                type="radio"
                name="user-role"
                className="w-4 h-4 text-blue-600"
              />
              <label className="ms-2 text-sm font-medium text-[#3C4EF1]">
                Teacher
              </label>
            </div>
            <div className="flex items-center p-4 w-[200px] bg-[#F0F4FB] border border-[#5F6EF1] rounded cursor-pointer">
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
          <form
        onSubmit={(e) => {
          e.preventDefault();
          // You'll need to pass the form data to handleSubmit
          handleSubmit({

            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            redirect_url: "" // This will be added in handleSubmit
          });
        }}
        className="space-y-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-[#212529]"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm  mb-2 text-[#212529]"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-0 focus:ring-offset-0"
              />
              <label className="ml-2 text-sm text-[#212529]">Remember me</label>
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
};

export default Login;
