import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Affix, Button } from "antd";
import { clearState } from "../redux/slice/authSlice";
import { store } from "../redux/store";

function Header() {
	const location = useLocation();
	const isLogged = store.getState().auth.isLogged;
	const [inputSearch, setInputSearch] = useState<string>("");
	const navigate = useNavigate();
	// const search = () => {
	// 	console.log(inputSearch);
	// };
	const handleLogout = () => {
		store.dispatch(clearState());
	};
	return (
		location.pathname !== "/login" &&
		location.pathname !== "/signup" && (
			<Affix>
				<div className="w-full mx-auto flex justify-center py-6 sticky bg-gray-900 text-white">
					<div className="min-w-full max-w-screen-xl sm:px-6 lg:px-8">
						<div className="w-full flex flex-row justify-between">
							<div
								className="flex justify-center items-center"
								onClick={() => navigate("/")}
							>
								<span>Logo</span>
							</div>
							<div className="basis-auto flex flex-row items-center pr-4 cursor-pointer">
								{!isLogged ? (
									<>
										<Button
											className="mr-2"
											type="primary"
											onClick={() => {
												navigate("/signup");
											}}
										>
											Sign up
										</Button>
										<Button
											type="primary"
											onClick={() => navigate("/login")}
										>
											Login
										</Button>
									</>
								) : (
									<>
										<Button onClick={() => handleLogout()}>
											Log out
										</Button>
										<div className="mr-2">
											<ShoppingOutlined className="text-3xl" />
										</div>
										<div>
											<UserOutlined className="text-3xl" />
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</Affix>
		)
	);
}

export default Header;
