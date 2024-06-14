import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Default from "./pages/Default";
import Restaurants from "./pages/Restaurants";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Default />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
