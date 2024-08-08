import Search from "antd/es/input/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "antd";

function Header() {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  // const fullname = useSelector((state: RootState) => state.auth.username);
  const [inputSearch, setInputSearch] = useState<string>("");
  const navigate = useNavigate();
  const search = () => {
    console.log(inputSearch);
  };
  return (
    <div className="w-full flex flex-row justify-between py-6 border sticky bg-white">
      <div
        className="pl-4 flex justify-center items-center"
        onClick={() => navigate("/")}
      >
        <span>Logo</span>
      </div>
      {/* <div className="basis-auto"> */}
      <Search
        className="w-1/3"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onSearch={() => search()}
      />
      {/* </div> */}
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
            <Button type="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </>
        ) : (
          <>
            <div className="-2">
              <ShoppingOutlined className="text-3xl" />
            </div>
            <div>
              <UserOutlined className="text-3xl" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
