import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { darkTheme, ITheme, lightTheme } from "../styles/theme";

type ContextValue = {
  sideMode: SideBarMode;
  setSideMode: () => void;
  theme: Theme;
  setTheme: () => void;
  currentTheme: ITheme;
};

export const ThemeContext = React.createContext<ContextValue>(null as any);

type Props = {
  children: React.ReactNode;
};

export type Theme = "dark" | "light";
export type SideBarMode = "open" | "close";
export interface IWindowSize {
  width: number | undefined;
  height: number | undefined;
}

export function CustomThemeProvider(props: Props) {
  const [theme, setTheme] = useState<Theme>("light");
  const [themeConfig, setThemeConfig] = useState<ITheme>(lightTheme);
  const [sideBarMode, setSideBarMode] = useState<SideBarMode>("open");
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  console.log(windowSize);

  const handleOpenSideBar = () => {
    const size: SideBarMode =
      (windowSize as any).width <= 600
        ? "close"
        : sideBarMode === "open"
        ? "close"
        : "open";

    setSideBarMode(size);
  };

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeConfig(theme === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        currentTheme: themeConfig,
        sideMode: sideBarMode,
        setSideMode: handleOpenSideBar,
      }}
    >
      <ThemeProvider theme={themeConfig}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
