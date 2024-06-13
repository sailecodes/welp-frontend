import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
