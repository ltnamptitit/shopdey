import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import SignUp from "./page/SignUp";
import Home from "./page/Home";

function App() {
	const isLoggedin  = useSelector((state: RootState) => state.auth.isLogged);
	return (
		<BrowserRouter>
			<div className="min-h-screen w-full flex items-center justify-center">
				<Routes>
					<Route
						path="/"
						element={
							isLoggedin ? <Home /> : <Navigate to={"/login"} />
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
				{/* <Login /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
