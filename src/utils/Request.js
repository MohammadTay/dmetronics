import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://dmetronics.onrender.com/:8800/api/",
    withCredentials: true,
});

export default newRequest;