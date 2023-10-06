import axios from "axios";

// Create a custom Axios instance with common headers
const axiosApi = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Add common headers here
    "Content-Type": "application/json", // Example content type header
    // Add other common headers as needed
  },
});
export default axiosApi;
