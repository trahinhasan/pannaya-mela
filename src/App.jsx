import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
import store from "./store/store";

import Cart from "./components/Cart";
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
      <Provider store={store}>
        <Product />
      </Provider>
    </div>
  );
}

export default App;
