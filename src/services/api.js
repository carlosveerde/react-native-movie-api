import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.155:3000/", // IP da máquina
});

export default api;
