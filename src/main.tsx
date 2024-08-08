import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persiststore, store } from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<>
		<Provider store={store}>
			<PersistGate persistor={persiststore}>
				<App />
			</PersistGate>
		</Provider>
	</>
	//</React.StrictMode>
);
