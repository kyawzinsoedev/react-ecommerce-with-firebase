import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layouts/layout";
import App from "../pages/App";
import Home from "../pages/Home";
export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
