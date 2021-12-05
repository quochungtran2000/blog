import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./context/Theme";
import { UserProvider } from "./context/User";
import Routers from "./Routers";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <Routers />
          <ToastContainer
            theme="colored"
            position="bottom-right"
            autoClose={2000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);
