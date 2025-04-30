import React from "react";
import useCart from "../../hooks/useCart";
import { FiDelete, FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
        <title>carBazar | dashboard | MyCart</title>
      </Helmet>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        {/* Highlight Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Service Items:{" "}
              <span className="text-blue-600">{cart.length}</span>
            </h1>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Total Price:{" "}
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </h1>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
              Pay Now
            </button>
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
              {cart.map((item, idx) => (
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
                    <button className="p-2 rounded-full hover:bg-blue-100 transition">
                      <FiEdit className="text-blue-600 text-xl" />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(item._id)}
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

export default Cart;
