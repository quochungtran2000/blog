import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { Header } from "./components/Header";
import { DarkModeButton } from "./components/ui-kits/DarkModeButton";
function App() {
  const [theme, setTheme] = useState("light");
  const [themeConfig, setThemeConfig] = useState(lightTheme)

  const onToggleThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header onDarkModeClick={onToggleThemeClick} theme={theme} themeColor={themeConfig}></Header>
        <h1>{`It's a ${theme} theme!`}</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
