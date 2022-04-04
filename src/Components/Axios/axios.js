import axios from "axios";
// axios.defaults.withCredentials = true
// const instance = axios.create({ baseURL: "http://3.110.30.123:8000/api/" });
const instance = axios.create({ baseURL: "http://localhost:8000/api/" });

export default instance;
