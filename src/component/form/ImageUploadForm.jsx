import React from "react";
import Container from "../container/Container";
import { useState } from "react";

const ImageUploadForm = () => {
  const [imageData, setImageData] = useState({
    image: "",
    description: "",
  });
  const handleOnChange = (e) => {
    setImageData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className="flex flex-row justify-center p-1 items-center min-h-[80vh]">
      <div className="border border-slate-300 rounded-lg shadow-lg flex flex-col justify-center items-center w-fit md:py-6 md:px-4 p-2">
        <h2 className="font-bold text-2xl text-center p-2 md:p-4">
          Submit Your Crop Image
        </h2>
        <form className="flex flex-col justify-center gap-4">
          <div className="flex flex-col">
            <label className="font-semibold">Upload Image</label>
            <input
              className="border border-slate-400 p-1 rounded-md"
              type="file"
              onChange={handleOnChange}
              value={imageData.image}
              name="image"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Describe Symptoms</label>
            <textarea
              className="border border-slate-400 p-1 rounded-md"
              placeholder="Describe the symptoms here..."
              onChange={handleOnChange}
              value={imageData.description}
              name="description"
            ></textarea>
          </div>
          <div>
            <button className="bg-[var(--ternery-color)] px-4 py-1 font-semibold text-white rounded-md w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;
