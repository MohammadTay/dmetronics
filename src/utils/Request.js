import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://dmetronics.onrender.com/api/",
    withCredentials: true,
});

export default newRequest;