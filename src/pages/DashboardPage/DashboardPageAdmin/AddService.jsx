import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTittle";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const featuresArray = data.features
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const formData = {
      ...data,
      features: featuresArray,
      image: data.image[0]?.name || "",
    };

    console.log("Final Form Data:", formData);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>carBazar | Dashboard | Add Service</title>
      </Helmet>

      <SectionTitle heading="Add Service" subHeading="Create a new service" />

      <div className="bg-white border rounded-xl max-w-4xl mx-auto mt-10 p-8 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Service Title *
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Brake Pad Replacement"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Price + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Price ($) *
              </label>
              <input
                type="number"
                {...register("price", { required: "Price is required" })}
                placeholder=""
                className="input input-bordered w-full"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Image *
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: "Image is required" })}
                className="file-input file-input-bordered w-full"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Category *
            </label>
            <select
              defaultValue=""
              {...register("category", { required: "Category is required" })}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="Home Service">Home Service</option>
              <option value="Brake Service">Brake Service</option>
              <option value="Engine Replace">Engine Replace</option>
              <option value="Battery Service">Battery Service</option>
              <option value="Car Observation">Car Observation</option>
              <option value="Tire Repair">Tire Repair</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Features */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Features (comma separated) *
            </label>
            <input
              type="text"
              {...register("features", {
                required: "At least 3 features are required",
                validate: (value) => {
                  const features = value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item.length > 0);
                  return (
                    features.length >= 3 || "Please enter at least 3 features"
                  );
                },
              })}
              placeholder="Brake inspection, Engine report, Battery check"
              className="input input-bordered w-full"
            />
            {errors.features && (
              <p className="text-red-500 text-sm mt-1">
                {errors.features.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Description *
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Smooth and safe braking with professional service."
              className="textarea textarea-bordered w-full h-28"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="btn px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md"
            >
              <FaPlus className="mr-2" />
              Add Service
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddService;
