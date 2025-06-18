import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "dark";
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", theme);

    // Apply theme to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // Ensure dark mode is applied by default
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme-aware color classes
export const themeClasses = {
  // Backgrounds
  bg: {
    primary: "bg-white dark:bg-neutral-900",
    secondary: "bg-neutral-50 dark:bg-neutral-800",
    tertiary: "bg-neutral-100 dark:bg-neutral-700",
    accent: "bg-blue-50 dark:bg-blue-950",
  },
  // Text colors
  text: {
    primary: "text-neutral-900 dark:text-neutral-100",
    secondary: "text-neutral-700 dark:text-neutral-300",
    tertiary: "text-neutral-600 dark:text-neutral-400",
    muted: "text-neutral-500 dark:text-neutral-500",
    accent: "text-blue-600 dark:text-blue-400",
  },
  // Borders
  border: {
    primary: "border-neutral-200 dark:border-neutral-700",
    secondary: "border-neutral-300 dark:border-neutral-600",
  },
  // Interactive elements
  button: {
    primary:
      "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white",
    secondary:
      "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100",
    outline:
      "border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800",
  },
};
