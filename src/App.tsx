import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Home from "./page/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen w-full flex flex-col">
				<Routes>
					<Route
						path="/"
						element={
							// isLoggedin ? <Home /> : <Navigate to={"/login"} />
							<Home />
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
