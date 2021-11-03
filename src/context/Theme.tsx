import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { darkTheme, ITheme, lightTheme } from "../styles/theme";

type ContextValue = {
  theme: Theme;
  setTheme: () => void;
  currentTheme: ITheme;
};

export const ThemeContext = React.createContext<ContextValue>(null as any);

type Props = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

export function CustomThemeProvider(props: Props) {
  const [theme, setTheme] = useState<Theme>("light");
  const [themeConfig, setThemeConfig] = useState(lightTheme);

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeConfig(theme === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleSetTheme, currentTheme: themeConfig }}
    >
      <ThemeProvider theme={themeConfig}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
function useEffect(arg0: () => () => void, arg1: Theme[]) {
  throw new Error("Function not implemented.");
}
