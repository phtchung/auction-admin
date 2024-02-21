import axios from "axios";
import { baseUrl } from "./baseUrl";


import { toast } from "react-toastify";
import token from "../../Utils/token.js";


const privateHttp1 = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

privateHttp1.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

privateHttp1.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized"
        ) {
            token.removeAccessToken();
            toast.success("Need to login");
            window.location.href = "/login";
            return Promise.reject(error);
        }
        return Promise.reject(error);
    },
);
export default privateHttp1;

