import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider as App } from "react-router-dom";
import Index from "./routes/index";
import About from "./routes/about";
import Login from "./routes/login";
import { AuthProvider } from "./contexts/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App router={router} />
    </AuthProvider>
  </React.StrictMode>
);
