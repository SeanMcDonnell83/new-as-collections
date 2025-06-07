import { useContext } from "react";
import { useTheme } from "@/contexts/ThemeContext";

// Safe theme hook that provides fallbacks if ThemeProvider is not available
export const useThemeSafe = () => {
  try {
    return useTheme();
  } catch (error) {
    // Fallback when ThemeProvider is not available
    console.warn("ThemeProvider not found, using light theme as fallback");
    return {
      theme: "light" as const,
      toggleTheme: () => {
        console.warn("ThemeProvider not available, cannot toggle theme");
      },
    };
  }
};
