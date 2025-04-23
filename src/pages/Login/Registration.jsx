// components/LoginForm.jsx
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>carBazar | sign up</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side Image */}
          <div className="hidden md:block md:w-1/2 bg-blue-100">
            <img
              src="https://i.ibb.co.com/kVd4QdsL/registration.jpg"
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="text-center mb-4">
              <img
                src="https://i.ibb.co.com/kVd4QdsL/registration.jpg"
                alt="logo"
                className="mx-auto w-10 h-10"
              />
              <h2 className="text-xl font-bold mt-2">Welcome back carBazar</h2>
            </div>

            {/* Google Sign In */}
            <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 mb-4">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-500 mb-4">
              OR LOGIN WITH EMAIL
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium">User Name</label>
                <input
                  type="text"
                  placeholder="userName"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Photo URL</label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  {...register("photo", { required: "photoURL is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm">{errors.photo.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-4 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs text-blue-900 uppercase  hover:underline"
              >
                or sign in
              </Link>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
