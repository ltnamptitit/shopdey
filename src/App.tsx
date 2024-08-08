import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Header from "./components/Header";
import ManageTab from "./page/manage/ManageTab";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/*" element={<ProductDetail />} />
          <Route path="/manageTab" element={<ManageTab />} />
        </Routes>
        {/* <Login /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
