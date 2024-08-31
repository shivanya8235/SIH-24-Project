import axios from "axios";

// const BASEURL = "http://localhost:5000/CropDisease";
const BASEURL = "https://sih-24-project-backend.onrender.com";

export const uploadCropImageService = async (formData) => {
  try {
    const res = await axios.post(BASEURL, formData);
    console.log("Response", res);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
