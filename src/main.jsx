import React from "react";
import ReactDOM from "react-dom/client";
import Posts, {loader as postLoader} from "./routes/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/rootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [{ path: "/new-posting", element: <NewPost />, action: newPostAction }],
      },
      ,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
