import axios from "axios";
import axiosClient from './axiosClient';




export const createOreder = async (data) => {
    return await axiosClient.post("/orders", data)
}