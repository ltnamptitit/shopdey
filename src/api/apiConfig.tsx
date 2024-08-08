import axios, { HttpStatusCode } from "axios";
import { logout, refreshToken } from "./authAPI";
import { RootState, store } from "../redux/store";
import { setToken } from "../redux/slice/authSlice";
import { useSelector } from "react-redux";

const baseURL = `${import.meta.env.VITE_URL_LOCAL}`;
const excludedUrls = ["login", "signup", "refreshToken", "logout", "/page"];

//const rft = useSelector((state: RootState) => state.auth.refreshToken);

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      if (error && error.response.status == HttpStatusCode.Unauthorized) {
        const rfToken = store.getState().auth.refreshToken;
        console.log("check rf token when token expired ", rfToken);
        const dataToken = await refreshToken(rfToken);
        console.log("check new rf token ", dataToken);
        store.dispatch(
          setToken([dataToken.accessToken, dataToken.refreshToken])
        );
      }
    } catch (error) {
      let accessToken = store.getState().auth.accessToken;
      let rfToken = store.getState().auth.refreshToken;
      //await logout(accessToken, rfToken);
      return Promise.reject(error);
    }
  }
);

// request with accessToken
const onRequestSuccess = async (config?: any) => {
  const accessToken = store.getState().auth.accessToken;
  if (accessToken) {
    const shouldExclude = excludedUrls.some((url) => config.url?.includes(url));
    if (!shouldExclude) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
};

//processes before request 20/03/2024
axiosInstance.interceptors.request.use(onRequestSuccess, (error) => {
  return Promise.reject(error);
});
