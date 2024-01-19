import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost.jsx";
import RootLayout from "./routes/rootLayout.jsx";

const router = createBrowserRouter([
  {
    path:<RootLayout/>,
    elemen:"/",
    children: [
      { path: "/", element: <App /> },
      { path: "/new-posting", element: <NewPost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
