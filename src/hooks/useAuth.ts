import { useNavigate } from "react-router-dom";
import { login, signup } from "../api/authAPI";
import { setLogged } from "../slice/authSlice";


const useAuth = () => {
	const handleLogin = async (
		email: string,
		password: string
	) => {
		try {
			// const navigate = useNavigate();
			const response = await login(email, password);
			return response
		} catch (error) {
			throw error;
		}
	};

	const handleSignup = async (email: string, password: string, fullname: string) => {
		try {
			const response = await signup(email, password, fullname);
			console.log(response);
		} catch (error) {}
	};
	return { handleLogin, handleSignup };
};

export default useAuth;
