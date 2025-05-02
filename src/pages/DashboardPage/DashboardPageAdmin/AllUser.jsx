import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
          console.log("deleted data ", res);
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>carBazar | Dashboard | All Users</title>
      </Helmet>

      <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          All Users Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              All Users
            </h2>
            <p className="text-3xl font-bold text-blue-600">{users.length}</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Total Registered
            </h2>
            <p className="text-3xl font-bold text-green-600">{users.length}</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full">
            <thead className="bg-blue-100">
              <tr className="text-md font-semibold text-gray-700">
                <th className="py-4 px-6 text-left">#</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-center">Make Admin</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map((user, idx) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="py-4 px-6">{idx + 1}</td>
                  <td className="py-4 px-6 text-blue-700 font-medium">
                    {user.email}
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-semibold">
                    {user.name}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition"
                        title="Make Admin"
                      >
                        <FaUsers
                          onClick={() => handleMakeAdmin(user)}
                          className="text-blue-600 text-lg"
                        />
                      </button>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
                      title="Action"
                    >
                      <FaTrash className="text-red-600 text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUser;
