import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider({ children }) {
  const [darkNavTheme, setDarkNavTheme] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleTheme() {
    setDarkNavTheme(!darkNavTheme);
  }

  function isHamburgerOpen() {
    setIsOpen(!isOpen);
    console.log("isHamburgerOpen()", isOpen);
  }

  function darkNav() {
    setDarkNavTheme(true);
  }
  function lightNav() {
    setDarkNavTheme(false);
  }

  return (
    <ThemeContext.Provider value={{ darkNavTheme, isOpen }}>
      <ThemeUpdateContext.Provider
        value={{ toggleTheme, darkNav, lightNav, isHamburgerOpen }}
      >
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
