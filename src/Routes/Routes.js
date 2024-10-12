import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
