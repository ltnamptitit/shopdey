import { login, logout, signup } from "../api/authAPI";

const useAuth = () => {
	const handleLogin = async (email: string, password: string) => {
		try {
			// const navigate = useNavigate();
			const response = await login(email, password);
			return response;
		} catch (error) {
			throw error;
		}
	};

	const handleSignup = async (
		email: string,
		password: string,
		fullname: string
	) => {
		try {
			const response = await signup(email, password, fullname);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogOut = async (accessToken: string, refreshToken: string) => {
		try {
			const response = await logout(accessToken, refreshToken);
			console.log(response);
			return response;
		} catch (e) {
			console.log(e);
		}
	};
	return { handleLogin, handleSignup, handleLogOut };
};

export default useAuth;
