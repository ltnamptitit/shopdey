import axios from "axios";

export const login = async (email: string, password: string) => {
	try {
		const response = await axios.post(
			"http://localhost:8080/hnshop/api/auth/login",
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
		const response = await axios.post(
			"http://localhost:8080/hnshop/api/auth/signup",
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
