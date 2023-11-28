import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/user/User";
import Follower from "./pages/user/Follower";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "user/:userId",
        element: <User />,
        children: [{ path: "follower", element: <Follower /> }],
      },
    ],
  },
]);

export default Router;
