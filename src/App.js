import { BrowserRouter, Route, Routes } from "react-router-dom";
import loginPage from "./pages/LoginPage/LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<loginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
