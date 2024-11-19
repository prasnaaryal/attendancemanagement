import axios from "../../config/axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDataRequest } from "../../redux/api/apiActions";
import { RootState } from "../../redux/rootReducer";

import { useForm } from "react-hook-form";

type FormData = {
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  password: string;
  redirect_url: string;
};

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.api);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  const handleSubmit = (formData: FormData) => {
    const payload = {
      ...formData,
      redirect_url: "https://www.instagram.com/direct/t/17844355349713509/"
    };
    dispatch(postDataRequest(payload));
  };

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const response = await axios.post(
  //       "/auth/create-account/",

  //       {
  //         ...data,
  //         redirect_url: "https://www.instagram.com/direct/t/17844355349713509/",
  //       }
  //     );
  //     if (response.status === 200) {
  //       alert("Account created successfully!");
  //     } else {
  //       alert("Failed to create account. Check console for details.");
  //     }
  //   } catch (error) {
  //     console.error("Network Error:", error);
  //     alert("A network error occurred. Please try again.");
  //   }
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // You'll need to pass the form data to handleSubmit
          handleSubmit({
            first_name: e.currentTarget.first_name.value,
            last_name: e.currentTarget.last_name.value,
            middle_name: e.currentTarget.middle_name.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            redirect_url: "" // This will be added in handleSubmit
          });
        }}
        className="space-y-6"
      >
          {/* First Name */}
          <div>
          <label
            htmlFor="first_name"
            className="block mb-1 font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            {...register("first_name", {
              required: true,
            })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
          />
        </div>

        {/* Middle Name */}
        <div>
          <label
            htmlFor="middle_name"
            className="block mb-1 font-medium text-gray-700"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="middle_name"
            {...register("middle_name", {
              required: true,
            })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your middle name (optional)"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="last_name"
            className="block mb-1 font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", {
              required: true,
            })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;