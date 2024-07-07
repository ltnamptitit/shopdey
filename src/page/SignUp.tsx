import { Button, Form, Input } from "antd";

import useAuth from "../hooks/useAuth";

type InputType = {
	email: string;
	password: string;
	fullname: string
};

const inittialSignupForm : InputType ={
	email: "",
	password: "",
	fullname: ""
}

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
	},
};



function SignUp() {
	const {handleSignup } = useAuth();
	const onFinish = (values: InputType) => {
		// console.log("Success:", values);
		handleSignup(values.email, values.password, values.fullname)
	};
	return (
		<div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
			<div className="min-w-96 w-full p-5 divide-y divide-gray-200 rounded-lg bg-white shadow">
				<Form
					layout="vertical"
					validateMessages={validateMessages}
					initialValues={{ inittialSignupForm }}
					onFinish={onFinish}
				>
					<Form.Item
						name="email"
						label="Email"
						rules={[{ required: true, type: "email" }]}
					>
						<Input placeholder="Enter your email" />
					</Form.Item>
					<Form.Item
						name="password"
						label="Password"
						rules={[{ required: true }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="confirm"
						label="Confirm password"
						dependencies={["password"]}
						rules={[
							{ required: true },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue("password") === value
									) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error(
											"The new password that you entered do not match!"
										)
									);
								},
							}),
						]}
						className="mb-11"
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="fullname"
						label="Fullname"
					>
						<Input placeholder="Enter your fullname" />
					</Form.Item>
					<Form.Item className="flex justify-center">
						<Button type="primary" htmlType="submit">
							Sign Up
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default SignUp;
