import axios from "axios";

const BASEURL = "";

export const uploadCropImageService = async formData => {
  try {
    const res = await axios.post(BASEURL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
