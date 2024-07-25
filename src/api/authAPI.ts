import { axiosInstance } from "./apiConfig";

export const login = async (email: string, password: string) => {
	try {
		const response = await axiosInstance.post(
			"/auth/login",
			{ username: email, password: password }
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const signup = async (
	email: string,
	password: string,
	fullname: string
) => {
	try {
		const response = await axiosInstance.post(
			"/auth/signUp",
			{
				username: email,
				password: password,
				fullname: fullname || "nam",
			}
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const logout = async (accessToken: string, refreshToken: string) => {
	try{
		const response = await axiosInstance.post(
			"/auth/logout",
			{
				accessToken: accessToken,
				refreshToken: refreshToken
			}
		)
		return response
	} catch (e){
		console.log(e)
	}
}