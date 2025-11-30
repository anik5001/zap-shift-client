import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data.parcelType);
  };
  return (
    <div className="shadow-2xl p-20">
      <h1 className="text-4xl font-bold mb-7">Send a Parcel</h1>
      <p className="text-xl font-bold mb-6">Enter your parcel details</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio"
              value="Document"
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="Non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
