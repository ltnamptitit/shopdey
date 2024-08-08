import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen w-full flex flex-col bg-slate-600">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/product/*" element={<ProductDetail />} />
				</Routes>
				{/* <Login /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
