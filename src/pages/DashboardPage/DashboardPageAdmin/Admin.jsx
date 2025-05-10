import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const Admin = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>carBazar | dashboard | Admin </title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-6 py-12 rounded-2xl shadow-2xl">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Hi, Welcome
            <span className="ml-2 text-yellow-400">
              {user?.displayName || "Back"}
            </span>
          </h2>
          <p className="text-lg text-gray-100">
            We're glad to have you here! Explore your dashboard and manage your
            preferences easily.
          </p>
        </div>
      </div>
    </>
  );
};

export default Admin;
