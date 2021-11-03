import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./context/Theme";
import { UserProvider } from "./context/User";
import Routers from "./Routers";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <Routers />
          <ToastContainer autoClose={3000} />
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);
