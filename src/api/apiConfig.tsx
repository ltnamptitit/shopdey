import axios from "axios"

const baseURL = `${import.meta.env.VITE_URL_LOCAL}`

export const axiosInstance = axios.create({
    baseURL: baseURL
})