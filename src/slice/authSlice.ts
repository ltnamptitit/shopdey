import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	username: null | string,
	userId: null | string,
	roleId: null | string,
	accessToken: string | null,
	refreshToken: string | null,
	tokenId: null | string
	isLogged: boolean
}

const initialState: AuthState = {
	username: null,
	userId: null,
	roleId: null,
	refreshToken: null,
	accessToken: null,
	tokenId: null,
	isLogged: false
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogged: (state: AuthState, action: PayloadAction<boolean>) => {
			state.isLogged = action.payload;
		},
		setToken: (state: AuthState, action: PayloadAction<[string, string, string]>) => {
			const [accessToken, refreshToken, tokenId] = action.payload
			state.accessToken = accessToken
			state.refreshToken = refreshToken
			state.tokenId = tokenId
		},
		setUserInfo: (state: AuthState, action: PayloadAction<[string, string, string]>) =>{
			const [username, userId, roleId] = action.payload
			state.username = username
			state.userId = userId
			state.roleId = roleId
		},
		clearState: (state: AuthState) => {
			state.username= null,
			state.userId= null,
			state.roleId= null,
			state.refreshToken= null,
			state.accessToken= null,
			state.tokenId= null,
			state.isLogged= false
		},
	},
});

export const { setLogged, setToken, setUserInfo, clearState } = authSlice.actions;

export default authSlice.reducer;
