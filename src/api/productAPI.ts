import { axiosInstance } from "./apiConfig"

export const getProduct = async (name: string) => {
    const body = {
        type: name.toUpperCase()
    }
    try {
        const response = await axiosInstance.post(`/product/page/1`, body)
        return response.data
    } catch (error) {
        console.log(error)
    }
}