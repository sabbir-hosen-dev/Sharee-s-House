import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Leayout/MainLayout";
import Home from './../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <Home />
      }
    ]
  },
]);

export default router;
