import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";

import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Product />
    </div>
  );
}

export default App;
