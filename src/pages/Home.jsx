import React, { useState } from "react";
import Header from "../component/header/header";
import ImageUploadForm from "../component/form/ImageUploadForm";
import DiseaseResult from "../component/disease-result/DiseaseResult";
import { uploadCropImageService } from "../service";
import toast from "react-hot-toast";
const Home = () => {
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //! Post image data to backend
  const handleCropImageUpload = async (formData) => {
    setIsLoading(!isLoading);
    try {
      const data = uploadCropImageService(formData);
      setDiseaseResult(data);
      setIsLoading(!isLoading);
    } catch (error) {
      const errMsg = error.message || "something wents wrong.";
      toast.error(errMsg);
      console.error("Error uploading image:", error);
      setIsLoading(!isLoading);
      return error;
    }
  };

  return (
    <div>
      <Header />
      {diseaseResult && <DiseaseResult diseaseResult={diseaseResult} />}
      <ImageUploadForm handleCropImageUpload={handleCropImageUpload} />
    </div>
  );
};

export default Home;
