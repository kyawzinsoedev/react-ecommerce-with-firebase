import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layouts/layout";
import App from "../pages/App";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
