import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  bg: "#f2f2f2",
  bgCard: "#fff",
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<"light" | "dark">(
    colorScheme === "dark" ? "dark" : "light"
  );
  const [bg, setBg] = useState<"#191919" | "#f2f2f2">("#f2f2f2");
  const [bgCard, setBgCard] = useState<"#313639" | "#fff">("#fff");

  useEffect(() => {
    setBg(theme === "dark" ? "#191919" : "#f2f2f2");
    setBgCard(theme == "dark" ? "#313639" : "#fff");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ bg, bgCard, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
