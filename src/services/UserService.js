import axios from "axios"

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/login`, data)
    return res.data
}

export const registerUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/register`, data)
    return res.data
}

