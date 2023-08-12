import {motion, useAnimate} from "framer-motion";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/Login.jsx";
import CookieImage from "./assets/cookie-svgrepo-com.svg";
import {Button, Card, Image} from "@nextui-org/react";
import {Fragment, useEffect} from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!localStorage.getItem('isAllowCookie')) {
      animate(scope.current, {opacity: 1, y: 0, scale: 1});
    }
  }, [animate, scope]);

  return (
    <div>
      <RouterProvider router={router}/>
      <motion.div
        className={'flex justify-center items-center fixed bottom-0 w-full'}
        initial={{opacity: 0, y: 100, scale: 0}}
        ref={scope}
      >
        <Card
          className={'flex flex-row items-center gap-2 p-2 bg-default-700 text-white w-fit m-2'}
        >
          <Image src={CookieImage} className={'w-6 h-6 min-h-6 min-w-6'}/>
          <Fragment>
            <p className={'text-xs text-center text-default-300 w-full'}>
              We need cookies to run this app. Sorry for the inconvenience!
            </p>
            <Button
              size="sm"
              onPress={() => {
                localStorage.setItem('isAllowCookie', true);
                animate(scope.current, {opacity: 0, y: 100, scale: 0});
              }}
            >
              Accept
            </Button>
          </Fragment>
        </Card>
      </motion.div>
    </div>
  )
}

export default App
