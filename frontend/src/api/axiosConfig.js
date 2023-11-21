import axios from "axios";
import SessionManager from "../SessionManager";

const api = axios.create({
  baseURL: "https://movie-app-backend-7nkr.onrender.com",
});

// api.interceptors.request.use((config) => {
//   console.log(token);

//   if (token) {
//     config.headers.Authorization = `Bearer ${token.replace(/^"(.*)"$/, "$1")}`;
//   }

//   return config;
// });

export default api;
