import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://education-website-backend.onrender.com", // Backend URL
});

export default axiosInstance;
