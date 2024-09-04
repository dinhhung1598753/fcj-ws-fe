import axios from "axios";
import Cookies from "js-cookie";

// Create an instance of Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // You can set default headers here if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    // Get the auth token from local storage or another source
    const token = Cookies.get("accessToken");
    // Add the token to the headers if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor if needed
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors or refresh tokens here
    if (error.response && error.response.status === 401) {
      // Remove token in cookie
      Cookies.remove("accessToken");
      console.log("error: ", error);
      window.location.href = "/login"; // Redirect to the login page
    }
    return Promise.reject(error);
  }
);

export default api;
