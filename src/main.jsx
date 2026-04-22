import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Páginas
import Home from "./routes/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
