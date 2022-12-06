import axios from "axios";

const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  // Sign Up / Create an account in the backend
  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Check if isLoggedIn in the backend
  isLoggedIn() {
    return service
      .get("/api/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Signing In in the backend

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Post to create a band request to the db

  createBand(reqInfo) {
    return service
      .post("/api/bands", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Post to create a musician request to the db

  createMusician(reqInfo) {
    return service
      .post("/api/musicians", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get all the band request in the db

  getAllBands(query) {
    return service
      .get(`/api/bands?${query}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get all the band request in the db

  getAllMusicians(query) {
    return service
      .get(`/api/musicians?${query}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get and display one profile

  getOneProfile() {
    return service
      .get("/api/profile")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Edit and Update the profile

  updateProfile(reqInfo) {
    return service
      .patch("/api/profile", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get and display all requests made by the user

  getAllRequests() {
    return service
      .get("/api/myRequests")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Delete the request from the db

  deleteRequest(cat, id) {
    return service
      .delete(`/api/myRequests/${cat}/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default service;
