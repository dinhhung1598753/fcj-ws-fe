import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import {
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Cookies from "js-cookie";

const isAuth = Cookies.get("accessToken");

const ProtectedRouteApp = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <App />;
};

const ProtectedRouteLogin = ({ isAuth }) => {
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <Login />;
};

const router = createHashRouter([
  {
    path: "/",
    index: true,
    element: <ProtectedRouteApp />,
  },
  {
    path: "/login",
    element: <ProtectedRouteLogin isAuth={isAuth} />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
