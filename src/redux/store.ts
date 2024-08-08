import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootReducer1 } from "./reducer";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

// Mở rộng interface `window` để thêm thuộc tính `store`
declare global {
  interface Window {
    store: typeof store;
  }
}

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// configure key to persist
// const authPersistConfig = {
//   key: "auth",
//   storage: storage,
//   whitelist: [
//     "username",
//     "userId",
//     "roleId",
//     "accessToken",
//     "refreshToken",
//     "isLogged",
//   ],
// };
const authPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"], // chỉ lưu state của auth
};

const persistedReducer = persistReducer(authPersistConfig, rootReducer1);

// const rootReducer = combineReducers({
//   auth: persistedReducer,
// });

// ========================|| Store ||========================
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

window.store = store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
