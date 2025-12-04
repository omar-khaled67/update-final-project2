import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/`;

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    baseURL: BASE_URL
})
