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

// apiHandler.signup = (userInfo) => {
// 	return apiHandler
// 		.post("/api/auth/signup")
// 		.then((res) => res.data)
// 		.catch(errorHandler)
// }

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/api/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createBand(reqInfo) {
    return service
      .post("/api/bands", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createMusician(reqInfo) {
    return service
      .post("/api/musicians", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllBands() {
    return service
      .get("/api/bands")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllMusicians() {
    return service
      .get("/api/musicians")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneProfile() {
    return service
      .get("/api/profile")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateProfile(reqInfo) {
    return service
      .post("/api/profile", reqInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getAllTheCats() {
  // 	return service
  // 		.get("/api/cats")
  // 		.then((res) => res.data)
  // 		.catch(errorHandler);
  // },
};

// export default apiHandler

export default service;
