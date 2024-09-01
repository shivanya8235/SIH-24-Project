import axios from "axios";

export const BASEURL = "https://cropdiseasedetection-2.onrender.com";

export const uploadCropImageService = async (formData) => {
  try {
    const res = await axios.post(BASEURL, formData);
    console.log("Response", res);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
