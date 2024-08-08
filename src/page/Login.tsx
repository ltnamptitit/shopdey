import { Button, Form, Input } from "antd";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { setLogged, setToken, setUserInfo } from "../redux/slice/authSlice";
import { store, useAppDispatch } from "../redux/store";

type InputType = {
  email: string;
  password: string;
};

const initialLoginForm: InputType = {
  email: "",
  password: "",
};
export const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

// const registerMode = useSelector(state => state.auth.)
function Login() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish = async (values: InputType) => {
    const response = await handleLogin(values.email, values.password);
    // console.log(response)
    if (response.status === 200) {
      console.log(response.data.accessToken, "hoangcheckLog");
      store.dispatch(setLogged(true));
      localStorage.setIte;
      store.dispatch(
        setToken([response?.data?.accessToken, response.data?.refreshToken])
      );
      store.dispatch(
        setUserInfo([
          response.data.data.userID,
          response.data.data.username,
          response.data.data.fullname,
        ])
      );
      navigate("/");
    }
  };
  return (
    <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
      <h1 className="mb-5 text-center text-2xl font-bold">Your Logo</h1>
      <div className="min-w-80 w-full p-5 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <Form
          layout="vertical"
          validateMessages={validateMessages}
          initialValues={initialLoginForm}
          onFinish={onFinish}
        >
          <Form.Item<InputType>
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item<InputType>
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
