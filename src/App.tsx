import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Header } from "./components/layout/header";
import { SideBar } from "./components/layout/sideBar";
import * as Sentry from "@sentry/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeConfig, setThemeConfig] = useState(lightTheme);

  const onToggleThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(setThemeConfig);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Header
          onDarkModeClick={onToggleThemeClick}
          theme={theme}
          themeColor={themeConfig}
        ></Header>
        <SideBar>asd</SideBar>
        <h1>{`It's a ${theme} theme!`}</h1>
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Sentry.withProfiler(App);
