
import axios from 'axios';

const key = `acee865cbd0b748bcd727e18cf436bee79e2cc19ecf5ecebb37334ac66a7dea915b4dd49948a82e6246024def3fec0b6c12639a91dcb7a4844032e172135b48481e37a68418d4cb1365a16a566bae837d08936d5b9418a6434911c1409164be2cf0b1dd615bc3605ed5f79ccfb60a13169ef666b6bf1efd6941aa0147986cbbc`;
export const addCart = async (payload) => {
    return axios.post("http://localhost:1337/api/carts", payload, {
        headers: {
            Authorization: `Bearer ${key}`
        }
    })
}


export const getCart = async (mail) => {
    return await axios.get(`http://localhost:1337/api/carts?populate[proudcts][populate]=banner&filters[email][$eq]=${mail}`, {
        headers: {
            Authorization: `Bearer ${key}`
        }
    })
}
export const deleteCart = async (id) => {

    return await axios.delete(`http://localhost:1337/api/carts/${id}`, {
        headers: {
            Authorization: `Bearer ${key}`
        }
    })
}
