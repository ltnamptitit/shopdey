import { axiosInstance } from "./apiConfig"

export const getProduct = async (name: string) => {
    try {
        const response = await axiosInstance.get(`/product/${name.toLowerCase()}/page/1`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}