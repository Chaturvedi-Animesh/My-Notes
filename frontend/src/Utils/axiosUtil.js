import axios from "axios";

const baseURL = "http://localhost:3001";

const instance = axios.create({
  baseURL: baseURL,
});

instance.defaults.withCredentials = true;

export default instance;
