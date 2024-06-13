import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/custom/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
