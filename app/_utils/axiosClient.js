const { default: axios } = require("axios");


const key = process.env.NEXT_PULBIC_API_TOKEN;
const apiUrl = "http://localhost:1337/api";

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${key}`
    }
})

export default axiosClient;
