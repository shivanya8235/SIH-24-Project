import React from "react";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";

const ImageUploadForm = ({ handleCropImageUpload }) => {
  const [description, setDiscription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (file && file.size > maxSize) {
      toast.error(
        "Max File Size should be 2 MB. Please upload a smaller image."
      );
      setSelectedFile(null);
      setImageURL(null);
      return;
    }
    setSelectedFile(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", description);
    await handleCropImageUpload(formData);
  };

  return (
    <div className="flex flex-row justify-center p-1 items-center min-h-[80vh]">
      <div className="border border-slate-300 rounded-lg shadow-lg flex flex-col justify-center items-center w-fit md:py-6 md:px-4 p-2">
        <h2 className="font-bold text-2xl text-center p-2 md:p-4">
          Submit Your Crop Image
        </h2>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col justify-center gap-4">
          {imageURL && (
            <div className="relative border border-slate-200 w-52 h-52 ">
              <button className="absolute -top-2 -right-3 text-3xl rounded-full cursor-pointer bg-[var(--ternery-color)]">
                <MdCancel
                  className="text-white"
                  onClick={() => {
                    setImageURL(null);
                    setSelectedFile("");
                  }}
                />
              </button>
              <img
                src={imageURL}
                alt="image"
                loading="lazy"
                className="object-contain w-full h-full mx-auto "
              />
            </div>
          )}
          <div className="flex flex-col">
            <label className="font-semibold">Upload Image</label>
            <input
              className="p-1 border rounded-md border-slate-400"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleFileChange}
              name="image"
              required={true}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Describe Symptoms</label>
            <textarea
              rows="5"
              className="p-1 border rounded-md border-slate-400"
              placeholder="Describe the symptoms here..."
              onChange={e => setDiscription(e.target.value)}
              value={description}
              name="description"></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[var(--ternery-color)] px-4 py-1 font-semibold text-white rounded-md w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;
