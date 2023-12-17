import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../store/store";
import Cart from "./Cart";
import NavBar from "./NavBarPanel";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Cart />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
