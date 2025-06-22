import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTittle";
import useService from "../../../hooks/useService";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageService = () => {
  const [service, , refetch] = useService();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/service/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: `${item.title}`,
            text: "Your service item has been deleted.",
            icon: "success",
          });
        }
        console.log("deleted data ", res);
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>carBazar | dashboard | ManageService </title>
      </Helmet>
      <div>
        <SectionTitle
          heading="6:00 AM FROM 12:PM"
          subHeading="Manage Service"
        ></SectionTitle>
      </div>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        {/* Highlight Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Service Items:{" "}
              <span className="text-blue-600">{service.length}</span>
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b-2 border-gray-300 mb-8"></div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full">
            <thead className="bg-blue-100">
              <tr className="text-lg text-gray-700 font-semibold text-left">
                <th className="py-4 px-6">#</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Update</th>
                <th className="py-4 px-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {service.map((item, idx) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="py-4 px-6 font-medium">{idx + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                      <span className="font-semibold text-gray-800">
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-green-600">
                    ${item.price}
                  </td>
                  <td className="py-4 px-6">
                    <Link to = {`/dashboard/updateItem/${item._id}`}>
                      <button className="p-2 rounded-full hover:bg-blue-100 transition">
                        <FiEdit className="text-blue-600 text-xl" />
                      </button>
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="p-2 rounded-full hover:bg-red-100 transition"
                    >
                      <FaTrashAlt className="text-red-600 text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageService;
