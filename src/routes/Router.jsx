import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Coverage from "../components/Pages/Coverage/Coverage";
import AuthLayOut from "../layout/AuthLayOut";
import Login from "../components/Pages/Auth/Login/Login";
import Register from "../components/Pages/Auth/register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../components/Pages/About/About";
import SendParcel from "../components/Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <div className="text-center mt-20">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayOut,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
