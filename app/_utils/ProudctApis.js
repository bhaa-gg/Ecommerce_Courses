const { default: axios } = require("axios");

import axiosClient from './axiosClient.js';

export const getProudct = async () => {
    return await axiosClient.get("/proudcts?populate=*").then(({ data }) => data).catch(err => err)
}

export const getProudctDetails = (id) => {
    return axiosClient.get(`/proudcts/${id}?populate=*`).then(({ data }) => data).catch(err => err)
}

export const categoryFilteration = (cat) => {
    return axiosClient.get(`/proudcts/?filters[category][$eq]=${cat}&populate=*`).then(({ data }) => data).catch(err => err)
}



