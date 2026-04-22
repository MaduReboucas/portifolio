import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Páginas
import Home from "./routes/home/Home";
import AboutMe from "./routes/aboutme/AboutMe";
import Interfaces from "./routes/projetos/interfaces/Interfaces";
import Websites from "./routes/projetos/websites/Websites";
import SocialMedia from "./routes/projetos/social_media/SocialMedia";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/projetos/interfaces",
        element: <Interfaces />,
      },
      {
        path: "/projetos/websites",
        element: <Websites />,
      },
      {
        path: "projetos/social-media",
        element: <SocialMedia />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
