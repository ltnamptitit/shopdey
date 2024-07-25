import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	username: null | string,
	userId: null | string,
	roleId: null | string,
	accessToken: string,
	refreshToken: string,
	isLogged: boolean
}

const initialState: AuthState = {
	username: "Nam",
	userId: null,
	roleId: null,
	refreshToken: "",
	accessToken: "",
	// isLogged: true
	isLogged: false
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogged: (state: AuthState, action: PayloadAction<boolean>) => {
			state.isLogged = action.payload;
		},
		setToken: (state: AuthState, action: PayloadAction<[string, string]>) => {
			const [accessToken, refreshToken] = action.payload
			state.accessToken = accessToken
			state.refreshToken = refreshToken
		},
		setUserInfo: (state: AuthState, action: PayloadAction<[string, string, string]>) =>{
			const [userId, username, roleId] = action.payload
			state.username = username
			state.userId = userId
			state.roleId = roleId
		},
		clearState: (state: AuthState) => {
			state.username= null,
			state.userId= null,
			state.roleId= null,
			state.refreshToken= "",
			state.accessToken= "",
			state.isLogged= false
		},
	},
});

export const { setLogged, setToken, setUserInfo, clearState } = authSlice.actions;

export default authSlice.reducer;
