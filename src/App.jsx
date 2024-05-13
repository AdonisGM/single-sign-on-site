import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Information from "./components/menuLayout/menuItems/information/Information.jsx";
import MenuLayout from "./components/menuLayout/MenuLayout.jsx";
import Apps from "./components/menuLayout/menuItems/apps/Apps.jsx";
import Setting from "./components/menuLayout/menuItems/setting/Setting.jsx";
import Welcome from "./components/welcome/Welcome.jsx";
import Auth from "./components/auth/Auth.jsx";
import NonAuth from "./components/auth/NonAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <NonAuth><Login /></NonAuth>,
  },
  {
    path: "/sign-up",
    element: <NonAuth><Signup /></NonAuth>,
  },
  {
    path: "/",
    element: <Auth><MenuLayout /></Auth>,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/me",
        element: <Information />,
      },
      {
        path: "/apps",
        element: <Apps/>,
      },
      {
        path: "/settings",
        element: <Setting/>
      }
    ]
  },
  {
    path: "*",
    element: <p>404</p>,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster
        toastOptions={{
          className: 'bg-default-900 text-white text-sm',
        }}
        position="top-right"
      />
    </div>
  )
}

export default App
