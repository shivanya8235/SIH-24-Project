import React, { useState } from "react";
import Header from "../component/header/header";
import ImageUploadForm from "../component/form/ImageUploadForm";
import DiseaseResult from "../component/disease-result/DiseaseResult";
import { uploadCropImageService } from "../service";
import toast from "react-hot-toast";
import Footer from "../component/footer/Footer";
const Home = () => {
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //! Post image data to backend
  const handleCropImageUpload = async (formData) => {
    setIsLoading(!isLoading);
    try {
      const data = await uploadCropImageService(formData);
      console.log(data);
      setDiseaseResult(data);
      setIsLoading(!isLoading);
    } catch (error) {
      const errMsg = error.message || "something wents wrong.";
      setError(errMsg);
      toast.error(errMsg);
      console.error("Error uploading image:", error);
      setIsLoading(!isLoading);
      return error;
    }
  };

  const uploadAgainHandler = () => {
    setDiseaseResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="h-full">
        {isLoading && !error && !diseaseResult && (
          <div className="py-4 text-xl font-semibold text-center">
            Loading...
          </div>
        )}
        {diseaseResult && (
          <DiseaseResult
            error={error}
            uploadAgainHanlder={uploadAgainHandler}
            {...diseaseResult}
          />
        )}
        {!diseaseResult && !isLoading && !error && (
          <ImageUploadForm handleCropImageUpload={handleCropImageUpload} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
