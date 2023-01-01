import { useEffect, useState } from "react";

export default function useDarkSide() {
  const prevTheme =
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme");
  const [theme, setTheme] = useState(prevTheme);

  const currentTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currentTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [currentTheme, setTheme];
}
