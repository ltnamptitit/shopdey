import { Carousel } from "antd";
import { RootState, useAppDispatch } from "../store";
import { clearState } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import Category from "../components/Category";

function Home() {
	const { handleLogOut } = useAuth();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const accessTk = useSelector((state: RootState) => state.auth.accessToken);
	const refreshTk = useSelector(
		(state: RootState) => state.auth.refreshToken
	);
	const logout = async () => {
		await handleLogOut(accessTk, refreshTk);
		dispatch(clearState());
		navigate("/");
	};
	return (
		<>
			<div className="flex flex-col w-full md:max-w-screen-xl mx-auto px-4">
				<Carousel arrows autoplay className="border my-10">
					<div className="bg-orange-300 h-40">
						<h3 className="h-40">1</h3>
					</div>
					<div className="bg-orange-300">
						<h3>2</h3>
					</div>
					<div className="bg-orange-300">
						<h3>3</h3>
					</div>
					<div className="bg-orange-300">
						<h3>4</h3>
					</div>
				</Carousel>
				<Category name="Phone" />
				{/* <Category name="Watch" /> */}
				{/* <Button type="primary" onClick={() => logout()}>
					Log out
				</Button> */}
			</div>
		</>
	);
}

export default Home;
