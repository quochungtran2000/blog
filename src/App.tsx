import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./context/Theme";
import { UserProvider } from "./context/User";
import Routers from "./Routers";
import { SideBarProvider } from "./context/SideBar";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <SideBarProvider>
            <Routers />
            <ToastContainer autoClose={3000} />
          </SideBarProvider>
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);
