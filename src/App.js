import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/register" element={<LoginPage />} />
        <Route path="/users" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
