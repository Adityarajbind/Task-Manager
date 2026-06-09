import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-g92i.onrender.com/api/auth",
});

export default API;