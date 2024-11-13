import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ShopProvider } from "./Context/ShopContext";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>
);
